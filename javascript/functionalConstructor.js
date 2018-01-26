//function
// closure
// callback
// promise
// method


///function  will be now functional constructor

function Students(options) {
	// check what is inse options
	//now set to this according to
	this.fullName = options.abc;
	this.permanentAdress = options.address;

}

Students.prototype.phoneNumber = '986262626';
Students.prototype.getFullName = function() {
	return "welcome " + this.fullName + " to " + this.permanentAdress + " and phone number is " + this.phoneNumber
}
Students.prototype.greet = function() {
	return this.getFullName();
}

function IntelligentStudents() {


}
IntelligentStudents.prototype.age = '12';
IntelligentStudents.prototype = new Students({
	name: 'broday',
	address: 'tinkune'
});

var ramesh = new IntelligentStudents();
console.log('IntelligentStudents >> ', ramesh); //{}
// ramesh.age //12
console.log(', this sis protoype of student called from IntelligentStudents',
	ramesh.getFullName());



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
	abc: 'sandip',
	rollNo: 12,
	address: 'kapan'
}
var anzilaStu = {
	name: 'anzila',
	rollNo: 12,
	address: 'baneshwor'
}

var sandip = new Students(sandipStu); //prototype aaucha tara constructor chai object ko property banera aaucha
var kritika = new Students(stuKritika);
var anzila = new Students(anzilaStu);
console.log("sandip is now>", sandip.phoneNumber);
console.log("sandip is now>", sandip.greet());

// console.log('phoneNumber of kritika', kritika.greet());
// console.log('method called', anzila.getFullName());