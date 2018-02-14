/**
 * 
 */

//
//// using DOM API
//document.addEventListener('DOMContentLoaded', function() {
//
//	let box = document.querySelector('.well');
//	let showBtn = document.querySelector('.btn-primary');
//	let hideBtn = document.querySelector('.btn-danger');
//
//	showBtn.addEventListener('click', function(e) {
//		box.style.display = ''
//	});
//
//	hideBtn.addEventListener('click', function(e) {
//		box.style.display = 'none'
//	});
//
//})

//-------------------------------------------------------


 // #1
//
//function foo(b) {
//  var a = 10;
//  return a + b + 11;
//}
//
//function bar(x) {
//  var y = 3;
//  return foo(x * y);
//}
//
//console.log(bar(7)); //returns 42


// #2

//function foo(){}
//function bar(){foo()}
//function baz(){bar()}
//baz();
//


// #3
//function foo(){throw new Error('oops')}
//function bar(){foo()}
//function baz(){bar()}
//baz();


// #4
//function foo(){foo()}
//foo();
//
//


// #5

//
//function longRunning(){
//	var i=0;
//	while(i<5){
//		console.log('im long...');
//		i++;
//	}
//}
//
//function shortRunning(){
//	console.log('im short');
//}
//
//longRunning();
//shortRunning()
//


// #6



/*
 * 
 *  <button class="veg"> veg </button>
 *  <button class="non-veg"> non-veg </button>
 * 
 */
//
//console.log('start...');
//
//$.on('.veg','click',function vegHandler(e){
//	console.log('handling event on veg elements');
//});
//
//
//$.on('.non-veg','click',function nonVegHandler(e){
//	console.log('handling event on non-veg elements');
//});
//
//console.log('cont with other if exist....');
//function longRunning(){
//var i=0;
//while(i<5){
//	console.log('im long...');
//	i++;
//}
//}
//longRunning();




// #6


console.log('start....');

// e.g IO i.e AJAX call
setTimeout(function() {
	console.log('processing IO outcome....')
}, 5000);

console.log('cont with other if exist....');

console.log('cont with other if exist....');
function longRunning(){
var i=0;
while(i<5){
	console.log('im long...');
	i++;
}
}
longRunning();






































