/**
 * http://usejsdoc.org/
 */


/*

	FP - principles
	--------------------
	
	==> A function can be stored in a variable or value
	==> A parameter of a function can be a function
	==> The return value of a function can be a function


	-----------------------------------------
	
	How to create function .js-lang ?
	
	 2 ways
	 
	 --> function declaration
	 
	 	=> Named function
	 	=> function-obj created at context-creation phase
	 	=> always get hoisted with func-obj
	 
	 --> function expression
	 
	 	=> Anonymous function
	 	=> function-obj created at context-execution phase

*/

//--------------------------------------------

// 1. function declaration
//
////console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}
//
////console.log(add(12,13));

//--------------------------------------------


// 2 function expression

//console.log(add(12,13)); // error
//
//let add=function(n1,n2){
//	return n1+n2;
//};
//console.log(add(12,13));


//--------------------------------------------
//
//let userType;
//let userAction;
//function login() {
//	userType = "admin"; // guest
//}
//
//login();
//
//if(userType==="admin"){
//	userAction=function(){
//		// admin...
//	}
//}else{
//	userType=function(){
//		//guest..
//	}
//}


//--------------------------------------------
//

//==> A function can be stored in a variable or value


//
//function greet(){
//	console.log('Hello...');
//}
//
//let sayHello=greet;
//sayHello();
//


//--------------------------------------------
//

//==> A parameter of a function can be a function


//
//function greet(f){
//	if(f){
//		f();return;
//	}
//	console.log('Hello...');
//}
//
//greet();
//greet(function(){console.log('Ola...')});


//let nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
////nums.sort();
//nums.sort(function(a, b) {
//	return a - b;
//});
//


//--------------------------------------------
//


//==> The return value of a function can be a function


//
//function teach() {
//	console.log('teaching....');
//	let learn = function() {
//		console.log('learning...');
//	}
//	return learn;
//}
//
//
//let learn=teach();
//learn();
//learn();
//
//
//


//--------------------------------------------
//
//
//let o = {
//	0 : 123,
//	1 : 456
//}

//
//function reflect() {
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12, 13, 14, 15));


//-----------------------------------------

//
//function getFood(){
//	return "No Food";
//}
//let getFood=new Functlion('....')
//
//function getFood(pay){
//	if(arguments.length===0) return "No Food";
//	return "Biryani";
//}
////getFood=new Functlion('....')
//
//console.log(getFood());

//-----------------------------------------

// es6 : function with default params

//function func(a=1, b=2) {
//	
//	//	if (!a)
//	//		a = 1;
//	//	if (!b)
//	//		b = 2;
//
//	
//	//	a = a || 1;
//	//	b = b || 2;
//
//	console.log(a);
//	console.log(b);
//}
//
//func(undefined, 20);
//
//

//-----------------------------------------

// function with rest param

//
//function func(a,b,...restParam){
//	console.log(a);
//	console.log(b);
//	console.log(Array.isArray(restParam));
//	console.dir(restParam);
//}
//func(1,2,3,4,5,6);




//-----------------------------------------



// closures

/*
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * 
 */

//
//function doTeach(sub) {
//	console.log('teaching ' + sub);
//	let notes = sub + "-notes";
//	let fun = 'bla bla';
//	function doLearn() {
//		console.log('learning with ' + notes);
//	}
//	//	doLearn()
//	console.log('teachg ends')
//	return doLearn;
//}
//
//
//let doLearnFunc = doTeach(".js"); // teach-context with arg & local
//
//doLearnFunc();
//doLearnFunc();

//--------------------------------------------------------


/*
 *  why/where we need closures ?
 *  
 *  ==> to abstract public-behav of any module to other
 *  ==> while exe functions async , to access parent-scoped data
 * 
 */

//--------------------------------------------------------

//==> to abstract public-behav of any module to other

/*
 *  e.g counter module
 *  
 *  		- count
 *  		- doCount()
 *  	    - getCount()
 * 
 */


// self executable function or IIFE pattern :



//const counter=(function() {
//	var count = 0;  // private
//	// public
//	function doCount() {
//		count++;
//	}
//	function getCount() {
//		return count;
//	}
//	return {
//		inc:doCount,
//		get:getCount
//	};
//})();






