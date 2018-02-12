/**
 * http://usejsdoc.org/
 */

"use strict"

/*
 *  using 'prototypes'
 *  
 *  obj   -------> parent-object ( prototype )
 * 
 */

//
//function Person(name, age) {
//	this.name = name;
//	this.age = age;
////	this.sayName = function() {
////		console.log('im ' + this.name);
////	}
////	this.sayAge = function() {
////		console.log('im ' + this.age + 'old...');
////	}
//}
//
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//}
//Person.prototype.sayAge = function() {
//	console.log('im ' + this.age + 'old...');
//}
//
//let p1 = new Person("Nag", 34); // constructor invocation
//let p2 = new Person("Ria", 3);
//


//----------------------------------------------------------------

//
//let p={x:1,y:2};
//let c=Object.create(p);
//

//----------------------------------------------------------------

//
//let o1={x:10};
//let o2={y:20};
//
//Object.setPrototypeOf(o2,o1);


//----------------------------------------------------------------



//Obj's constraints

//
//let person = {
//	name : 'Nag',
//	age : 34
//};

//Object.preventExtensions(person);
//Object.seal(person);
//Object.freeze(person);

//person.newProp = 'new value';
//delete person.name;
//person.name="asdfghjk";




//----------------------------------------------------------------


//
//
//let person = {
//	_name : 'Nag',
//	_age : 34,
//	set name(name) {
//		if (name) {
//			this._name = name;
//		}
//	},
//	get name(){
//		return this._name;
//	}
//
//}
//person.name = ""; // set
//console.log(person.name); // get
//








