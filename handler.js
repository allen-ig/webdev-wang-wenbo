const queryString = require('querystring');

module.exports = {
	home: function (res) {
		console.log("Handling the 'home' request...");
		var htmlFile = '<!DOCTYPE html>'+
		'<html>'+
		'	<head>'+
			'	<meta charset="UTF-8">'+
			'	<title>Home Page</title>'+
			'</head>'+
			'<body>'+
			'<form action="/review" method="post">'+
			'	<textarea name="text" rows="5" cols="5"></textarea>'+
			'	<button type="submit">Submit text</button>'+
			'	</form>'+
			'</body>'+
		'</html>';
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(htmlFile);
		res.end();
	},
	review: function (res, reviewData) {
		console.log("Handling the 'review' request...");
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Your review: ' + queryString.parse(reviewData).text);
		res.end();
	},
	favicon: function () {
		console.log('You, I am the favicon.ico!!!');
	}
}