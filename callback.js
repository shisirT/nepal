// var callForNote = function(note) {
// 	return note;
// }
// step 1
console.log('step 1: start preparing for exam');
//strp 2
callForNote('javascript', function(note) {
	console.log('note is now ready', note);
	console.log('now start preparing');

});
// step 3
console.log('clean room');
console.log('prepare pen and pencils with papers');


function callForNote(note, callback) {
	console.log("a friend has called for note");
	// console.log(note) //arg j pathako cha tei aaucha
	// console.log(callback) //arg j pathako tei aauch
	setTimeout(function() {
		callback('note found and note is ' + note);
	}, 1000);
}