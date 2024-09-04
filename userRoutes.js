const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Define routes for user management

// Get all users (for administrative purposes)
router.get('/', async (req, res) => {
    try {
        const users = await userController.getUsers();
        res.json(users);
    } catch (err) {
        res.status(500).send('Error fetching users');
    }
});

// Add a new user
router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userId = await userController.addUser(name, email, password);
        res.status(201).json({ id: userId });
    } catch (err) {
        res.status(500).send('Error adding user');
    }
});

// Update user details
router.put('/:id', async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    try {
        const affectedRows = await userController.updateUser(userId, name, email);
        if (affectedRows > 0) {
            res.send('User updated successfully');
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        res.status(500).send('Error updating user');
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const affectedRows = await userController.deleteUser(userId);
        if (affectedRows > 0) {
            res.send('User deleted successfully');
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        res.status(500).send('Error deleting user');
    }
});

// Handle forgot password requests
router.post('/password/forgotpassword', async (req, res) => {
    const { email } = req.body;
    try {
        await userController.forgotPassword(email);
        res.send('Password reset email sent');
    } catch (err) {
        res.status(500).send('Error sending password reset email');
    }
});

module.exports = router;
