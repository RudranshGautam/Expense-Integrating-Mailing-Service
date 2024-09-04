const db = require('../db/connection');

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM expenses WHERE user_id = ?', [req.session.userId]);
        res.json(rows);
    } catch (err) {
        console.error('Error fetching expenses:', err);
        res.status(500).send('Error fetching expenses');
    }
};

// Add an expense
exports.addExpense = async (req, res) => {
    const { amount, description, category } = req.body;
    try {
        const result = await db.query('INSERT INTO expenses (amount, description, category, user_id) VALUES (?, ?, ?, ?)', [amount, description, category, req.session.userId]);
        res.json({ id: result.insertId, amount, description, category });
    } catch (err) {
        console.error('Error adding expense:', err);
        res.status(500).send('Error adding expense');
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    const { id } = req.params;
    try {
        await db.query('DELETE FROM expenses WHERE id = ? AND user_id = ?', [id, req.session.userId]);
        res.sendStatus(200);
    } catch (err) {
        console.error('Error deleting expense:', err);
        res.status(500).send('Error deleting expense');
    }
};
