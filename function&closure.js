 // "use strict"

var a = 'a variable';

//basic example of closure
// function sayHello() {
// 	var newVar = 'i am new variable';

// 	function a() {
// 		var xxx = 'this is inside closure';
// 		console.log('abcd' + newVar + a + xxx);
// 	}
// }
//closure example with argument
// function sayHello(name) {
// 	var greetings = 'welcome';

// 	function a() {
// 		var place = 'tinkune';
// 		return greetings + ' ' + name + ' to ' + place;
// 	}
// 	return a;
// }
// var calledFn = sayHello('ramesh');//function will be returned a
// var callInnerFn = calledFn();
// console.log('aaaa>', callInnerFn);

///closure example with functions
function sayHello(name) {
	var address = 'welcome ' + name + '+ to brodway infosys nepal';

	function setAddress(newAddress) {
		address = newAddress;
	}

	function getAddress() {
		return address;
	}
	return {
		set: setAddress,
		get: getAddress
	}
};

var callFn = sayHello('kritika');
console.log('call fn onley>', callFn) ///brod
console.log(callFn.set('you are must welcome to brodway infosys nepal'));
console.log(callFn.get()) ///brod