import createError from 'http-errors'
import express from 'express';
import path from 'path';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import detectPort from 'detect-port';
import logger from 'morgan';
import mongoose from 'mongoose';

import posts from './routes/posts';
import docs from './utils/swagger';

// mongo db
mongoose.connect(
  'mongodb+srv://admin:1234@ingstagram.v9xmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
  }
);
const db = mongoose.connection;
db.once('open', () => { console.log('open!') });
db.on('error', () => { console.log('error!') });


// server setup
let port;
async function configServer() {
  port = 8000 || (await detectPort(8000));
}
configServer();

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(cors());

app.use('/posts', posts);
app.use('/images', express.static(path.join(__dirname, 'uploads')));

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

// start
app.listen(port, () =>
  console.log(`SERVER IS RUNNING ON ${port}`)
);


export default app;