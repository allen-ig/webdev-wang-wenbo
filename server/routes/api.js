const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

const db = "mongodb://admin:admin@" +
  "webdev-wang-wenbo-shard-00-00-d6pmq.mongodb.net:27017," +
  "webdev-wang-wenbo-shard-00-01-d6pmq.mongodb.net:27017," +
  "webdev-wang-wenbo-shard-00-02-d6pmq.mongodb.net:27017/" +
  "users?ssl=true&replicaSet=" +
  "webdev-wang-wenbo-shard-0&authSource=admin&retryWrites=true";
mongoose.Promise = global.Promise;
mongoose.connect(db,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  },
  function (err) {
    if (err) {
      console.log("Error connecting the database! " + err);
    }
  });

// the api to get all the users
router.get('/users', function (req, res) {
  console.log('Getting all the users from the database...');
  User.find({}).exec(function (err, users) {
    if (err) {
      console.log("Error getting all the users!");
    } else {
      res.json(users);
    }
  });
});

// the api to find a single user by id
router.get('/users/:id', function (req, res) {
  console.log('Getting the user by id...');
  User.findById(req.params.id).exec(function (err, user) {
    if (err) {
      console.log('Error finding the user!');
    } else {
      res.json(user);
    }
  });
});

// the api to post a new user to the database
router.post('/user', function (req, res) {
  console.log('Posting a new user...');
  const newUser = new User();
  newUser.username = req.body.username;
  newUser.password = req.body.password;
  newUser.firstName = req.body.firstName;
  newUser.lastName = req.body.lastName;
  newUser.save(function (err, postedUser) {
    if (err) {
      console.log('Error posting the new user to the database!');
    } else {
      res.json(postedUser);
    }
  });
});

// the api to put the current user by id in the database
// update the user in the database
// router.put('/user/:id', function(req, res) {
//   console.log('Posting or updating a user by Id in the database...');
//   User.findByIdAndUpdate(req.params.id,
//     {
//       $set: {
//         username: req.body.username,
//         password: req.body.password,
//         firstName: req.body.firstName,
//         lastName: req.body.lastName
//       }
//     },
//     {new: true}, function (err, postedUser) {
//       if (err) {
//         console.log('Error posting or udpating the user by Id!');
//       } else {
//         res.json(postedUser);
//       }
//     });
// });

// another version of updating the user
router.put('/user/:id', function (req, res) {
  console.log('Posting or updating a user by Id in the database...');
  User.findOneAndUpdate(
    {_id: req.params.id},
    {
      $set: {
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      }
    },
    {new: true},
    function (err, postedUser) {
      if (err) {
        console.log('Error posting or udpating the user by Id!');
      } else {
        res.json(postedUser);
      }
    });
});

// the api to delete a user from the database
router.delete('/user/:id', function (req, res) {
  console.log('Deleting the user by Id in the database...');
  User.findOneAndRemove(
    {_id: req.params.id},
    function (err, deletedUser) {
      if (err) {
        console.log('Error deleting the user by Id!');
      } else {
        res.json(deletedUser);
      }
    }
  );
});


module.exports = router;
