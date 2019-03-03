module.exports = function(app) {
  app.get("/test/helloworld", function(req, res) {
    console.log("Hello world from the hello world request!");
    res.status(200).send("Hello world, the get api is working!");
  });
};
