const nodeServer = require('./nodeServer.js');
const router = require('./router.js');
const handler = require('./handler');

var handle = {
	'/': handler.home,
	'/home': handler.home,
	'/review': handler.review,
	'/favicon.ico': handler.favicon
};

nodeServer.startserver(router, handle);