var aVariable = 'hello'; //global var
//innerVar access not ok // scope doesnot exist

function sayHello(name) {
	//aVariable/// access ok
	var nextVar = 'hi';
	// return "welcome to bordway " + name;
	//innerVar access not ok // scope doesnot exist

	function greetings(location) {
		//name access ok args
		//aVariable/// access ok global
		//nextVar/// access ok parent function var
		var innerVar = 'say welcome';
		// console.log("you are welcome to labNoSeven " + name + "!.");
		return "you are welcome to " + location + " " + name + "!.";
	}
	return greetings;
}
var funRes = sayHello('milan');

var insertLocation = funRes('tinkune');
console.log(insertLocation);