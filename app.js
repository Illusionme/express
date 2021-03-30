var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var slack = "xapp-1-A01QFUNPAMP-1816267779381-ff7dabbb53e920a1f56eaaa8e2e29a8e07f832fc2733a8c4eb11ff186a3ef59d"
var randomToken = "eyJ4NXUiOiJpbXNfbmExLXN0ZzEta2V5LTEuY2VyIiwiYWxnIjoiUlMyNTYifQ.eyJpZCI6IjE2MDI2MjQwNzcyMzhfNTFlYWM3ZTctN2M4MS00NmU3LTg4NTMtNWJmYThjNGY1MTQ5X3VlMSIsImNsaWVudF9pZCI6ImtyaXNobmEtdGVzdC1hcHAiLCJ1c2VyX2lkIjoiOUJENjcxODE1REU0NzYyQTBBNDk0MDFCQEFkb2JlSUQiLCJzdGF0ZSI6IntcImpzbGlidmVyXCI6XCIxLjEzLjBcIixcIm5vbmNlXCI6XCIxNTY2MzA3NzE0NDIzMjQyXCJ9IiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMS1zdGcxIiwiZmciOiJVM0lHRFVCWDVSTlRNNExMM0FRTkM2SUFTRT09PT09PSIsInNpZCI6IjE2MDI2MjQwNzcyMzhfNjRmODNlNTgtMzhjNS00NTI5LTkxYmMtOWYzYTJmOGMwNThlX3VlMSIsIm1vaSI6IjM3ZDBlODk4IiwiYyI6ImtQa0F3Nlo3RE1kMlpaTS9NWFJtSVE9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoiQWRvYmVJRCxvcGVuaWQiLCJjcmVhdGVkX2F0IjoiMTYwMjYyNDA3NzIzOCJ9.XORRsp7UvFKFNvHeFiwU--OH4sUSwfFph-kfj9oFGWJ1upO_yYgeEhFkOldN1lficgtEIlSxsx_EP-4RM2RfuuW0QDX1dUoB9JMlNsjPd1LKuIh59PJGno0_mMQ6PJe5Z4eQ5OPnBQxM4nuVpmpkL8uOlZz6vyFuPRVPAvOrhypwWWOlO-QEj9wc4XOkpGNZ0whtCVsJ2lY8_nQmF2z8LwAMgAF00dtBnGbtitgl5N7wH5bnXkJ3lHitWwGCb7393ppe4-8aimJ_VpKWYc5Iww58f1u1G57w9KdrUieEZobxsNofWiz4gM9uh3obPWew3oCevTsj0VUFjlovcZ-cNg"
var newToken = "eyJ4NXUiOiJpbXNfbmExLXN0ZzEta2V5LTEuY2VyIiwiYWxnIjoiUlMyNTYifQ.eyJpZCI6IjE2MDI2MjQwNzcyMzhfNTFlYWM3ZTctN2M4MS00NmU3LTg4NTMtNWJmYThjNGY1MTQ5X3VlMSIsImNsaWVudF9pZCI6ImtyaXNobmEtdGVzdC1hcHAiLCJ1c2VyX2lkIjoiOUJENjcxODE1REU0NzYyQTBBNDk0MDFCQEFkb2JlSUQiLCJzdGF0ZSI6IntcImpzbGlidmVyXCI6XCIxLjEzLjBcIixcIm5vbmNlXCI6XCIxNTY2MzA3NzE0NDIzMjQyXCJ9IiwidHlwZSI6ImFjY2Vzc190b2tlbiIsImFzIjoiaW1zLW5hMS1zdGcxIiwiZmciOiJVM0lHRFVCWDVSTlRNNExMM0FRTkM2SUFTRT09PT09PSIsInNpZCI6IjE2MDI2MjQwNzcyMzhfNjRmODNlNTgtMzhjNS00NTI5LTkxYmMtOWYzYTJmOGMwNThlX3VlMSIsIm1vaSI6IjM3ZDBlODk4IiwiYyI6ImtQa0F3Nlo3RE1kMlpaTS9NWFJtSVE9PSIsImV4cGlyZXNfaW4iOiI4NjQwMDAwMCIsInNjb3BlIjoiQWRvYmVJRCxvcGVuaWQiLCJjcmVhdGVkX2F0IjoiMTYwMjYyNDA3NzIzOCJ9.XORRsp7UvFKFNvHeFiwU--OH4sUSwfFph-kfj9oFGWJ1upO_yYgeEhFkOldN1lficgtEIlSxsx_EP-4RM2RfuuW0QDX1dUoB9JMlNsjPd1LKuIh59PJGno0_mMQ6PJe5Z4eQ5OPnBQxM4nuVpmpkL8uOlZz6vyFuPRVPAvOrhypwWWOlO-QEj9wc4XOkpGNZ0whtCVsJ2lY8_nQmF2z8LwAMgAF00dtBnGbtitgl5N7wH5bnXkJ3lHitWwGCb7393ppe4-8aimJ_VpKWYc5Iww58f1u1G57w9KdrUieEZobxsNofWiz4gM9uh3obPWew3oCevTsj0VUFjlovcZ-cNg"
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

