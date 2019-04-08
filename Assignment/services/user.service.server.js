module.exports = function (app) {

  // get hold of the userModel, websiteModel, pageModel and widgetModel
  const userModel = require('../models/user/user.model.server');
  const websiteModel = require('../models/website/website.model.server');
  const pageModel = require('../models/page/page.model.server');
  const widgetModel = require('../models/widget/widget.model.server');
  const passport = require('passport');
  const LocalStrategy = require('passport-local').Strategy;
  const FacebookStrategy = require('passport-facebook').Strategy;
  const facebookConfig = {
    clientID: process.env.FACEBOOK_CLIENT_ID || '263678167908950',
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'e3673569bc87b2b5c222a742445585b3',
    callbackURL: process.env.FACEBOOK_CALLBACK_URL || '/auth/facebook/callback'
  };
  const bcrypt = require('bcrypt-nodejs');

  // to serialize and deserialize the user
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategyCallback));
  passport.use(new FacebookStrategy(facebookConfig, facebookStrategyCallback));

  function serializeUser(user, done) {
    done(null, user);
  }

  function deserializeUser(user, done) {
    userModel.findUserById(user._id).then(
      (user) => done(null, user),
      (err) => done(err, null)
    );
  }

  function localStrategyCallback(username, password, done) {
    userModel.findUserByUsername(username).then(
      (user) => {
        if (user && bcrypt.compareSync(password, user.password)) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      },
      (err) => {
        if (err) {
          return done(err, null);
        }
      }
    );
  }

  function facebookStrategyCallback(token, refreshToken, profile, done) {
    userModel.findUserByFacebookId(profile.id).then(
      (user) => {
        if (user) {
          return done(null, user);
        } else {
          const names = profile.displayName.split(' ');
          const newFacebookUser = {
            firstName: names[0],
            lastName: names[1],
            email: profile.emails ? profile.emails[0].value : '',
            facebook: {
              id: profile.id,
              token: token
            }
          };
          return userModel.createUser(newFacebookUser);
        }
      },
      (err) => {
        if (err) {
          return done(err, null);
        }
      }
    );
  }

  // delegate the authentication to facebook
  app.get('/facebook/login', passport.authenticate('facebook', {scope: 'email'}));
  app.get('/auth/facebook/callback',
    passport.authenticate('facebook',
      {
        successRedirect: '/#/profile',
        failureRedirect: '/#/login'
      }));

  // login service call
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    const user = req.user;
    console.log('Logged in...');
    res.json(user);
  });

  // logout service call
  app.post('/api/logout', (req, res) => {
    req.logOut();
    console.log('Logged out...');
    res.status(200).send({});
  });

  // register service call
  app.post('/api/register', (req, res) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then((postedUser) => {
      if (postedUser) {
        req.login(postedUser, (err) => {
          if (err) {
            res.status(400).send(err);
          } else {
            console.log('Registered a new user!');
            res.status(200).json(postedUser);
          }
        })
      }
    });
  });

  // the check log in service endpoint
  app.get('/api/loggedin', (req, res) => {
    res.send(req.isAuthenticated() ? req.user : '0');
  });

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
    req.logOut();
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
