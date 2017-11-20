var http = require('http');
var exfile = require('fs');
var url = require('url');
var address = "http://127.0.0.1:8081/home.html";

http.createServer(function(request, response){
  var query = url.parse(request.url, true);
  var page = "." + query.pathname;
  exfile.readFile(page, function(error, data) {

    if (error) {
      response.writeHead(404, {'Content-Type': 'text/html'});
      return response.end("404 Not Found");
    }else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data);
      response.end();
    }

  });

}).listen(8081);
