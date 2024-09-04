const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Routes for handling expenses
router.get('/', expenseController.getExpenses);
router.post('/add', expenseController.addExpense);
router.get('/delete/:id', expenseController.deleteExpense);

module.exports = router;
