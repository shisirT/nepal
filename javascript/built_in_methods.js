//////string///
var aString = '    my nAme is Brodway infosys nepal    ';

console.log(aString.length)
console.log(aString.toLowerCase());
console.log(aString.toUpperCase());
console.log(aString.trim());

////array///
var arr = ['apple', 'orange', 'mango', 'grape', 'mango'];
console.log(arr.length);
console.log(arr.indexOf('mango')); // 2
console.log(arr[1]) //orange
console.log(arr.lastIndexOf('mango')); //4
// -arr.filter
// -arr.map
// arr.reduce
// arr.

var a;
a // flase;
console.log('fsdfasf', a);

function check(a) {
	console.log(a);
	if (a) {
		console.log('this is true');
	} else {
		console.log('this is flase');
	}
}
check(a);