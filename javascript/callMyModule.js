var myModule = require('./myModule');

var sayGreetings = myModule(); //{sendMsg:function}

var obj = {

	name: 'prithivi narayn shah',
	address: 'gorakha'
};
var sendMsgNow = sayGreetings.sendMsg(obj);
console.log(sendMsgNow); //
console.log('this is outer ', this);
var object = {
	name: 'prithivi narayn shah',
	address: 'gorakha',
	getFullName: function() {
		console.log('this is inner', this);
	}
};
console.log(object.name) //prithivi narayan shah
console.log(object.getFullName);