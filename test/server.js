const http = require('http');

const server = http.createServer(function(request, response) {
    if (request.url === "/200") {

    }
});

server.listen(3000, function(){
    console.log("Listening for requests on port 3000.");
});
