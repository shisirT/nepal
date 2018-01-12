module.exports = function() {

	function sendMsg(opitons) {
		return "hello " + opitons.name + " ,wlecome to " + opitons.address;
	}

	return {
		sendMsg: sendMsg
	}
}