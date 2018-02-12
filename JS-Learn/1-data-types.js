/**
 * http://usejsdoc.org/
 */


/*
	
	1. simple / primitives  ===> values
	
		a. string
		b. number
		c. boolean
		d. undefined
	
	2. complex / reference  ==> objects

*/

//-------------------------------------------------

//1. simple / primitives  ===> values

//-------------------------------------------------

// a. string

var name = "Nag";
var selection = 'abc';

//string interpolation ( es6 )
var dynamicString = `the value is ${12 + 12}`;
var dynamicTemplate = `
	
	<div>
		<h1>  ${name} </h1>
	</div>

`;

//-------------------------------------------------

// b. number

var count = 12;
var cost = 12.12;

//-------------------------------------------------

// c. boolean

var found = true;

/*
 * // imp-note : .js falsy values
 * 
 * 	==> false,0,"",null,undefined,NAN
 * 
 * ref : https://dorey.github.io/JavaScript-Equality-Table/
 * 
 */

//-------------------------------------------------

// d. undefined


var v;




//-------------------------------------------------

//1. complex / reference  ===> values

/*
 * 
 * how to creat object .js-lang?
 * 
 * var ref=new Constructor();
 * 
 */

/*
 *  imp-note:
 *  
 *  by default , .js-objects are extensible & configurable
 *  
 * 
 */

//-------------------------------------------------


//var config = new Object();
//config.url="http://";
//config.httpMethod="GET";
//config.success=function(){
//	//.
//	console.log('executing on success');
//};
//
//delete config.httpMethod;


//-------------------------------------------------
// Literal-style objects
//-------------------------------------------------


// a. Object

var config = new Object();
config.url="http://";
config.httpMethod="GET";
config.success=function(){
	//.
	console.log('executing on success');
};

// or

var config={
		url:'http://',
		httpMethod:'GET',
		success:function(){
			//..
		}
};


//-------------------------------------------------


// b. Array


var arr=new Array();
arr.push("biryani");

// or

var arr=["biryani"];



//-------------------------------------------------


// c.RegExp


var pattern=new RegExp("\\d{4}-\\d{4}-\\d{4}");
// or
var pattern=/\d{4}-\d{4}-\d{4}/;



//-------------------------------------------------



// d.Function

var add=new Function("n1","n2","var r=n1+n2;return r;");

// or

function add(n1,n2){
	var r=n1+n2;
	return r;
}



//-------------------------------------------------


// how to access obj's properties ?
//
//var person={
//		name:'Nag',
//		'full-address':'chennai',
//		'say Name':function(){
//			console.log('im '+this.name);
//		}
//};
//
////person.name="Nag N";
////console.log(person.name);
//
//person['full-address']="bengalore";
//console.log(person['full-address']);
//
// 
//person['say Name']();




















	
	
	
	


