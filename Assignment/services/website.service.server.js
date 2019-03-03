module.exports = function(app) {
  // the websites array
  var websites = [
    { _id: "1", name: "Facebook", developerId: "456", description: "Lorem" },
    { _id: "2", name: "Twitter", developerId: "456", description: "Lorem" },
    { _id: "3", name: "Gizmodo", developerId: "456", description: "Lorem" },
    { _id: "4", name: "Go", developerId: "123", description: "Lorem" },
    { _id: "5", name: "Tic Tac Toe", developerId: "123", description: "Lorem" },
    { _id: "6", name: "Checkers", developerId: "123", description: "Lorem" },
    {
      _id: "7",
      name: "Chess",
      developerId: "234",
      description: "The chess app"
    },
    {
      _id: "8",
      name: "Soccer",
      developerId: "234",
      description: "We love soccer"
    },
    {
      _id: "9",
      name: "Tennis",
      developerId: "234",
      description: "Mario Tennis!"
    },
    { _id: "10", name: "Google", developerId: "345", description: "Google" },
    { _id: "11", name: "Nike", developerId: "345", description: "Nike" },
    {
      _id: "12",
      name: "Hello Kitty",
      developerId: "345",
      description: "Hello Kitty"
    }
  ];

  // the http CRUD operations on websites

  // find all websites for user with certain userId
  app.get("/api/user/:uid/website", function(req, res) {
    var userId = req.params.uid;
    console.log("Getting the websites for user " + userId + ": ");
    res.status(200).send(
      websites.filter(function(website) {
        return website.developerId == userId;
      })
    );
  });

  // find website by website Id
  app.get('/api/website/:wid', function(req, res) {
    var websiteId = req.params.wid;
    console.log('Getting the website for Id ' + websiteId + ': ');
    res.status(200).send(websites.find(function(website) {
      return website._id == websiteId;
    }))
  });

  // update the website associated with the website Id
  app.put('/api/website/:wid', function(req, res) {
    var websiteId = req.params.wid;
    var newWebsite = req.body;
    console.log('Updating the website for Id ' + websiteId + ': ');
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id == websiteId) {
        websites[i].name = newWebsite.name;
        websites[i].description = newWebsite.description;
        console.log('The website updated to: ');
        console.log(websites[i]);
        res.json(websites[i]);
        return;
      }
    }
    res.send(null);
  })

  // delete website
  app.delete('/api/website/:wid', function(req, res) {
    var websiteId = req.params.wid;
    console.log('Deleting the website for Id ' + websiteId + ': ');
    for (var i = 0; i < websites.length; i++) {
      if (websites[i]._id == websiteId) {
        console.log('Deleted the website: ');
        console.log(websites[i]);
        res.json(websites[i]);
        websites.splice(i, 1);
        console.log('The rest websites are: ');
        console.log(websites);
        return;
      }
    }
    res.send(null);
  })

  // create website
  app.post('/api/user/:uid/website', function(req, res) {
    var userId = req.params.uid;
    var newWebsite = req.body;
    console.log('Posted new website: ');
    console.log(newWebsite);
    websites.push(newWebsite);
    res.json(newWebsite);
  })
};
