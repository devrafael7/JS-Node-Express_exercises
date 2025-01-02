const http = require('http');

function currentTimeOnServer(){
    const server = http.createServer((req, res)=>{

        res.writeHead(200, {'content-type': 'text/plain'});
        const currentTime = new Date().toLocaleString();
        res.end(`The current time is ${currentTime}`); 
    });

    server.listen(8081, ()=>{
        console.log('Server running at http://localhost:8081')
    })
}

//currentTimeOnServer()

