(function() {


	var abc = 'testing'; //global scope
	first();

	function first() {
		//abc///
		console.log('first function called');
		var a = 'new  declaration';
		var aa = 'new variable inside first';
		b = 'cabdkfjdfjk'///global 
	}

	function second() {

		//abc///
		console.log('second function called');

		var a = 'new variable declaration';
				console.log('hghghghg',a);

		console.log('b is now',b);
		//b //has value when a is called
		//aa/// refrence error //not defined
	}
	second();

	function third() {
		//abc///

		console.log('third function is also called');
	}
	third();
})();


// (function first() {
// 	console.log('hello ');
// })()
//IIFE immediately invoked function expression