const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const compression = require('compression');

const indexRouter = require('./routes/index');
const catalogRouter = require('./routes/catalog');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup'); // Import the signup route

const app = express();

const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const mongoDB = "mongodb://localhost:27017/library";
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/catalog', catalogRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter); // Use the signup route

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen({
    port: 3000
});
console.log('Server is running at : http://localhost:3000');
