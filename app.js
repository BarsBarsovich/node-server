var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbWorker = require

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views/pages'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


app.get('/', function (req, res) {
  res.render('index', {title: 'main'});
});

app.post('/', function (req, res) {

  const {name, email, message} = req.body;
  console.log('Privet', name);
  console.log('Privet', email);
  console.log('Privet', message);
  res.end();
})

app.get('/login', function (req, res) {
  res.render('login', {title: 'login'})
});

app.get('/admin', function (req, res) {
  res.render('admin', {title: 'admin'})
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
