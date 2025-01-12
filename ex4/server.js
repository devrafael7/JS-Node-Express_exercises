const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();
const connection = require('./sql.js')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/login', (req, res)=> {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
})

app.post('/manual_login', function(req, res){
    res.send("Name: "+req.body.user_name +"Password: "+req.body.user_password + "Email: "+req.body.user_email);

    connection.connect((err) => {
        if (err) {
            console.error('Error to connect Database', err.stack);
            return;
        }
        console.log('Connected to database with ID:', connection.threadId);
    });

    const manualUser = {
        name: req.body.user_name,
        password: req.body.user_password,
        email: req.body.user_email
    }

    const query = 'INSERT INTO rea_users (Nome, Senha, Email) VALUES (?, ?, ?)';

    connection.query(query, [manualUser.name, manualUser.password, manualUser.email], (err, result) => {
        if (err) {
            console.log('Error to insert data: ', err);
            return;
        }
        console.log('Data entered successfully: ', result.insertId);
    })

    connection.end();
})

app.listen(5001, () => {
    console.log('Server running at http://localhost:5001');
});




