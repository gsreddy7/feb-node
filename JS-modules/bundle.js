(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

console.log('-app.js-');

//var ibm = ibm || {};
//// pack1/mod1.js
//ibm.mod1.doWork();


//-----------------------------------------------------------------

//let mod1=require('./greet');
//mod1.greet('en');
//mod1.greet('es');
//mod1.greet();


//-----------------------------------------------------------------


let ibmGreet=require('ibm-blr-feb-greet');
ibmGreet.greet('en');
ibmGreet.greet('es');
ibmGreet.greet();













},{"ibm-blr-feb-greet":4}],2:[function(require,module,exports){
///**
// * http://usejsdoc.org/
// */
//
//var ibm = ibm || {};
//(function() {
//	var o = {
//		doWork : function() {
//			console.log('im mod2');
//		}
//	}
//	ibm.mod2=o;
//})();

//-------------------------------------------------------------------

function greet(){
	console.log('Hello....');
}
module.exports=greet;
},{}],3:[function(require,module,exports){
///**
// * http://usejsdoc.org/
// */
//
//var ibm = ibm || {};
//(function() {
//	var o = {
//		doWork : function() {
//			console.log('im mod3');
//		}
//	}
//	ibm.mod3=o;
//})();

//-------------------------------------------------------------------

function greet(){
	console.log('Ola....');
}
module.exports=greet;
},{}],4:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

//var ibm = ibm || {};
//(function() {
//	var i=10;  // private
//	ibm.mod2.doWork();
//	ibm.mod3.doWork();
//	var o = {
//		doWork : function() {
//			console.log('im mod1');
//		}
//	}
//	ibm.mod1=o;
//})();

//--------------------------------------------------------------

console.log('-pack1/mod1.js-');
let message = "Hello...";

let en=require('./en');
let es=require('./es');

function greet(lang) {
	if (lang === "en") {
		en(); return;
	}
	if (lang === "es") {
		es(); return;
	}
	console.log("hoi maga");
}

module.exports = {
	greet
};








},{"./en":2,"./es":3}]},{},[1]);
