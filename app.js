var express = require('express');
var path = require('path');
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // The folder that contains this file right here

app.get('/', function (req, res) {
    res.render('index');
});
app.get('', function (req, res) {
    res.render('index');
});

app.listen(process.env.PORT, function() {
    console.log('ready port');
});