const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, this is an HTTP server!\n");
});

server.listen(5000, ()=>{
    console.log("HTTP Server running at http://localhost:5000")
})