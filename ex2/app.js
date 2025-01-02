const http = require('http');
const url = require('url');

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

function sumAcrossNumberOnServer(){
    const server = http.createServer((req, res)=>{
        
        const query = url.parse(req.url, true).query;
        const num1 = parseFloat(query.num1);
        const num2 = parseFloat(query.num2);

        if(!isNaN(num1) && !isNaN(num2)){

            const sum = num1 + num2;
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(`The sum of ${num1} and ${num2} is ${sum}`);
        } else {
            
            res.writeHead(400, {'content-type': 'text/plain'});
            res.end('Please enter a valid number to make a sum');
        }

    });

    server.listen(8081, ()=>{
        console.log('Server running at http://localhost:8081')
    })
}

sumAcrossNumberOnServer()

