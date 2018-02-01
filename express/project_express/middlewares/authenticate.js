module.exports = function(req, res, next) {
	if (req.headers.token == 'ram') {
		req.token = 'ram';
		return next();
		console.log('you passed through middleware');
	} else {
		return next({
			status: 401,
			msg: 'invalid token'
		});
	}

};