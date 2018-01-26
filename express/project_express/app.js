var express = require('express');
var bodyParser = require('body-parser');

var morgan = require('morgan');
// import express from 'express';



var app = express();


/*
this is a middle ware which handle the form data under urlencoded
*/
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(morgan('dev'));
/*my first middle ware*/
app.use(function(req, res, next) {
	console.log('this is a middleware which is called in every http cycle');
	// console.log("req.headers", req.headers);
	next();
	// res.send('you are blocked at middleware');
	// next(); /// request pass garne tarika into next middleware()
	// next with argument  ///error ko lagi ani yesle call garcha error handeling middleware
	// next without argument /// pass the request into next middle ware
});

app.use(function(req, res, next) {
	if (req.headers.token == 'ram') {
		req.token = 'ram';
		next();
		console.log('you passed through middleware');
	} else {
		res.status(401);
		res.send('invalid token');
	}

});

app.get('/', function(req, res) {
	console.log('this is get request', req.query);
	// res.end() //end response
	// res.send('') / text response
	res.json({
		message: 'hi',
		name: 'experss server',
		hobbies: ['a', 'b', 'c']
	}); //object response
});
app.post('/', function(req, res) {
	// form data handle garna lai
	console.log('req.token from middleware', req.token);
	console.log('this is post request', req.body);
	res.status(200);
	res.send('hello from post request');
});

app.post('/login/:user/:pass', function(req, res) {
	// form data handle garna lai

	console.log('this is post request at login', req.params);
	res.send('hello from post request');
});

app.put('/:id', function(req, res) {
	console.log('req.parmas data', req.params);
	// update garnalai
	console.log('this is put request');
	res.send('hello from put request');

});

app.delete('/:id', function(req, res) {
	// delete garnalai
	console.log('this is delete request');
	res.send('hello from delete request');

});


app.listen(8080, '127.0.0.1', function(err, done) {
	if (err) {
		console.log('err in listening', err);
	} else {
		console.log('server listening at port 8080')
	}
});