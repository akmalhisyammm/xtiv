const express = require('express');
const session = require('express-session');

const authRouter = require('./routes/authRoutes');
const dashboardRouter = require('./routes/dashboardRoutes');
const postRouter = require('./routes/postRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

const PORT = 3000;

app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'hacktiv8',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, sameSite: false },
  })
);
app.use(express.urlencoded({ extended: true }));

app.use('/', authRouter);
app.use('/dashboard', dashboardRouter);
app.use('/posts', postRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}! 👍`);
});
