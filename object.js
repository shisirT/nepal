var obj = {}; //object literal method
var nextObj = new Object() //constructor method

var myName = 'kihsor giri'
	// key - value pair
	// name - value pair
	// object properties
	// object methods

obj.name = 'lsdklfj is added'; //property add in object
console.log(obj); //{name:'lsdklfj is added'}
console.log(obj.name) // 'lsdklfj is added'; //property access in object
console.log(obj['name']);
delete obj.name ///delete property namej


// key - value pair

var name = {

	"name": myName,
	"address": "bhaktapur",
	"phoneNumber": 98383838,
	"hobbies": ['playing footbal', 'singing', 'dancing'],
	"contact": {
		"permanent": "bhaktapur",
		"temporary": "ktm"
	},
	"getFullName": function() {
		console.log('a function inside a object is called a method')
		return 'this is function';
	}
}


console.log('object is now>>>>', name.name);
// keys = name address phoneNumber, hobbies,
// 	name
// values = kishor, bhaktapur, 949499