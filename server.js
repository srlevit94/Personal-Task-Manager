const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const hbspath = require('path')

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', exphbs.engine({
    extname: 'handlebars',
    defaultLayout: 'main',
    layoutsDir: hbspath.join(__dirname, 'views/layouts') 
}));

app.set('view engine', 'handlebars');

// routing
// "/" template currently set to index.handlebars for personal testing
app.get('/', (req, res) => {
    res.render('index',
     { title: 'index MPM'});
});

app.get('/homepage', (req, res) => {
    res.render('homepage',
     { title: 'My Project Manager'});
});

app.get('/projects', (req, res) => {
    res.render('projects',
     { title: 'My Projects'});
});

app.get('/login', (req, res) => {
    res.render('login',
     {title: 'MPM Login'});
});



app.listen(3000, () => {
    console.log('Server is starting at port ', 3000);
});




