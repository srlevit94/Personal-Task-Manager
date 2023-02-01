const express = require('express');
const app = express();
const exphbs = require('express-handlebars');


app.engine('handlebars', exphbs.engine({extname: 'handlebars', defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


// routing
// "/" template currently set to index.handlebars for personal testing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/homepage', (req, res) => {
    res.render('homepage');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/login', (req, res) => {
    res.render('login');
});



app.listen(3000, () => {
    console.log('Server is starting at port ', 3000);
});




