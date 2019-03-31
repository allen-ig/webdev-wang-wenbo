module.exports = function (app) {

  // get hold of the userModel, websiteModel, pageModel and widgetModel
  const userModel = require('../models/user/user.model.server');
  const websiteModel = require('../models/website/website.model.server');
  const pageModel = require('../models/page/page.model.server');
  const widgetModel = require('../models/widget/widget.model.server');

  // to get all the users to test
  app.get('/api/users', (req, res) => {
    console.log('Getting all users...');
    userModel.findAllUsers().exec((err, users) => {
      if (err) {
        console.log('Error getting all users!');
      } else {
        res.status(200).json(users);
      }
    });
  });

  // Now implement the CRUD http call apis

  // find user by Id
  app.get("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    console.log("User Id to query: " + userId);
    userModel.findUserById(userId).exec((err, user) => {
      if (err) {
        console.log('Error finding user by id!');
        res.status(400).send(err);
      } else {
        console.log('Found the user with id: ' + userId);
        res.status(200).json(user);
      }
    });
  });

  // find user by credentials and find user by username
  function findUserByUsername(res, username) {
    userModel.findUserByUsername(username).exec((err, user) => {
      if (err) {
        console.log('Error finding the user by username!');
        res.status(400).send(err);
      } else {
        if (user) {
          console.log('Found the user with username: ' + username);
          res.status(200).json(user);
        } else {
          console.log('No user found with username: ' + username + '!');
          res.send(null);
        }
      }
    });
  }

  function findUserByCredentials(res, username, password) {
    userModel.findUserByCredentials(username, password).exec((err, user) => {
      if (err) {
        console.log('Error finding the user by credentials!');
        res.status(400).send(err);
      } else {
        if (user) {
          console.log('Found the user with credentials.');
          res.status(200).json(user);
        } else {
          console.log('Cannot find the user with the given credentials!');
          res.send(null);
        }
      }
    });
  }

  app.get("/api/user", function (req, res) {
    const username = req.query.username;
    const password = req.query.password;
    if (typeof username != "undefined" && typeof password != "undefined") {
      console.log(
        "User username to query: " + username + ", and password: " + password
      );
      findUserByCredentials(res, username, password);
    } else if (typeof password == "undefined") {
      console.log("User username to query: " + username);
      console.log("Password is: " + password);
      findUserByUsername(res, username);
    }
  });

  // update user
  app.put("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    const newUser = req.body;
    console.log("New User Id: " + userId + ", and new user: ");
    console.log(newUser);
    userModel.updateUser(userId, newUser).exec((err, updatedUser) => {
      if (err) {
        console.log('Error updating the user with userId: ' + userId);
        res.status(400).send(err);
      } else {
        if (updatedUser) {
          console.log('Finished updating the user.');
          res.status(200).json(updatedUser);
        } else {
          console.log('Cannot find the user given userId: ' + userId);
          res.send(null);
        }
      }
    });
  });

  // delete user
  app.delete("/api/user/:uid", function (req, res) {
    const userId = req.params.uid;
    console.log("User Id to delete: " + userId);
    userModel.deleteUser(userId).exec((err, deletedUser) => {
      if (err) {
        console.log('Error deleting the user given userId: ' + userId);
        res.status(400).send(err);
      } else {
        if (deletedUser) {
          // delete all websites and pages and widgets
          for (let i = 0; i < deletedUser.websites.length; i++) {
            websiteModel.deleteWebsite(deletedUser.websites[i]).exec((errWebsite, w) => {
              for (let j = 0; j < w.pages.length; j++) {
                pageModel.deletePage(w.pages[j]).exec((errPage, p) => {
                  for (let k = 0; k < p.widgets.length; k++) {
                    widgetModel.deleteWidget(p.widgets[k]).exec();
                  }
                });
              }
            });
          }
          console.log('Finished deleting all the websites, pages and widgets for the userId: ' + userId);
          console.log('Finished deleting the user given userId: ' + userId);
          res.status(200).json(deletedUser);
        } else {
          console.log('Cannot find the user given userId: ' + userId);
          res.send(null);
        }
      }
    });
  });

  // create user
  app.post('/api/user', (req, res) => {
    const newUser = req.body;
    console.log('Posted new user: ');
    console.log(newUser);
    userModel.createUser(newUser).then(
      (postedUser) => {
        console.log('Finished posting the user.');
        res.status(200).json(postedUser);
      },
      (err) => {
        console.log('Error posting the new user!');
        res.status(400).send(err);
      }
    );
  });
};
