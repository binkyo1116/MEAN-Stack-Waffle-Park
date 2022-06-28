var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var routes = require('./routes/index');
var Waffles = require("./models/Waffles");
var session = require("express-session");
var MongoStore = require('connect-mongo')(session);

var ALLOWED_ORIGINS = [
  "http://0.0.0.0:4200",
  "http://192.168.0.108:4200"
];



var app = express();

app.use(cors({origin: ALLOWED_ORIGINS, credentials: true}));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
       res.send(200);
   } else {
       next();
   }
});


var database = require('./bin/database');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: "sagar",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore(database._connection()),
  cookie: {maxAge: 1000 * 1000}
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//API routing
app.use('/api/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
