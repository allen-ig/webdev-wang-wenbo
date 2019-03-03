module.exports = {
	helloworld: function () {
		console.log('Hello world!');
	},
	showFileAndDirName: function () {
		console.log(__filename);
		console.log(__dirname);
	},
	anotherHelloworld: function (name) {
		console.log('Greetings, ' + name);
	}
}