console.log('this is step 1');
console.log('this is step 2');
//this settimeout function is  called as third process but its result is outputed only after 3 sec
setTimeout(function() {
	console.log('this.is step inside setTimeout function');
}, 3000);
console.log('this is step 4');
console.log('this is step 5');
console.log('this is step 6');
console.log('this is step 7');
console.log('this is step 8');
console.log('this is step 9');