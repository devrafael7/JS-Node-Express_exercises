const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const querystring = require('querystring');


function sendMessage(){
    const server = http.createServer((req, res) => {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end('Hello world!')
    });
    
    server.listen(5000, ()=> {
        console.log('server running at http://localhost:5000/')
    });
}

//sendMessage();

function readContentTxtFile(){
    fs.readFile('content.txt', 'utf8', (err, data)=>{
        if (err) {
            console.log('error reading file:', err);
            return;
        } 
        console.log(data)
    })
}

//readContentTxtFile();

function httpRoutes(){
    const server = http.createServer((req, res)=>{
        if (req.url === '/'){
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end('you are on the homepage');
        } else if (req.url === '/login') {
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('you are on the login page');
        } else if (req.url === 'about') {
            res.writeHead(200, {'Content-type': 'text/plain'});
            res.end('you are on about us page')
        } else {
            res.writeHead(404, {'content-type': 'text/plain'});
            res.end('Page not found');
        }
    })

    server.listen(5001, ()=>{
        console.log('server running at http://localhost:5001/')
    })
}

//httpRoutes()


function postData(){
    const server = http.createServer((req, res) => {
        if (req.method === 'POST' && req.url === '/submit') {
          let body = '';
      
          req.on('data', chunk => {
            body += chunk;
          });
      
          req.on('end', () => {
            const parsedData = querystring.parse(body);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify(parsedData));
          });
        } else {
          res.writeHead(404, {'Content-Type': 'text/plain'});
          res.end('Page not found');
        }
      });
      
      server.listen(5001, () => {
        console.log('Server running at http://localhost:5001/');
      });  
}

//postData()



