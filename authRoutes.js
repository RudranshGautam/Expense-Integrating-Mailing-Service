// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for rendering the forgot password page
router.get('/forgot-password', authController.getForgotPasswordPage);

// Other routes...
router.get('/login', authController.getLoginPage);
router.get('/signup', authController.getSignupPage);
// Add other routes here...

module.exports = router;
