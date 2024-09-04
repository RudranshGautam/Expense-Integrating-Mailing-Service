// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const passwordRoutes = require('./routes/passwordRoutes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // or any other view engine if used

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/password', passwordRoutes);

app.get('/', (req, res) => {
    res.redirect('/auth/login');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
