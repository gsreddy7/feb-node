/**
 * http://usejsdoc.org/
 */


let http = require('http');
let fs = require('fs');
let server = http.createServer(); // EventEmitter


server.on('request', function(req, res) {


	//------------------------------------------------------------
	//	res.writeHead(200, {
	//		'Content-Type' : 'text/plain'
	//	});
	//	res.write("Hey, im server running on Node.js runtime");
	//	res.end();

	//------------------------------------------------------------

	res.writeHead(200, {
		'Content-Type' : 'application/pdf'
	});

	//	fs.readFile('./ppt/all-levels node.pdf', function(err, data) {
	//		res.write(data);
	//		res.end();
	//	});

	let readableStream = fs.createReadStream('./ppt/all-levels node.pdf'); // Event Emitter
	//	readableStream.on('data', function(chunk) {
	//		console.log('data-event on readableStream');
	//		res.write(chunk)
	//	})
	//	readableStream.on('close', function() {
	//		res.end();
	//	});
	//
	readableStream.pipe(res);

})

server.listen(8080, function() {
	console.log('server at http://localhost:8080');
})