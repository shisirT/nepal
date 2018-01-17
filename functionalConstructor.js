//function
// closure
// callback
// promise
// method


///function  will be now functional constructor

function Students(options) {
	this.name = options.name;
	this.address = options.address;
}

Students.prototype.phoneNumber = '986262626';
Students.prototype.getFullName = function() {
	return "welcome " + this.name + " to " + this.address + " and phone number is " + this.phoneNumber
}
Students.prototype.greet = function() {
	return this.getFullName();
}

function IntelligentStudents() {
	

}
IntelligentStudents.prototype = new Students({
	name: 'broday',
	address: 'tinkune'
});

var ramesh = new IntelligentStudents();
console.log('IntelligentStudents >> ', ramesh);



function Teacher() {
	this.nationlity = 'nepali';
}
console.log('new teacher object', new Teacher());

var stuKritika = {
	name: 'kritika',
	rollNo: 12,
	address: 'tinkune'
}
var sandipStu = {
	name: 'sandip',
	rollNo: 12,
	address: 'kapan'
}
var anzilaStu = {
	name: 'anzila',
	rollNo: 12,
	address: 'baneshwor'
}
var sandip = new Students(sandipStu);
var kritika = new Students(stuKritika);
var anzila = new Students(anzilaStu);

console.log('phoneNumber of kritika', kritika.greet());
console.log('method called', anzila.getFullName());