var http = require('http'); // 1 - Import Node.js core module

var server = http.createServer(function (request, response) { 
	response.write('<html>');
	response.write('<body>');
	response.write('hello world');
	response.write('/body');
	response.write('/html');
	response.end();
});
server.listen(5000);
