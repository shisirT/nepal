/*my first middle ware*/
module.exports = function(req, res, next) {
	console.log('this is a lskfjasldkfjsdklf which is called in every http cycle');
	return next();

};