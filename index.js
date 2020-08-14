const express = require('express');
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');

const initDatabase = require('./init-database');
const initPassport = require('./init-passport');
const apiRoutes = require('./api/routes/api-routes');

const PORT = 8888;

initDatabase(mongoose);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'cats' }));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/api/views');

initPassport(passport);

app.use('/', apiRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

