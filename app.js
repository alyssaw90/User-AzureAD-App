var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

app.set('view engine', 'ejs');

app.use(ejsLayouts);

app.listen(3000);