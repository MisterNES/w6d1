const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === "/OK") {
    console.log('Inbound OK, request being processed');
    res.writeHead(200);
    res.end();
    } else if (req.url === "/Bad-Request"){
        console.log("Bad request");
        res.writeHead(400);
        res.end();
    } else if (req.url === "/Created") {
        console.log("Created");
        res.writeHead(201);
        res.end();
    } else if (req.url === "/Forbidden") {
        console.log("Forbidden");
        res.writeHead(403);
        res.end();
    } else if (req.url === "/Found") {
        console.log("Found");
        res.writeHead(302);
        res.end();
    } else if (req.url === "/Gateway-Timeout") {
        console.log("Gateway Timeout");
        res.writeHead(504);
        res.end();
    } else if (req.url === "/Internal-Server-Error") {
        console.log("Internal Server Error");
        res.writeHead(500);
        res.end();
    } else if (req.url === "/Moved-Permanently") {
        console.log("Moved Permanently");
        res.writeHead(301);
        res.end();
    } else if (req.url === "/Unauthorized") {
        console.log("Unauthorized");
        res.writeHead(401);
        res.end();
    } else if (req.url === "/Bonus/Redirect"){
        console.log("Redirecting");
        res.writeHead(308);
        res.end();
    } else if (req.url === "/Bonus/Created") {
        console.log("Created");
        res.writeHead(201);
        res.end();
    }
    else {
        response.writeHead(404);
        response.end();
    }
});

server.listen(3000, function() {
  console.log("Listening for requests on port 3000.");
});
