var obj = {};
var fruits = ['mango', 'mango', 'banana', 'apple', 'orange', 'mango', 'banana', 'apple', 'orange', 'mango', 'banana', 'apple', 'orange', 'mango', 'banana', 'apple', 'orange'];

var a = fruits.reduce(function(acc, item,KEY,A) {
	// acc[item] = (acc[item] || 0) + 1;
	acc.push(item);
	return acc;

}, 5);
console.log('a is a', a);
// fruits.forEach(function(item) {

// 	obj[item] = (obj[item] || 0) + 1;
// 	// 1st loop mango:1
// 	// 2nd loop
// 	// 	obj[item] = (obj[item] || 0) + 1;

// 	// 	loop 3

// });
// console.log(obj)

// var objs = {};
// objs.name = 1; //property add 
// console.log('objs name', objs.name); // property call
// console.log('objs name', objs.lfksjfld); // property call