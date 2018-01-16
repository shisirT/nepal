function callForNote(sub, cb) {
	//it takes some time to search for note
	setTimeout(function() {
		cb({
			note: sub
		});
	}, 2000);
}

function printNote(note, kishor) {

	//it takes some time to print for note
	setTimeout(function() {
		kishor({
			printedNote: note
		});
	}, 5000);

}

function watchMovie(callback) {
	setTimeout(function() {
		callback('ok');
	}, 6000);
}

function bikeServicing(cbBikeservice) {
	setTimeout(function() {
		cbBikeservice(true);
	}, 2000);
}

function startPrepareNow(note) {
	console.log('we start preparing');
}



callForNote('javascript', function(note) {
	console.log('note is ready ');
	console.log('note is now ', note);
	printNote(note, function(printedNote) {
		console.log('printed note is ', printedNote);
		watchMovie(function(done) {
			console.log('watching movie finished', done);
			bikeServicing(function(done) {
				console.log('bike servicing finished', done);
				startPrepareNow(note);
			});
		});
		console.log('it start raining');
	});
	console.log('take bath');
	console.log('eat food');
});
console.log('this is below call for note');

// revison
// -callback - nestedcallback
// -callback with two argument
// -asynchronous


