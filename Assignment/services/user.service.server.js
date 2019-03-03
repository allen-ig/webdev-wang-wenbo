module.exports = function(app) {
  var users = [
    {
      _id: "123",
      username: "alice",
      password: "alice",
      firstName: "Alice",
      lastName: "Wonder"
    },
    {
      _id: "234",
      username: "bob",
      password: "bob",
      firstName: "Bob",
      lastName: "Marley"
    },
    {
      _id: "345",
      username: "charlie",
      password: "charlie",
      firstName: "Charlie",
      lastName: "Garcia"
    },
    {
      _id: "456",
      username: "john",
      password: "john",
      firstName: "John",
      lastName: "Doe"
    }
  ];

  // to get all the users to test
  app.get('/api/users', function(req, res) {
    console.log('Getting all users...');
    res.json(users);
  })

  // Now implement the CRUD http call apis

  // find user by Id
  app.get("/api/user/:uid", function(req, res) {
    var userId = req.params.uid;
    console.log("User Id to query: " + userId);
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id == userId) {
        console.log("Found User: ");
        console.log(users[i]);
        res.json(users[i]);
        return;
      }
    }
    res.send(null);
  });

  // find user by credentials and find user by username
  function findUserByUsername(res, username) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == username) {
        console.log("Found User: ");
        console.log(users[i]);
        res.json(users[i]);
        return;
      }
    }
    res.send(null);
  }

  function findUserByCredentials(res, username, password) {
    for (var i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
        console.log("Found User: ");
        console.log(users[i]);
        res.json(users[i]);
        return;
      }
    }
    res.send(null);
  }

  app.get("/api/user", function(req, res) {
    var username = req.query.username;
    var password = req.query.password;
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
  app.put("/api/user/:uid", function(req, res) {
    var userId = req.params.uid;
    var newUser = req.body;
    console.log("New User Id: " + userId + ", and new user: ");
    console.log(newUser);
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id == userId) {
        users[i] = newUser;
        console.log("Updated to new user!");
        res.json(newUser);
        return;
      }
    }
    res.send(null);
  });

  // delete user
  app.delete("/api/user/:uid", function(req, res) {
    var userId = req.params.uid;
    console.log("User Id to delete: " + userId);
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id == userId) {
        console.log('Deleted user: ');
        console.log(users[i]);
        res.json(users[i]);
        users.splice(i, 1);
        console.log('Now rest users are: ');
        console.log(users);
        return;
      }
    }
    res.send(null);
  });

  // create user
  app.post('/api/user', function(req, res) {
    var newUser = req.body;
    console.log('Posted new user: ');
    console.log(newUser);
    users.push(newUser);
    res.json(newUser);
  })
};
