//const http = require('http');

//http.createServer(function (req, res) {
//	res.writeHead(200, {'Content-Type': 'text/plain'});
//	res.write('Hello world! Writes from the http call');
//	res.end();
//}).listen(8080, function () {
//	console.log('Server running on port 8080: ');
//});

//const events = require('events');
//const eventEmitter = new events.EventEmitter();
//
//eventEmitter.on('hello', function () {
//	console.log('Hello world!');
//	eventEmitter.emit('bellrings', 'Hello world!');
//})
//eventEmitter.on('bellrings', function (message) {
//	console.log('message: ' + message);
//})
//
//eventEmitter.emit('hello');

//const fs = require('fs');
//fs.readFile('input.txt', function (err, data) {
//	if (err) {
//		console.log('Error: ' + err);
//	} else {
//		console.log('Async data: ' + data.toString());
//	}
//})
//
//var readData = fs.readFileSync('input.txt');
//console.log('Sync data: ' + readData.toString());
//console.log('This is the end...');

//const fs = require('fs');
//var readData = '';
//const readableStream = fs.createReadStream('input.txt');
//readableStream.setEncoding('UTF8');
//readableStream.on('data', function(chunk) {
//	readData += chunk;
//})
//readableStream.on('end', function () {
//	console.log('Read data: ' + readData);
//})
//
//const writeData = 'This is the data to write to the output file, and as always, hello world!!!';
//const writableStream = fs.createWriteStream('output.txt');
//writableStream.write(writeData, 'UTF8');
//writableStream.end();
//writableStream.on('finish', function () {
//	console.log('Write Completed!');
//})

//const fs = require('fs');
//const readableStream = fs.createReadStream('input.txt');
//const writableStream = fs.createWriteStream('output.txt');
//readableStream.pipe(writableStream);

//const nodeModule = require('./nodeModule');
//nodeModule.helloworld();
//nodeModule.anotherHelloworld('world');

const http = require('http');
const url = require('url');

function startserver(router, handle) {
	const server = http.createServer(function(req, res) {
		var reviewData = "";
		const pathName = url.parse(req.url).pathname;
		console.log('Request received from path: ' + pathName);
		
		req.addListener('data', function(chunk) {
			reviewData += chunk;
		})
		req.addListener('end', function() {
			router.route(pathName, handle, res, reviewData);
		})
	})
	server.listen(8080,function() {
		console.log('Server is running on port 8080: ');
	});
}

//module.exports = startserver;
// export the module
exports.startserver = startserver;