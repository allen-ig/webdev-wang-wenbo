const mongoose = require('mongoose');

const db = "mongodb://admin:admin123@ds113815.mlab.com:13815/heroku_tvmcprbv";
mongoose.Promise = global.Promise;

const dbConnection = mongoose.connect(
  db,
  {useNewUrlParser: true, useFindAndModify: false},
  (err) => {
    if (err) {
      console.log('Error! ' + err);
    } else {
      console.log('Connected to database!');
    }
  }
);

module.exports = dbConnection;
