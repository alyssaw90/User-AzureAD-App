var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var expressSession = require('express-session');
var authCtrl = require('./controllers/auth');
var app = express();

app.set('view engine', 'ejs');

app.use(ejsLayouts);
app.use('/', authCtrl);


app.listen(3000);