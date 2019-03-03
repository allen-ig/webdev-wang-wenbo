module.exports = function(app) {
  // the pages array to store all the pages to mimic the database
  var pages = [
    { _id: "1", name: "Home Page", websiteId: "3", title: "Home" },
    { _id: "2", name: "Index Page", websiteId: "3", title: "Index" },
    { _id: "3", name: "About Page", websiteId: "3", title: "Page" },
    { _id: "4", name: "Home Page", websiteId: "4", title: "Home" },
    { _id: "5", name: "Index Page", websiteId: "5", title: "Index" },
    { _id: "6", name: "About Page", websiteId: "6", title: "Page" },
    { _id: "7", name: "Home Page", websiteId: "7", title: "Home" },
    { _id: "8", name: "Index Page", websiteId: "8", title: "Index" },
    { _id: "9", name: "About Page", websiteId: "9", title: "Page" },
    { _id: "10", name: "Home Page", websiteId: "10", title: "Home" },
    { _id: "11", name: "Index Page", websiteId: "11", title: "Index" },
    { _id: "12", name: "About Page", websiteId: "12", title: "Page" },
    { _id: "13", name: "Home Page", websiteId: "1", title: "Home" },
    { _id: "14", name: "Index Page", websiteId: "1", title: "Index" },
    { _id: "15", name: "About Page", websiteId: "2", title: "Page" }
  ];

  // the http calls
  // create a new page
  app.post("/api/website/:wid/page", function(req, res) {
    var websiteId = req.params.wid;
    var newPage = req.body;
    console.log("Creating a new page for website Id " + websiteId + ": ");
    console.log("Posted the new page: ");
    console.log(newPage);
    pages.push(newPage);
    res.status(200).json(newPage);
  });

  // find all pages for the website id
  app.get("/api/website/:wid/page", function(req, res) {
    var websiteId = req.params.wid;
    console.log("Getting all the pages of website id " + websiteId + ": ");
    res.status(200).send(
      pages.filter(function(page) {
        return page.websiteId == websiteId;
      })
    );
  });

  // find page by its id
  app.get("/api/page/:pid", function(req, res) {
    var pageId = req.params.pid;
    console.log("Getting the page with Id " + pageId + ": ");
    res.status(200).send(
      pages.find(function(page) {
        return page._id == pageId;
      })
    );
  });

  // update the page with id
  app.put("/api/page/:pid", function(req, res) {
    var pageId = req.params.pid;
    var newPage = req.body;
    console.log("Updating the page id " + pageId + ": ");
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id == pageId) {
        pages[i].name = newPage.name;
        pages[i].title = newPage.title;
        console.log("Updated the page to: ");
        console.log(pages[i]);
        res.status(200).json(pages[i]);
        return;
      }
    }
    res.send(null);
  });

  // delete the page
  app.delete("/api/page/:pid", function(req, res) {
    var pageId = req.params.pid;
    console.log("Deleting the page id " + pageId + ": ");
    for (var i = 0; i < pages.length; i++) {
      if (pages[i]._id == pageId) {
        console.log("Deleted the page: ");
        console.log(pages[i]);
        res.status(200).json(pages[i]);
        pages.splice(i, 1);
        return;
      }
    }
    res.send(null);
  });
};
