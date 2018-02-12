/**
 * http://usejsdoc.org/
 */

/*

	Execution-Context / scope
	-------------------------
	
	memory/stack-frame with given args & locals
	to execute  instructions
	
	2 phases
	----------
	
		1. creation-phase / push
		
			=> all variables declared with 'var' keyword any-where in context, 
			   will get hoisted with default value ( undefined )
			   
	    2. execution-phase / pop		   
	    
	    		=> instruction will get execute seq.

	imp-points:
	
	by default , 
	=>.js-runtime has one global-context
	=> global-context always executed by 'global-object'
	
	global-object
	-----------------
	
	browser ==> window
	Node.js ==> process
	
	=> every function-invocation also creats new-context,
	which is child of in-which that function has declared	
	
	

*/


//
//console.log(v);
//var v=12;

//---------------------------------------------


//
//var v=12;
//function f1(){
//	console.log(v);
//	var v=13;
//}
//f1(); // f1-context <== global-context


//---------------------------------------------


// Quiz
//
//var v = 12;
//
//function f1() {
//	function f2() {
//		console.log(v);
//	}
//	f2(); // f2-context <=== f1-context
//	var v=13;
//}
//f1();  // f1-context  <=== global-context
//
//
// 


//---------------------------------------------

//var v=12;
//var v=13;

//---------------------------------------------
//
//	var v=100;
//	if(true){
//		var v=200;
//	}
//	console.log(v);

//---------------------------------------------

/*
 * 
 *  problems with 'var' keyword
 *  
 *  ==> variables always get hoist
 *  ==> we can re-declare sample variable in a context
 *  ==> no block-scope to variables
 *  
 *  
 *  soln : Es6
 *  
 *  ==> using let & const keywords with block-scope
 *  
 */

//---------------------------------------------
//console.log(v);
//let v=12;

//---------------------------------------------

//var v=12;
//let v=13;

//---------------------------------------------


//	var v=100;
//	if(true){
//		let v=200;
//	}
//	console.log(v);


//---------------------------------------------

//
//const tnr={
//		name:'Nag'
//};
//
////tnr=null;
//tnr.name="Nag N";
//
//


//---------------------------------------------

// let ==> mutable reference
// const ==> immutable reference














