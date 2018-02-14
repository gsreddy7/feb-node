/**
 * http://usejsdoc.org/
 */



// blocking IO


let fs=require('fs');

let content=fs.readFileSync('veg-menu.txt', 'utf8'); //........
console.log(content);
console.log('doing something else...');