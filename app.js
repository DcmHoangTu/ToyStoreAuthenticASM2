var createError = require('http-errors');
const cookieSession = require('cookie-session');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toymodelRouter = require('./routes/toymodel');
var classifyRouter = require('./routes/classify')
//var userRouter = require('./routes/user');

var app = express();

var hbs = require('hbs');
hbs.registerHelper('equal', require('handlebars-helper-equal'));


// Session configurati


//khai bao va cau hinh body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//khai bao va cau hinh mongoose
var mongoose = require('mongoose');
//Note: can khai bao ten db o cuoi uri cua connection string
var uri = "mongodb+srv://tuhmgch210520:ofXLZktGwrtRJAEv@cluster0.zd9bfoa.mongodb.net/ToyStore2";
mongoose.set('strictQuery', false);
mongoose.connect(uri)
.then(() => console.log('connect to db ok'))
.catch((err) => console.log('connect to db error'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/toymodel', toymodelRouter);
app.use('/classify', classifyRouter);
//app.use('/user', userRouter);



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

//cau hinh Port
app.listen(process.env.PORT || 3001);

module.exports = app;
