const express = require('express');
<<<<<<< HEAD
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




=======
const session = require('express-session');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.static(path.join(__dirname, './public')))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(express.static(path.join(__dirname, '/public')))
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
>>>>>>> 5a13df2d459b955904863c25985c9bd8056706b9
