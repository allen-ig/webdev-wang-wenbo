module.exports = function (app) {

  // get hold of the websiteModel and userModel and pageModel and widgetModel
  const websiteModel = require('../models/website/website.model.server');
  const userModel = require('../models/user/user.model.server');
  const pageModel = require('../models/page/page.model.server');
  const widgetModel = require('../models/widget/widget.model.server');

  // the http CRUD operations on websites

  // find all websites for user with certain userId
  app.get("/api/user/:uid/website", function (req, res) {
    const userId = req.params.uid;
    console.log("Getting the websites for user " + userId + ": ");
    websiteModel.findAllWebsitesForUser(userId).exec((err, websites) => {
      if (err) {
        console.log('Error finding the websites for userId: ' + userId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding the websites for userId: ' + userId);
        res.status(200).json(websites);
      }
    });
  });

  // find website by website Id
  app.get('/api/website/:wid', function (req, res) {
    const websiteId = req.params.wid;
    console.log('Getting the website for Id ' + websiteId + ': ');
    websiteModel.findWebsiteById(websiteId).exec((err, website) => {
      if (err) {
        console.log('Error retrieving the website by Id: ' + websiteId);
        res.status(400).send(err);
      } else {
        if (website) {
          console.log('Found the website by Id: ' + websiteId);
          res.status(200).json(website);
        } else {
          console.log('Cannot find the website by Id: ' + websiteId);
          res.send(null);
        }
      }
    });
  });

  // update the website associated with the website Id
  app.put('/api/website/:wid', function (req, res) {
    const websiteId = req.params.wid;
    const newWebsite = req.body;
    console.log('Updating the website for Id ' + websiteId + ': ');
    websiteModel.updateWebsite(websiteId, newWebsite).exec((err, updatedWebsite) => {
      if (err) {
        console.log('Error updating the website by Id: ' + websiteId);
        res.status(400).send(err);
      } else {
        if (updatedWebsite) {
          console.log('Finished updating the website by Id: ' + websiteId);
          res.status(200).json(updatedWebsite);
        } else {
          console.log('Cannot find the website by Id: ' + websiteId);
          res.send(null);
        }
      }
    });
  });

  // delete website
  app.delete('/api/website/:wid', function (req, res) {
    const websiteId = req.params.wid;
    console.log('Deleting the website for Id ' + websiteId + ': ');
    websiteModel.deleteWebsite(websiteId).exec((err, deletedWebsite) => {
      if (err) {
        console.log('Error deleting the website by Id: ' + websiteId);
        res.status(400).send(err);
      } else {
        if (deletedWebsite) {
          // delete all pages and widgets for the website
          for (let i = 0; i < deletedWebsite.pages.length; i++) {
            pageModel.findPageById(deletedWebsite.pages[i]).exec((errPage, p) => {
              for (let j = 0; j < p.widgets.length; j++) {
                widgetModel.deleteWidget(p.widgets[j]).exec();
              }
              pageModel.deletePage(deletedWebsite.pages[i]).exec();
            });
          }
          console.log('Finished deleting the pages and widgets in the websiteId: ' + websiteId);
          userModel.findUserById(deletedWebsite.developerId).exec((findUserError, user) => {
            if (findUserError) {
              console.log('Error finding the user by Id when delete website!');
              res.status(400).send(findUserError);
            } else {
              user.websites.splice(user.websites.indexOf(websiteId), 1);
              user.save((postUserError, postedUser) => {
                if (postUserError) {
                  console.log('Error posting the new user after deleting the website!');
                  res.status(400).send(postUserError);
                } else {
                  console.log('Finished deleting the website by Id: ' + websiteId);
                  res.status(200).json(deletedWebsite);
                }
              });
            }
          });
        } else {
          console.log('Cannot find the website by Id: ' + websiteId);
          res.send(null);
        }
      }
    });
  });

  // create website
  app.post('/api/user/:uid/website', function (req, res) {
    const userId = req.params.uid;
    const newWebsite = req.body;
    console.log('Posting new website: ');
    console.log(newWebsite);
    websiteModel.createWebsiteForUser(newWebsite).then(
      (postedWebsite) => {
        userModel.findUserById(userId).exec((findUserError, user) => {
          if (findUserError) {
            console.log('Error finding the user by userId: ' + userId);
            res.status(400).send(findUserError);
          } else {
            user.websites.push(postedWebsite);
            user.save((postUserError, postedUser) => {
              if (postUserError) {
                console.log('Error posting the new user with new website!');
                res.status(400).send(postUserError);
              } else {
                console.log('Finished posting the new website for userId: ' + userId);
                res.status(200).json(postedWebsite);
              }
            })
          }
        });
      },
      (err) => {
        console.log('Error posting the website!');
        res.status(400).send(err);
      }
    );
  })
};
