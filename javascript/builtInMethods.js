/*string*/
var name = 'welcome, to brodway. infosys nepal';
// split/// it will change string to array

var nameArray = name.split('');
var nameArray1 = name.split(' ');
var nameArray2 = name.split(',');
var nameArray3 = name.split('.');
// console.log(name.length);
// console.log('nameArray', nameArray)
// console.log('name at initial', name)

// console.log('nameArray1',nameArray1)
// console.log('nameArray2',nameArray2)
// console.log('nameArray3',nameArray3)

/*array*/
var obj = {};
var fruits = ['mango', 'mango', 'banana', 'apple', 'orange'];
fruits.forEach(function(item) {
	obj[item] = (obj[item] || 0) + 1;
})
console.log(obj)


// console.log('fruits at initial', fruits);//

// let lastFruit = fruits.pop(); /// 
// console.log('last fruit', lastFruit);//
// console.log("fruits at initial", fruits); //
// // first
// let firstFruit = fruits.shift();
// console.log("first fruit", firstFruit);//
// console.log("fruits at initial", fruits); //
// console.log("fruits at last", fruits); //

//array to string
// var fruitsString = fruits.toString(); //
// var fruitsStringByJoin = fruits.join('');
// var fruitsStringByJoin1 = fruits.join('$');
// var fruitsStringByJoin2 = fruits.join('!');
// var fruitsStringByJoin3 = fruits.join(' ');-

// console.log('fruitsString>>', fruitsString);
// console.log('fruitsString by join>>', fruitsStringByJoin);
// console.log('fruitsString by join1>>', fruitsStringByJoin1);
// console.log('fruitsString by join>2>', fruitsStringByJoin2);
// console.log('fruitsString by join>3>', fruitsStringByJoin3);

// array loop
// forEach
// map reduce
// filter
// 
// fruits.forEach(function(fruit) {
// 	console.log(fruit);
// });
var Cars = [];
var CarsAvailable = [{
	name: 'mercedez',
	color: 'red',
	type: 'classic'
}, {
	name: 'bmw',
	color: 'black',
	type: 'sports'
}, {
	name: 'suzuki',
	color: 'grey',
	type: 'normal'
}, {
	name: 'ferrari',
	color: 'red',
	type: 'sports'
}, {
	name: 'nano',
	color: 'yellow',
	type: 'normal'
}, {
	name: 'mustang',
	color: 'white',
	type: 'adventure'
}];
CarsAvailable.forEach(function(item) {
	item.status = 'availabel';
});
// console.log('cars now', Cars);
// var newArray = [];
// Cars.forEach(function(item) {
// 	if (item.color == "red") {

// 		newArray.push(item);
// 	}
// });
// console.log('new array >', newArray);
// console.log('car name ', newArray[0].name);

var sportsCar = CarsAvailable.filter(function(item) {

	if (item.type == "sports") {
		return true;
	}
});

console.log('sportsCar now', sportsCar);

var redCar = sportsCar.filter(function(item) {
	if (item.color == 'red') {
		return true;
	}
});
console.log('red car now', redCar);

// array map 
// whole array lai change
// destination whole array lai change garne use map
CarsAvailable.map(function(item) {
	if (item.type == "sports" && item.color == "red") {
		item.status = "sold";
		return item;
	}
});

console.log('cars availabel at last  with status', CarsAvailable);



// let animals = {};
// animals.type = 'wild';
// animals.color = 'red';
// console.log("animals", animals);
// let abc = animals;
// delete abc.type;
// console.log("abc now ", abc);
// console.log("animals now ", animals);