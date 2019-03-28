// Get the dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");

// Init express server app...
const app = express();
// const api = require("./server/routes/api");
// const api = require('./Assignment/app')(app);

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/webdev-wang-wenbo")));
// user body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// EJS
// app.set('view engine', 'ejs');

// for api calls, tell the server to use /api route and api.js file
// app.use('/api', api);

// call the server services for each component
require("./Assignment/app")(app);

// db connection
const dbConnection = require('./Assignment/models/models.server');

// for other calls, render the index page in dist folder
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/webdev-wang-wenbo/index.html'));
});

// set port
const port = process.env.PORT || "3200";
app.set("port", port);
// Create HTTP server and listen to the port
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Running on port 3200");
  console.log(`App root: ${__dirname}`);
});
