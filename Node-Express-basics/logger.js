/**
 * 
 */

function logger(request, response, next) {
	var start = +new Date();
	var url = request.url;
	var method = request.method;
	var stream=process.stdout;
	response.on('finish', function() {
		var duration = +new Date() - start;
		var message = method + ' to ' + url + ' took  ' + duration + 'ms \n\n';
		stream.write(message); //prints the log message
	});
	next();
}

module.exports=logger;