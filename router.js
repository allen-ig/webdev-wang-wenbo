const route = function (pathName, handle, res, reviewData) {
	console.log('Routing for the path: ' + pathName);
	if (typeof handle[pathName] === 'function') {
		handle[pathName](res, reviewData);
	} else {
		console.log('No handler function for: ' + pathName);
		res.writeHead(404, {'Content-Type': 'text/plain'});
		res.write('Error 404 Page Not Found!');
		res.end();
	}
}

exports.route = route;