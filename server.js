var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('main', {title: 'Main'});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
