const express = require('express');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const studentsRouter = require('./routes/students');

const app = express();
const bodyParser = require('body-parser');
// Add headers
app.use( (req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// config port
require('dotenv').config();
const port = process.env.PORT_NAME || 5000;

// define template engine --pug 
app.set("view engine", "pug");

// add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);


// on listening from server
app.listen(port, () => {
    console.log('Server is connected !!!');
});