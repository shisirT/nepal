function multiply(number1) {
	console.log('number 2', number2);

	var inner = function(number2) {

		return function(number3) {
			return 'hello you are inside 3 function';
		}
	};
	return inner;
}

var multiplyOnce = multiply(5);

console.log('multiplyOnce >>', multiplyOnce); //
var multiplyNow = multiplyOnce(8);
console.log('multiplyNow is >>', multiplyNow);

var innerinnerVar = multiplyNow("klsdjflsdkjf");
console.log('inner var now', innerinnerVar);

// // console.log(multiply(5)(9)); ///45