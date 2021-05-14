const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const xss = require('xss-clean');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({
    path: './config.env'
});

//  Routes files
var todolistRouter = require('./routes/todolist');

var app = express();

// View engine setup - currently used to render the error page
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

// Body parser, reading data from body into req.body
app.use(express.json({limit: '15kb'}));

// Parse the incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false }));

// Allow Cross-Origin requests
app.use(cors());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// app.use(express.static(path.join(__dirname, 'public')));

// Prefix the routes
app.use('/',todolistRouter );

// catch 404 at application level and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Send 500 as response
  res.status(err.status || 500);
  res.send(res.locals.error || err.message)
});

module.exports = app;
