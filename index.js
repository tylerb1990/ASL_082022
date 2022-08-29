const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pageRouter = require('./src/controllers/page')
const quizzesCtrl = require('./src/controllers/quizzes');
const questionsCtrl = require('./src/controllers/questions');
const choicesCtrl = require('./src/controllers/choices');
const authCtrl = require('./src/controllers/auth')
const session = require('express-session');
const cors = require('cors');
const isAuthenticated = require('./src/middlewares/auth')

// Sessionsssss
app.use(session({
    saveUninitialized: false,
    secret: 'keyboard cat',
    cookie: {
        maxAge: 60000
    }
}));

// Views
app.set('views', __dirname + '/src/views');
app.set('view engine', 'twig');
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    "credentials": true,
    "allowedCrossDomain": true
}));

app.use(bodyParser.urlencoded({ extended: false }));

// Router
app.use('/quizzes', isAuthenticated, quizzesCtrl);
app.use('/questions', isAuthenticated, questionsCtrl);
app.use('/choices', isAuthenticated, choicesCtrl);
app.use('/auth', authCtrl);
app.use('/', pageRouter);

// Listen to port
app.listen(3000);