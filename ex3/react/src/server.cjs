const express = require('express');
const path = require('path');
require('@babel/register')({
    presets: ['@babel/preset-react'],
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const app = express();

app.get('/', (req, res)=>{
    const Page = require('./index.jsx').default;
    const content = ReactDOMServer.renderToString(React.createElement(Page));
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head><title>Home</title></head>
        <body>${content}</body>
        </html>`
    );
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log('Server running at http://localhost:3000')
})