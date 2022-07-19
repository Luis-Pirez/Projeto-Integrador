const express = require('express');
const path = require('path');

const mainRouter = require('./routes/main.routes');
const authRouter = require('./routes/auth.routes');
const usersRouter = require('./routes/users.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/', mainRouter);



app.listen(3333, () => {
  console.log('🚀');
});

module.exports = app;