var express = require('express');

var router = express.Router();

module.exports = function() {
	router.get('/', function(req, res, next) {
		console.log('this is get request');
		// res.send('hello you are welcome inside auth route');
		res.render('index', {
			name: 'bordway',
			address: 'bkt',
			phonenumber: 383883,
			message: 'hello and welcome to bordway',
			owner: 'kisor giri'
		});
	});
	router.post('/', function(req, res, next) {
		console.log('this is post request', req.body);
		// next();
	})
	router.get('/signup', function(req, res, next) {
		console.log('this is signup page');
		res.render('signup', {});

	})
	router.post('/signup', function(req, res, next) {
		console.log('this is signup page', req.body);
		

	})
	router.delete('/', function(req, res, next) {
		console.log('this is delete request');

	})
	router.get('/all', function(req, res, next) {
		console.log('this is get all request');

	});

	return router;
}