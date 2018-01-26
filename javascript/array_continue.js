var Cars = [];
var CarsAvailable = [{
	name: 'mercedez',
	color: 'red',
	type: 'classic',
	status: 'sold'

}, {
	name: 'bmw',
	color: 'black',
	type: 'sports',
	status: 'available'
}, {
	name: 'suzuki',
	color: 'grey',
	type: 'normal',
	status: 'available'
}, {
	name: 'ferrari',
	color: 'red',
	type: 'sports',
	status: 'available'
}, {
	name: 'nano',
	color: 'yellow',
	type: 'normal',
	status: 'available'
}, {
	name: 'mustang',
	color: 'white',
	type: 'adventure',
	status: 'available'
}];

var fruits = ['mango', 'mango', 'banana', 'apple', 'orange', 'banana', 'apple', 'orange'];
// console.log(fruits.indexOf('mango'));
// console.log(fruits.indexOf('apple'));
// console.log(fruits.lastIndexOf('apple'));
// console.log(fruits.indexOf('sdkljflskdjf'));

var uniqueFruits = [];
var i = 0;
fruits.forEach(function(item) {
	i++;
	if (uniqueFruits.indexOf(item) == -1) {

		uniqueFruits.push(item);
	}

});
console.log(i);
console.log('uniqueFruits now', uniqueFruits);

console.log("CarsAvailable at first", CarsAvailable);

CarsAvailable.forEach(function(item) {
	if (item.status == 'sold') {
		CarsAvailable.splice(CarsAvailable.indexOf(item), 1);
	}

});
console.log("CarsAvailable now", CarsAvailable);
/*
task 2
from above array of fruits identify fruits with count
*/
// {
// 	apple: 2,
// 	banana: 4
// }