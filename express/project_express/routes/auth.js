var express = require('express');

var router = express.Router();


function validate(req) {
	req.checkBody('username', 'Username should not be empty').notEmpty()
	req.checkBody('password', 'password should not be empty').notEmpty()
	req.checkBody('password', 'password should be 8 characters logn').isLength({
		min: 8
	});
	req.checkBody('password', 'password should not exceed more than 12 characters').isLength({
		max: 12
	});

	var errors = req.validationErrors();
	if (errors) {
		return errors
	} else {
		return null;
	}
}

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
		var errors = validate(req);

		if (errors) {
			return res.json(errors);
		}
		res.send('valid request');
		// save to database


		// next();
	})
	router.get('/signup', function(req, res, next) {
		console.log('this is signup page');
		res.render('signup', {});


	})
	router.post('/signup', function(req, res, next) {
		console.log('this is signup page', req.body);
		var errors = validate(req);
		if (errors) {
			return res.json(errors);
		}

	})
	router.delete('/', function(req, res, next) {
		console.log('this is delete request');

	})
	router.get('/all', function(req, res, next) {
		console.log('this is get all request');

	});

	return router;
}