// controllers/authController.js
const path = require('path');
const db = require('../db/connection');
const bcrypt = require('bcryptjs');

// Render forgot password page
exports.getForgotPasswordPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/forgot-password.html'));
};

// Render login page
exports.getLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
};

// Render signup page
exports.getSignupPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup.html'));
};

// Handle user signup
exports.signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword]);
        res.redirect('/auth/login');
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Error during signup');
    }
};

// Handle user login (placeholder)
exports.login = (req, res) => {
    res.send('Login functionality not implemented.');
};
