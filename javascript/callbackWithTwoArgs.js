function eatFood(cb) {
	var ready = false;
	if (ready) {
		cb(null, true);
	} else {
		cb('food is not ready')
	};
}

eatFood(checkMeal);


function checkMeal(err, success) {
	if (err) {
		console.log('meal is not ready to eat');
	} else {
		console.log('meal is now ready to eat')
	}
};

// promise
// 3 state of promise
// 1 pending

// 2 rejected
// 3 fullfilled

// 1 -----
// 		- fullfilled
// 		- rejected

// 2,3 --
// 		it doesnot change state