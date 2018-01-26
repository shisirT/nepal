var aVariable = 'hello'; //global var
//innerVar access not ok // scope doesnot exist

function sayHello(name) {
	//aVariable/// access ok
	var nextVar = 'hi';
	// return "welcome to bordway " + name;
	//innerVar access not ok // scope doesnot exist

	function greetings(location) {
		//setN
		//name access ok args
		//aVariable/// access ok global
		//nextVar/// access ok parent function var
		var innerVar = 'say welcome';
		// console.log("you are welcome to labNoSeven " + name + "!.");
		return "you are welcome to " + location + " " + name + "!.";

	}

	function setName(newName) {
		nextVar = newName;
	}

	function getName() {
		return nextVar;
	}
	return {
		greet: greetings,
		setName: setName,
		getName: getName
	};
}
var funRes = sayHello('milan');

var insertLocation = funRes.greet('nepal');
var getNameOfInnerVariable = funRes.getName();
console.log('greeting function is now ', insertLocation)
console.log('this is inner variable  inside a closure', getNameOfInnerVariable);

var setNameOfInnerVar = funRes.setName('hello hello hello');
var newNameofInnerVar = funRes.getName();

console.log('this is inner variable  inside a closure with modification', newNameofInnerVar);