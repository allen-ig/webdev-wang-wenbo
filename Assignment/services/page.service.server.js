module.exports = function (app) {
  // the pages array to store all the pages to mimic the database
  var pages = [
    {_id: "1", name: "Home Page", websiteId: "3", title: "Home"},
    {_id: "2", name: "Index Page", websiteId: "3", title: "Index"},
    {_id: "3", name: "About Page", websiteId: "3", title: "Page"},
    {_id: "4", name: "Home Page", websiteId: "4", title: "Home"},
    {_id: "5", name: "Index Page", websiteId: "5", title: "Index"},
    {_id: "6", name: "About Page", websiteId: "6", title: "Page"},
    {_id: "7", name: "Home Page", websiteId: "7", title: "Home"},
    {_id: "8", name: "Index Page", websiteId: "8", title: "Index"},
    {_id: "9", name: "About Page", websiteId: "9", title: "Page"},
    {_id: "10", name: "Home Page", websiteId: "10", title: "Home"},
    {_id: "11", name: "Index Page", websiteId: "11", title: "Index"},
    {_id: "12", name: "About Page", websiteId: "12", title: "Page"},
    {_id: "13", name: "Home Page", websiteId: "1", title: "Home"},
    {_id: "14", name: "Index Page", websiteId: "1", title: "Index"},
    {_id: "15", name: "About Page", websiteId: "2", title: "Page"}
  ];

  // get hold of pageModel and websiteModel
  const pageModel = require('../models/page/page.model.server');
  const websiteModel = require('../models/website/website.model.server');

  // the http calls
  // create a new page
  app.post("/api/website/:wid/page", function (req, res) {
    const websiteId = req.params.wid;
    const newPage = req.body;
    console.log("Creating a new page for website Id " + websiteId + ": ");
    console.log("Posting the new page: ");
    console.log(newPage);
    pageModel.createPage(newPage).then(
      (postedPage) => {
        websiteModel.findWebsiteById(websiteId).exec((findWebsiteError, website) => {
          if (findWebsiteError) {
            console.log('Error finding the website when post new page! websiteId: ' + websiteId);
            res.status(400).send(findWebsiteError);
          } else {
            website.pages.push(postedPage);
            website.save((postWebsiteError, postedWebsite) => {
              if (postWebsiteError) {
                console.log('Error posting the website with new page!');
                res.status(400).send(postWebsiteError);
              } else {
                console.log('Finished posting the new page for websiteId: ' + websiteId);
                res.status(200).json(postedPage);
              }
            });
          }
        });
      },
      (err) => {
        console.log('Error posting the new page!');
        res.status(400).send(err);
      }
    );
  });

  // find all pages for the website id
  app.get("/api/website/:wid/page", function (req, res) {
    const websiteId = req.params.wid;
    console.log("Getting all the pages of website id " + websiteId + ": ");
    pageModel.findAllPagesForWebsite(websiteId).exec((err, pages) => {
      if (err) {
        console.log('Error finding all pages for websiteId: ' + websiteId);
        res.status(400).send(err);
      } else {
        console.log('Finished finding all pages for websiteId: ' + websiteId);
        res.status(200).json(pages);
      }
    });
  });

  // find page by its id
  app.get("/api/page/:pid", function (req, res) {
    const pageId = req.params.pid;
    console.log("Getting the page with Id " + pageId + ": ");
    pageModel.findPageById(pageId).exec((err, page) => {
      if (err) {
        console.log('Error finding the page for pageId: ' + pageId);
        res.status(400).send(err);
      } else {
        if (page) {
          console.log('Found the page for pageId: ' + pageId);
          res.status(200).json(page);
        } else {
          console.log('Cannot find the page of pageId: ' + pageId);
          res.send(null);
        }
      }
    });
  });

  // update the page with id
  app.put("/api/page/:pid", function (req, res) {
    const pageId = req.params.pid;
    const newPage = req.body;
    console.log("Updating the page id " + pageId + ": ");
    pageModel.updatePage(pageId, newPage).exec((err, updatedPage) => {
      if (err) {
        console.log('Error updating the page for pageId: ' + pageId);
        res.status(400).send(err);
      } else {
        if (updatedPage) {
          console.log('Finished updating the page for pageId: ' + pageId);
          res.status(200).json(updatedPage);
        } else {
          console.log('Cannot find the page for pageId: ' + pageId);
          res.send(null);
        }
      }
    });
  });

  // delete the page
  app.delete("/api/page/:pid", function (req, res) {
    const pageId = req.params.pid;
    console.log("Deleting the page id " + pageId + ": ");
    pageModel.deletePage(pageId).exec((err, deletedPage) => {
      if (err) {
        console.log('Error deleting the page for pageId: ' + pageId);
        res.status(400).send(err);
      } else {
        if (deletedPage) {
          websiteModel.findWebsiteById(deletedPage.websiteId).exec((findWebsiteError, website) => {
            if (findWebsiteError) {
              console.log('Error finding the website when delete the page!');
              res.status(400).send(findWebsiteError);
            } else {
              website.pages.splice(website.pages.indexOf(pageId), 1);
              website.save((postWebsiteError, postedWebsite) => {
                if (postWebsiteError) {
                  console.log('Error posting the website after deleting the page for pageId: ' + pageId);
                  res.status(400).send(postWebsiteError);
                } else {
                  console.log('Finished deleting the page for pageId: ' + pageId);
                  res.status(200).json(deletedPage);
                }
              });
            }
          });
        } else {
          console.log('Cannot find the page with pageId: ' + pageId);
          res.send(null);
        }
      }
    });
  });
};
