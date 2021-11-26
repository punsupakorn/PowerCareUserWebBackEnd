var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var userProfileRouter = require("./routes/UserProfileRoute");
var appointmentRouter = require("./routes/AppointmentRoute");
var loginRouter = require("./routes/LoginRoute");
var appointmentConfirmRouter = require("./routes/AppointmentConfirmRoute");
var editUserProfileRouter = require("./routes/EditUserProfileRoute");
var postponeRouter = require("./routes/PostponeRoute");
var postponeSelectRouter = require("./routes/SelectPostPoneRoute");
var postponeConfirmRouter = require("./routes/PostponeConfirmRoute");
var cancelRouterRouter = require("./routes/CancelRoute");

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/UserProfile", userProfileRouter);
app.use("/Appointment", appointmentRouter);
app.use("/Login", loginRouter);
app.use("/AppointmentConfirm", appointmentConfirmRouter);
app.use("/EditUserProfile", editUserProfileRouter);
app.use("/Postpone", postponeRouter);
app.use("/PostponeSelect", postponeSelectRouter);
app.use("/PostponeConfirm", postponeConfirmRouter);
app.use("/Cancel", cancelRouterRouter);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// const PORT = 8085;
// app.listen(PORT, () => {
//   console.log(`server is running on port: ${PORT}`);
// });

module.exports = app;
