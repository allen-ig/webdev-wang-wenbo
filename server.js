// Get the dependencies
const express = require("express");
const path = require("path");
const http = require("http");
const bodyParser = require("body-parser");
const multer = require('multer');
const ejs = require('ejs');
const app = express();
// const api = require("./server/routes/api");
// const api = require('./Assignment/app')(app);

// some tests
// set up storage engine
const storage = multer.diskStorage({
  destination: './src/assets/uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() +
      path.extname(file.originalname));
  }
});
// init upload
const upload = multer({
  storage: storage,
  limits: {fileSize: 1000000},
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  }
}).single('myImage');

// check file type
function checkFileType(file, cb) {
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // check ext
  const extname = filetypes.test(path.extname(
    file.originalname).toLowerCase());
  // check mime
  const mimetype = filetypes.test(file.mimetype);
  // check if both are true
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb('Error: Images Only!');
  }
}

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, "dist/webdev-wang-wenbo")));
app.use(express.static('./src'));
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

// for api calls, tell the server to use /api route and api.js file
// app.use('/api', api);
require("./Assignment/app")(app);
// for other calls, render the index page in dist folder

// EJS
app.set('view engine', 'ejs');
app.get('/test/ejs', (req, res) => {
  res.render('index');
});
app.post('/test/ejs/upload', (req, res) => {
  // call the upload we just set
  upload(req, res, (err) => {
    if (err) {
      res.render('index', {
        msg: err
      });
    } else {
      console.log(req.file);
      if (req.file === undefined) {
        res.render('index', {
          msg: 'Error: No File Selected!'
        });
      } else {
        res.render('index', {
          msg: 'File Uploaded!',
          file: `/assets/uploads/${req.file.filename}`
        })
      }
    }
  })
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/webdev-wang-wenbo/index.html'));
});

const port = process.env.PORT || "3200";
app.set("port", port);
// Create HTTP server
const server = http.createServer(app);
server.listen(port, () => {
  console.log("Running on port 3200");
  console.log(`dirname: ${__dirname}`);
});
