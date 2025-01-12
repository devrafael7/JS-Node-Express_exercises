const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
require('dotenv').config();
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const expressSession = require('express-session');
const passport = require('passport');

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login'); 
}

const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const app = express();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: '/google',
        },
        (accessToken, refreshToken, profile, callback) => {
            callback(null, profile);
        }
    )
);

passport.serializeUser((user, callback) => {
    callback(null, user);
});

passport.deserializeUser((user, callback) => {
    callback(null, user);
});

app.use(
    expressSession({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/login/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google', passport.authenticate('google'), (req, res) => {
    const profile = req.user;

    const googleUser = {
        name: profile.displayName,
        password: '',
        email: profile.emails[0].value,
        id: profile.id,
    };

    const loginQuery = 'SELECT * FROM rea_users WHERE Id_Google = ?';

    connection.query(loginQuery, [googleUser.id], (err, result) => {
        if (err) {
            console.log('Error to query data: ', err);
            return res.redirect('/login');
        }

        if (result.length > 0) {
            console.log('Logged in successfully', result[0]);
            res.redirect('/?user=' + encodeURIComponent(JSON.stringify(googleUser)));
        } else {
            const insertQuery = 'INSERT INTO rea_users (Nome, Senha, Email, Id_Google) VALUES (?, ?, ?, ?)';

            connection.query(insertQuery, [googleUser.name, googleUser.password, googleUser.email, googleUser.id], (err, result) => {
                if (err) {
                    console.log('Error to save info user in database', err);
                    return res.redirect('/login');
                }

                console.log('User registered successfully, ID: ', result.insertId);
                res.redirect('/?user=' + encodeURIComponent(JSON.stringify(googleUser)));
            });
        };
    });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/manual_login', (req, res) => {
    const manualUser = {
        name: req.body.user_name,
        password: req.body.user_password,
        email: req.body.user_email,
    };

    if (!manualUser.name) {
        const loginQuery = 'SELECT * FROM rea_users WHERE Email = ? AND Senha = ?';

        connection.query(loginQuery, [manualUser.email, manualUser.password], (err, results) => {
            if (err) {
                console.error('Erro to query data:', err);
                return res.redirect('/login');
            }

            if (results.length > 0) {
                console.log('Logged in successfully:', results[0]);
                req.login(results[0], (err) => {
                    if (err) {
                        console.log('Error to login: ', err);
                        return res.redirect('/login');
                    }
                    res.redirect('/');
                });
            } else {
                console.log('User or password wrong.');
                res.redirect('/login');
            }
        });
    } else {
        const checkEmailQuery = 'SELECT * FROM rea_users WHERE Email = ?';

        connection.query(checkEmailQuery, [manualUser.email], (err, results) => {
            if (err) {
                console.error('Error to verify e-mail:', err);
                return res.redirect('/login');
            }

            if (results.length > 0) {
                console.log('E-mail is already in use.');
                res.redirect('/login');
            } else {
                const insertQuery = 'INSERT INTO rea_users (Nome, Senha, Email) VALUES (?, ?, ?)';

                connection.query(insertQuery, [manualUser.name, manualUser.password, manualUser.email], (err, result) => {
                    if (err) {
                        console.error('Error to save info user in database:', err);
                        return res.redirect('/login');
                    }

                    console.log('User registered successfully with ID:', result.insertId);
                    res.redirect('/');
                });
            }
        });
    }
});

app.listen(5001, () => {
    console.log('Server running at http://localhost:5001/login');
});





