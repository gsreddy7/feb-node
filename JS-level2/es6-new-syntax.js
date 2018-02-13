/**
 * http://usejsdoc.org/
 */



//4. object-literal enhancements
//-----------------------------------

//
//let name = "Nag";
//let age = 34;
//let personId = 1;
//
//// es5
//let person = {
//	name : name,
//	age : age,
//	sayName : function() {
//		console.log('im ' + this.name);
//	}
//};
////es6
//let personNew = {
//	name ,
//	age ,
//	[personId + 10] : '...........',
//	sayName () {
//		console.log('im ' + this.name);
//	},
//	['say Age'](){
//		//....
//	}
//}
//
//

//--------------------------------------------------------------


//5. destructuring


// a. array destructuring

//let arr = [ 1, 2, 3, 40, [ 5, 6 ], 7, 8 ];


// manual
//let a=arr[0];
//let b=arr[1];
//let c=arr[2];

// or

//let [a, b, c, d=4, [e, f]] = arr;


// b. object destructuring

//
//let person = {
//	name : 'Nag',
//	age : 34
//};

//let myName=person.name;
//let myAge=person.age;

// or

//let {name:myName,age:myAge}=person;
//let {name:name,age:age}=person;
// or
//let {name, age} = person;

//let name,age;
//({name, age} = person);

//-------------------------------------------------------------

//6. spread opeartor

//
//function func(a,b,c){
//	console.log(a);
//	console.log(b);
//	console.log(c);
//}
//
//let arr=[1,2,3];

//func(arr[0],arr[1],arr[2]);

// or

//func(...arr);

//
//let a1=[1,2,3];
//let a2=[7,8,9];
//
//let a3=[...a1,4,5,6,...a2,..."IBM"];


//-------------------------------------------------------------

//7. symbol type
//
//let ibmSymbol = Symbol.for("ibm");
//let myCompSymbol = Symbol.for("myComp");
//
//
//let e1 = {
//	name : 'A',
//	[ibmSymbol] : 'mbt,egl'
//}
//
//let e2 = {
//	name : 'B',
//	[ibmSymbol] : 'mbt'
//}
//
//let e3 = {
//	name : 'C',
//	[myCompSymbol] : 'unverse'
//}
//
//let o={};
//let menu=['idly','vada','dosa'];
//
//let newMenu=[...menu,'poori'];
//let [m1,m2,m3]=menu;
//for(let m of menu){
//	console.log(m);
//}


//-------------------------------------------------------------


//9. iterable objects 

//
//
//let idMaker={
//		[Symbol.iterator]:function(){
//			let id=0;
//			return {
//				next:function(){
//					id++;
//					return {value:id>10?undefined:id,done:id>10?true:false}
//				}
//			};
//		}
//}
//
//
//let ids=[...idMaker];
//let [id1,id2,id3]=idMaker;
//for(let id of idMaker){
//	console.log(id);
//}



// generator function

//function* gen(){
//	let x=yield "enter x value";
//	console.log(x);
//	let y=yield "enter y value";
//	console.log(y);
//	let z=yield "enter z value";
//	console.log(z);
//	return (x+y+z);
//}
//



//-------------------------------------------------------------


// 10. arrow function


//
//let getPrice = function() {
//	return 100 + 200;
//}

// or


//let getPrice = () => {
//	return 100 + 200;
//}


//let getPrice = () =>100 + 200;
//let getPrice = (count) => count * (100 + 200);
//let getPrice = count => count * (100 + 200);
////let getPrice = (count,gst) => count * (100 + 200) + gst;
//let getPrice = (count, gst) => {
//	let cost = count * (100 + 200);
//	let total = cost+gst;
//	return total;
//};
//


// why we need arrow-function ?

/*
 *   ==> to make compact function-arg
 *   ==> to capture 'this'
 * 
 */



//==> to make compact function-arg


//let nums = [ 1, 3, 5, 7, 9, 2, 4, 6, 8, 10 ];
//nums.sort();
//nums.sort(function(a,b){return a-b});
//nums.sort((a, b) => a - b);



//==> to capture 'this'

/*
 *  regular-function ,
 *  
 *   ==> by default bound to global-object
 *   else
 *   ==> we can bind statically/dynamically to other object
 *   
 *   
 *   advantages of arrow-function:
 *   ---------------------------
 *   
 *   => always bound to creator-object
 *      i.e cannot bind dynamically to any other objec
 * 
 * 
 */

//
//let tnr = {
//	name : 'Nag',
//	doTeach : function() {
//		console.log(this.name + " teaching .js");
//		
//		//			let askQues=function(q){
//		//				console.log(this.name +" answering "+q);
//		//			}
//		// or
//
//		let askQues = (q) => {
//			console.log(this.name + " answering " + q);
//		}
//
//		console.log("teaching .js ends.");
//		return askQues;
//	}
//};
//
//
//let askQues = tnr.doTeach();
//askQues("Q1");
//let tmpTnr = {
//	name : 'Praveen'
//};
//askQues.call(tmpTnr, "Q2");


//---------------------------------------------------------------




// Quiz



//let inv={
//		num:123,
//		process(){
//			console.log("INV-"+this.num +" processed");
//		}
//}

//let inv={
//		num:123,
//		process:()=>{
//			console.log("INV-"+this.num +" processed");
//		}
//}
//
//let inv={
//		num:123,
//		process(){
//			console.log("INV-"+this.num +" processed partially");
//			return function(){
//				console.log("INV-"+this.num +" processed completely");
//			}
//		}
//}

//
//let inv={
//		num:123,
//		process(){
//			console.log("INV-"+this.num +" processed partially");
//			return ()=>{
//				console.log("INV-"+this.num +" processed completely");
//			}
//		}
//}
//
//let complete=inv.process();
//complete();
//


//--------------------------------------------------------------


//
//function Person(name, age) {
//	this.name = name;
//	this.age = age;
//	//	
//	//	let self=this;
//	//	let incAge = function() {
//	//		console.dir(this);
//	//		self.age++;
//	//		console.log(self.name + " : " + self.age);
//	//	}
//
//	let incAge = () => {
//		this.age++;
//		console.log(this.name + " : " + this.age);
//	};
//
//	setInterval(incAge, 1000); // event
//}
//
//new Person('Ria', 0);


//--------------------------------------------------------------



//11. new OO with 'class' syntax

// ES5


//
//function Person(name, age) {
//	this.name = name;
//	this.age = age;
//}
//Person.prototype.sayName = function() {
//	console.log('im ' + this.name);
//}
//Person.prototype.sayAge = function() {
//	console.log('im ' + this.age + 'old...');
//}

// Es6
//class Person {
//	constructor(name,age) {
//		this.name = name;
//		this.age = age;
//		console.log('Person :: constructor');
//	}
//	sayName() {
//		console.log('im ' + this.name);
//	}
//	sayAge() {
//		console.log('im ' + this.age + 'old...');
//	}
//}
//
//class Employee extends Person{
//	constructor(name,age,salary) {
//		super(name,age);
//		this.salary=salary;
//		console.log('Employee :: constructor');
//	}
//	saySalary(){
//		console.log('im get' + this.salary + 'only...');
//	}
//	getBonus(){
//		return this.salary*0.02;
//	}
//}
//
//class Boss extends Employee{
//	getBonus(){
//		return this.salary*0.2 + super.getBonus();
//	}
//}
//
//let boss = new Boss("Nag", 34,1000.00); // constructor invocation
//
//
//
//class Abc{
//	static staMethod(){
//		//...
//	}
//}
//Abc.staVar=12;










