var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();

app.engine('handlebars', exphbs.create({ defaultLayout: 'main' }).engine);
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('homepage', {title: 'Home'});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

