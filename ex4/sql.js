const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect( (err) => {
    if (err) {
        console.error('Error to connect to MySQL:', err.message);
        return;
    }

    console.log('Successful connection to MySQL!');
});

connection.query('SELECT * FROM rea_users', (err, results) => {
    if (err) {
        console.error('Error to run query', err.message);
        return;
    }
    console.log('Results: ', results)
})