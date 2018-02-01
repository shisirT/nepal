var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');

var app = express();
var config = require('./config');

app.set("views", path.join(__dirname, 'views'));;
app.set('view engine', 'pug');

var authenticate = require('./middlewares/authenticate');
var authRoute = require('./routes/auth')();
/*var
this is a middle ware which handle the form data under urlencoded
*/
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/auth', authRoute);
app.use('/user', authenticate, authRoute);

app.use(function(req, res, next) {
	// this is 404  error handler middleware
	next({
		status: 404,
		msg: 'not found'
	});
});
/*
error handler middle ware in express js with err argument in middleware function
*/
app.use(function(err, req, res, next) {
	console.log('error handle middleware called', err);
	res.json({
		status: err.status || 500,
		result: err.msg || {}
	});

});

// next(with argument) pathauda matrai error handler call huncha natra vane call hudaina


app.listen(config.app.port, config.app.host, function(err, done) {
	if (err) {
		console.log('err in listening', err);
	} else {
		console.log('server listening at port ' + config.app.port);
	}
});