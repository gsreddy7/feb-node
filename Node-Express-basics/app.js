/**
 * http://usejsdoc.org/
 */


let express = require('express');
let app = express();
//let logger=require('./logger');
var morgan = require('morgan') // logging

//
//app.get('/', function(req, res) {
//	
//	//res.send("Hello World");
//	
//	// or	
//	
//	//	res.write("Hello World");
//	//	res.end();
//	
//	res.sendFile(__dirname+"/public/index.html");  // Non-blocking IO
//
//});


//app.get('/css/bootstrap.css', function(req, res) {
//	res.sendFile(__dirname+"/public/css/bootstrap.css");  // Non-blocking IO
//});

//app.use(logger);

app.use(morgan('dev'))
app.use(express.static(__dirname + "/public"));

app.get('/menu', function(req, res) {
	let menu = [ 'idly', 'vada', 'poori' ];
	res.json(menu);
})

app.get('/blocks', function(req, res) {
	// load all blocks from db
	let blocks = [ "Fixed", "Movable", "Rotating" ];
	//res.send(blocks);
	res.json(blocks);
});


app.get('/old-resource', function(req, res) {
	res.redirect(301, 'new-resource');
//res.redirect('http://nodejs.org');
});


app.get('/new-resource', function(req, res) {
	res.send("welcome to new-resource");
});




















app.listen(3000, function() {
	console.log('server listening at http://localhost:3000');
});