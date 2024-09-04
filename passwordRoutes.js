// routes/passwordRoutes.js
const express = require('express');
const router = express.Router();
const passwordController = require('../controllers/passwordController');

// Define the route for the forgot password page
router.get('/forgot-password', passwordController.getForgotPasswordPage);

// Define other routes...

module.exports = router;
