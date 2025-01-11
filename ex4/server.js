const express = require('express');
const path = require('path');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = 5001;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));

  connection.connect( (err) => {
    if (err) {
        console.error('Error to connect to MySQL:', err.message);
        return;
    }

    console.log('Successful connection to MySQL!');
});
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



