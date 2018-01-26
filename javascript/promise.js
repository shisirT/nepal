// function sayHello(name, cb) {
// 	cb("welcome " + name);
// }
// sayHello('brodway', function(data) {
// 	console.log(data);
// })
// function sayHello(name) {
// 	return new Promise(function(resolve, reject) {
// 		///
// 		resolve(name);

// 	});
// }
// sayHello('brodway').then(function(data) {
// 		console.log('this callback funciton will be invoked in sucess', data);
// 	},
// 	function(err) {
// 		console.log('this callback funciton will be invoked when failure', err);

// 	});

function callForNote(sub) {
	return new Promise(function(resolve, reject) {
		//it takes some time to search for note
		setTimeout(function() {
			resolve({
				note: sub
			});
		}, 2000);
	});
}

function printNote(note, electricity) {
	return new Promise(function(resolve, reject) {
		//it takes some time to print for note		
		setTimeout(function() {
			if (electricity) {
				resolve({
					printedNote: note
				});
			} else {
				reject({
					electricity: false
				});
			}
		}, 5000);
	})


}

function refreshment() {
	var mood = true;
	return new Promise(function(resolve, reject) {
		if (mood) {
			resolve('finished');
		} else {
			reject("later");
		}
	});
}

function bikeServicing() {
	var water = 'flsdkjf';
	return new Promise(function(resolve, reject) {
		if (water) {
			resolve();
		} else {
			reject(false);
		}
	})
}

function startPrepareNow(note) {
	console.log('we start preparing');
}

console.log('start preparing for exam');
callForNote('mongodb')
	.then(function(data) {
		console.log('note is ready ', data);
		var a = printNote(data.note, 'yes');
		console.log('take bath');
		console.log('eat food');
		return a;
	})
	.then(function(data) {
		console.log('printed note ', data);
		return refreshment();
	})
	.then(function(data) {
		console.log('data of refreshment');
		return bikeServicing();
	})
	.then(function() {
		console.log('bike bikeServicing finished');
		startPrepareNow();
	})
	.catch(function(err) {
		console.log('error airse ', err);
	});