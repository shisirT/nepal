var http = require('http'); //calling module
var fs = require('fs');
// var bodyParser = require('body-parser');
var server = http.createServer(function(req, res) {

	if (req.url == '/createFile') {
		fs.writeFile('kritika.txt', 'hi i am anizila not kritika', function(err, done) {
			if (err) {
				console.log('err ', err);
			} else {
				console.log('file writing finished');
				res.end('file writing finished');

			}
		})
	} else if (req.url == "/renameFile") {
		fs.rename("kritika.txt", "anizila.txt", function(err, done) {
			if (err) {
				console.log('err ', err);
			} else {
				console.log('file renaming finished');
				res.end('file renaming finished');
			}
		})
	} else if (req.url == "/readFile") {
		fs.readFile("kritika.txt", 'utf-8', function(err, done) {
			if (err) {
				console.log('err ', err);
			} else {
				console.log('file reading  finished', done);
				res.end('file reading  finished' + done);
			}
		})
	} else if (req.url == "/deleteFile") {
		fs.unlink("kritika.txt", function(err, done) {
			if (err) {
				console.log('err ', err);
			} else {
				console.log('file deletingFile finished');
				res.end('file deleting finished');
			}
		})
	} else {

		res.end('you are at home page');
	}



});
server.listen(4040, function(err, done) {
	if (err) {
		console.log('error arise while listening port', err);
	} else {
		// console.log('actual ma server balla start vayo');
		console.log(' server listening at port 4040');
	}
});