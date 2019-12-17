var express = require('express');
var app = express();

app.set('view engine', 'pug');


app.get('/pug', function (req, res) {
    res.render('test', { title: 'Hey', message: 'Hello there!'});
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/main.js', function (req, res) {
    res.sendFile(__dirname + '/main.js');
});
app.get('/index.js', function (req, res) {
    res.sendFile(__dirname + '/index.js');
});
app.get('/Xhr.js', function (req, res) {
    res.sendFile(__dirname + '/Xhr.js');
});

app.get('/tsconfig.json', function (req, res) {
    res.sendFile(__dirname + '/tsconfig.json');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

