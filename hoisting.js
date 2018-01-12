(function() {
	"use strict"

	console.log('thios is imemdiately called');
	// var a = 'something';
	newFn();

	function newFn() {
		a = "a vlue is now"
		console.log(a);
		var c = 'ahid';
	}
	console.log('a outside', a);

	var c = 'another var';
	var d = 'another var';
	var e = 'another var';
	var f = 'another var';
	var g = 'another var';
})();