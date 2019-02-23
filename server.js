// Get the dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const api = require('./server/routes/api');

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/webdev-wang-wenbo')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// for api calls, tell the server to use /api route and api.js file
app.use('/api', api);

// for other calls, render the index page in dist folder
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/webdev-wang-wenbo/index.html'));
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen(port, () => console.log('Running on port 3200'));

/*var dbServer = require('./test-mongodb/app');
dbServer(app);*/

//require('./test-mongodb/app')(app);

// For Build: Catch all other routes and return the index file -- BUILDING

//require('./assignment/app')(app);


