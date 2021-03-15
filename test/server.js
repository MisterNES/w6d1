const http = require('http');

const server = http.createServer(function(request, response) {
  if (request.url === "/OK") {
    console.log('Inbound OK, request being processed')
    response.writeHead(200)
    response.end()
  } else {
    response.writeHead(404)
    response.end()
  }
});

server.listen(3000, function() {
  console.log("Listening for requests on port 3000.");
});