const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

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
    res.send("Name: "+req.body.user_name +"Password: "+req.body.user_password);
})

app.listen(5001, () => {
    console.log('Server running at http://localhost:5001');
});




