module.exports = function(app) {
  // for get request test
  require("./services/helloworld")(app);
  // the actual services
  require('./services/user.service.server')(app);
  require('./services/page.service.server')(app);
  require('./services/website.service.server')(app);
  require('./services/widget.service.server')(app);
};
