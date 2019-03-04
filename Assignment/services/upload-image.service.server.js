// first use IncomingForm of formidable lib and require it
const IncomingForm = require('formidable').IncomingForm;

module.exports = function (app) {
  // for initial simple testing
  // app.get('/api/upload', function (req, res) {
  //   res.status(200).send('Upload image service.');
  // })

  // then make the post call to upload image
  app.post('/api/upload', function (req, res) {
    var form = new IncomingForm();
    form.on('file', function (field, file) {
      console.log(file.path);
    });
    form.on('end', function () {
      res.json();
    });
    form.parse(req);
  });
};
