/**
 * http://usejsdoc.org/
 */


/*
	this ==> current execution-context's owner
*/

// why we need 'this' keyword ?

//let pName="Global";

//let person={
//		pName:'Nag', // obj;s property
//		sayName:function(){
//			let pName="Local";
//			console.log('im '+pName); // context's hierarchy data
//			console.log('im '+person.pName); // obj's data
//			console.log('im '+this.pName);
//		}
//};
////person.sayName()
//
//let p=person;
//person={pName:'IBM'}
//p.sayName();
//

//--------------------------------------------------------


/*
 *  function binding
 *  ---------------------
 *  
 *   1. static function-binding
 *   2. dynamic function-binding
 * 
 * 
 */

//----------------------------------------------------------------------

//1. static function-binding

//
//let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
//let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};

//function sayNameForAll(){
//	console.dir(this);
//	console.log('im '+this.name);
//}
//let p1={name:'Nag',sayName:sayNameForAll};
//let p2={name:'Ria',sayName:sayNameForAll};
//
//sayNameForAll(); // im ??  // function-invocation ( this ==> global-obj )
//p1.sayName(); // im Nag    // method-invocation   ( this ==> invoker=obj
//p2.sayName(); // im Ria
// 


//----------------------------------------------------------------------

// 2. dynamic function-binding

//
//
//let greeLib={
//		name:'greet-lib',
//		sayName:function(message,from){
//			console.log(message+ ' im '+this.name +" - "+from);
//		}
//}

//greeLib.sayName();

//let p={name:'Nag'}
//let e={name:'IBM'}

// way- 1 : call()
//greeLib.sayName.call(p,"Hello","Chennai");
//greeLib.sayName.call(e,"Hey","Bengaluru");

//way- 2 : apply()
//greeLib.sayName.apply(p,["Hello","Chennai"]);
//greeLib.sayName.apply(e,["Hey","Bengaluru"]);

// way-3: bind()
//let nagPersonSayName=greeLib.sayName.bind(p,"hello","universe");
//nagPersonSayName();
//nagPersonSayName();
//
//let ibmEmployeeSayName=greeLib.sayName.bind(e);
//ibmEmployeeSayName('hey',"egl");
//ibmEmployeeSayName('dude',"mbt");



//----------------------------------------------------




// 1000+ person objects
//
//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//	
//	this.sayName=function(){
//		console.log('im '+this.name);
//	}
//	this.sayAge=function(){
//		console.log('im '+this.age + 'old...');
//	}
//}
//
//let p1=new Person("Nag", 34);  // constructor invocation
//let p2=new Person("Ria", 3);


//--------------------------------------------------------------


// in .js lang , we can invoke function in 4 ways

/*
 *  
 * ==> function invocation  ( this ==> global object )
 * ==> method invocation    ( this ==> invoker-obj )
 * ==> call/apply/bind invocation ( this ==> arg-obj )
 * ==> constructor invocation  ( this ==> new-obj )
 * 
 */




//--------------------------------------------------------------


// Quiz

//
//
//
//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//
//
//Person("Abc", 100)

//--------------------------------------------------------------


//
//let tnr = {
//	name : 'Nag',
//	doTeach : function() {
//		console.log(this.name + " teaching .js");
//		let self=this;
//		let doLearn = function() {
//			console.log(this.name + " learning .js from "+ self.name);
//		}
//		//doLearn();
//		let emp = {
//			name : 'IBM'
//		};
//		doLearn.call(emp);
//		console.log("teaching .js end");
//	}
//};
//
//tnr.doTeach();
//let newTnr={name:'Praveen'}
//tnr.doTeach.call(newTnr);


//------------------------------------------------------------------

function sessionStart() {
	function Trainer(name) {
		this.name = name;
		this.doTeach = function() {
			console.log(this.name + " teaching .js");
			let self=this;
			let doLearn = function() {
				console.log(this.name + " learning .js from "+self.name)
			}
			return doLearn;
		}
	}
	function Employee(name) {
		this.name = name;
	}
	let tnr=new Trainer("Nag"); // constructor invocation
	let e1=new Employee("A");
	let e2=new Employee("B");
	let doLearn=tnr.doTeach(); // methed invocation
	doLearn.call(e1); // call/apply/bind invocation
	doLearn.call(e2);
}
sessionStart(); // function-invocation

//------------------------------------------------------------------





