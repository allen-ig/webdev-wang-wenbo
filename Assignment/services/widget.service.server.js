const express = require('express');
const path = require('path');
const multer = require('multer');
const ejs = require('ejs');

module.exports = function (app) {
  // get hold of widgetModel and pageModel
  const widgetModel = require('../models/widget/widget.model.server');
  const pageModel = require('../models/page/page.model.server');

  // the http calls
  // create a new widget
  app.post("/api/page/:pid/widget", function (req, res) {
    const pageId = req.params.pid;
    const newWidget = req.body;
    console.log("Creating a new widget for page id " + pageId + ": ");
    console.log("Created the following new widget: ");
    console.log(newWidget);
    widgetModel.createWidget(newWidget).then(
      (postedWidget) => {
        pageModel.findPageById(pageId).exec((findPageError, page) => {
          if (findPageError) {
            console.log('Error finding the page when post new widget! pageId: ' + pageId);
            res.status(400).send(findPageError);
          } else {
            postedWidget.position = page.widgets.length;
            page.widgets.push(postedWidget);
            page.save((savePageError, savedPage) => {
              if (savePageError) {
                console.log('Error saving the page after posting the new widget!');
                res.status(400).send(savePageError);
              } else {
                postedWidget.save((saveWidgetError, savedWidget) => {
                  if (saveWidgetError) {
                    console.log('Error saving the widget after updating the position!');
                    res.status(400).send(saveWidgetError);
                  } else {
                    res.status(200).json(savedWidget);
                  }
                })
              }
            })
          }
        });
      },
      (err) => {
        console.log('Error posting the new widget!');
        res.status(400).send(err);
      }
    );
  });

  // find all widgets for page id
  app.get("/api/page/:pid/widget", function (req, res) {
    const pageId = req.params.pid;
    console.log("Getting all widgets for page id " + pageId + ": ");
    widgetModel.findAllWidgetsForPage(pageId).exec((err, widgets) => {
      if (err) {
        console.log('Error finding all widgets for pageId: ' + pageId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding all widgets for pageId: ' + pageId);
        // sort the widgets by its position
        widgets.sort(function (a, b) {
          return a.position - b.position
        });
        res.status(200).json(widgets);
      }
    });
  });

  // find widget by its id
  app.get("/api/widget/:wid", function (req, res) {
    const widgetId = req.params.wid;
    console.log("Getting the widget id " + widgetId + ": ");
    widgetModel.findWidgetById(widgetId).exec((err, widget) => {
      if (err) {
        console.log('Error finding the widget for widgetId: ' + widgetId);
        res.status(400).send(err);
      } else if (widget) {
        console.log('Found the widget for widgetId:' + widgetId);
        res.status(200).json(widget);
      } else {
        console.log('Cannot find the widget for widgetId: ' + widgetId);
        res.send(null);
      }
    });
  });

  // update a widget by its id
  app.put("/api/widget/:wid", function (req, res) {
    const widgetId = req.params.wid;
    const newWidget = req.body;
    console.log("Updating the widget id " + widgetId + ": ");
    widgetModel.updateWidget(widgetId, newWidget).exec((err, updatedWidget) => {
      if (err) {
        console.log('Error updating the widget for widgetId: ' + widgetId);
        res.status(400).send(err);
      } else if (updatedWidget) {
        console.log('Finished updating the widget for widgetId: ' + widgetId);
        res.status(200).json(updatedWidget);
      } else {
        console.log('Cannot find the widget for widgetId: ' + widgetId);
        res.send(null);
      }
    });
  });

  // delete widget
  app.delete("/api/widget/:wid", function (req, res) {
    const widgetId = req.params.wid;
    console.log("Deleting the widget id " + widgetId + ": ");
    widgetModel.deleteWidget(widgetId).exec((err, deletedWidget) => {
      if (err) {
        console.log('Error deleting the widget for widgetId: ' + widgetId);
        res.status(400).send(err);
      } else if (deletedWidget) {
        pageModel.findPageById(deletedWidget.pageId).exec((findPageError, page) => {
          if (findPageError) {
            console.log('Error finding the page when delete widget!');
            res.status(400).send(findPageError);
          } else {
            let widgetIndex = page.widgets.indexOf(widgetId);
            page.widgets.splice(widgetIndex, 1);
            page.save();
            for (let i = widgetIndex; i < page.widgets.length; i++) {
              widgetModel.findWidgetById(page.widgets[i]).exec((parseWidgetError, parsedWidget) => {
                parsedWidget.position = parsedWidget.position - 1;
                parsedWidget.save();
              });
            }
            res.status(200).json(deletedWidget);
          }
        });
      } else {
        console.log('Cannot find the widget when delete, widgetId: ' + widgetId);
        res.send(null);
      }
    });
  });

  // update the order of the widget in the database array
  app.put('/api/page/:pid/widget', function (req, res) {
    const pageId = req.params.pid;
    let startIndex = parseInt(req.query.initial, 10);
    let endIndex = parseInt(req.query.final, 10);
    widgetModel.reorderWidget(pageId).exec((err, page) => {
      if (err) {
        console.log('Error finding the page when reorder widgets, pageId: ' + pageId);
        res.status(400).send(err);
      } else if (page) {
        widgetModel.findWidgetById(page.widgets[startIndex]).exec((findStartWidgetError, startWidget) => {
          startWidget.position = endIndex;
          startWidget.save();
          if (endIndex >= startIndex) {
            for (let i = startIndex + 1; i <= endIndex; i++) {
              widgetModel.findWidgetById(page.widgets[i]).exec((findWidgetError, restWidget) => {
                restWidget.position = restWidget.position - 1;
                restWidget.save();
              });
            }
          } else {
            for (let i = endIndex; i <= startIndex - 1; i++) {
              widgetModel.findWidgetById(page.widgets[i]).exec((findWidgetError, restWidget) => {
                restWidget.position = restWidget.position + 1;
                restWidget.save();
              });
            }
          }
          page.widgets.splice(endIndex, 0, page.widgets.splice(startIndex, 1));
          page.save();
          console.log('Finished reordering the widgets from ' + startIndex + ' to ' + endIndex);
          res.status(200).json(startWidget);
        });
      } else {
        console.log('Cannot find the page when reorder widgets, pageId: ' + pageId);
        res.send(null);
      }
    });
  });

  // upload the image of the image widget
  // before start, use the public assets folder to hold uploads
  console.log('Public assets folder: ');
  console.log(path.join(__dirname, '/../../src/assets/uploads'));
  app.use(express.static(path.join(__dirname, '/../../src/assets/uploads')));

  // first, set up storage engine
  const storage = multer.diskStorage({
    destination: './src/assets/uploads',
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now());
    }
  });

  // init upload
  const upload = multer({
    storage: storage,
    limits: {fileSize: 10000000},
    fileFilter: function (req, file, cb) {
      checkFileType(file, cb);
    }
  }).single('imageFile');

  // check file type helper
  function checkFileType(file, cb) {
    // allowed extension
    const fileTypes = /jpeg|png|gif|jpg|tiff/;
    // first check extension name
    const extnameValid = fileTypes.test(path.extname(file.originalname).toLowerCase());
    // second, check mime
    const mimetypeValid = fileTypes.test(file.mimetype);
    // then check if both are true
    if (extnameValid && mimetypeValid) {
      return cb(null, true);
    } else {
      // cb({
      //   message: 'Error: Images Only!'
      // });
      cb('Error: Images Only!');
    }
  }

  // make post request
  app.post('/api/upload', function (req, res) {
    // call the upload
    upload(req, res, (err) => {
      // get the const variables
      const userId = req.body.userId;
      const websiteId = req.body.websiteId;
      const pageId = req.body.pageId;
      const widgetId = req.body.widgetId;
      const widgetEditUrl = `/website/${websiteId}/page/${pageId}/widget/${widgetId}`;
      const widgetListUrl = `/website/${websiteId}/page/${pageId}/widget`;
      if (err) {
        console.log(err.message);
        res.status(400).send(err.message);
      } else {
        console.log(req.body);
        console.log(req.file);
        if (req.file === undefined) {
          console.log('No file selected!');
          // res.status(400).send('No file selected!');
          res.redirect(widgetEditUrl);
        } else {
          // res.status(200).send(req.file.path);
          widgetModel.findWidgetById(widgetId).exec((findWidgetError, widget) => {
            if (findWidgetError) {
              console.log('Error finding the widget when upload the image! widgetId: ' + widgetId);
              res.status(400).send(findWidgetError);
            } else {
              widget.url = `/${req.file.filename}`;
              widget.save();
              res.redirect(widgetListUrl);
            }
          });
        }
      }
    })
  });

  // EJS
  // ejs index page
  app.get('/test/ejs', (req, res) => {
    res.render('index');
  });

  // ejs upload test
  app.post('/test/ejs/upload', (req, res) => {
    // call the upload we just set
    upload(req, res, (err) => {
      if (err) {
        res.render('index', {
          msg: err
        });
      } else {
        console.log(req.file);
        console.log(req.body);
        if (req.file === undefined) {
          res.render('index', {
            msg: 'Error: No File Selected!'
          });
        } else {
          res.render('index', {
            msg: 'File Uploaded!',
            file: `/${req.file.filename}`
          })
        }
      }
    })
  });
};
