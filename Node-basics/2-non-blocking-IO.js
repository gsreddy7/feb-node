/**
 * http://usejsdoc.org/
 */


let fs=require('fs');


const callback=function(err, data) {
	if(err)throw err;
	console.log(data.toString('utf8'))
}

console.log('reading veg menu....');
fs.readFile('./veg-menu.txt', callback);

console.log('reading non-veg menu....');
fs.readFile('./non-veg-menu.txt', callback)

console.log('doing something else.....');