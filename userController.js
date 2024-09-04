const path = require('path');

// Render user profile page
exports.getProfilePage = (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../views/profile.html'));
    } else {
        res.redirect('/auth/login');
    }
};

// Update user profile (placeholder)
exports.updateProfile = async (req, res) => {
    const { name, email } = req.body;
    // You would typically update the user in the database here
    try {
        // Assume `db` is your database connection
        // await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, req.session.user.id]);

        res.redirect('/users/profile');
    } catch (error) {
        console.error('Error updating profile:', error);
        res.status(500).send('Error updating profile');
    }
};

// Change user password (placeholder)
exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    // You would typically check the old password and update it in the database here
    try {
        // Check old password and update to new password
        // const hashedPassword = await bcrypt.hash(newPassword, 10);
        // await db.query('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, req.session.user.id]);

        res.redirect('/users/profile');
    } catch (error) {
        console.error('Error changing password:', error);
        res.status(500).send('Error changing password');
    }
};

// Render user settings page
exports.getSettingsPage = (req, res) => {
    if (req.session.user) {
        res.sendFile(path.join(__dirname, '../views/settings.html'));
    } else {
        res.redirect('/auth/login');
    }
};
