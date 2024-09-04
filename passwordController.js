const nodemailer = require('nodemailer');
const sendinblue = require('nodemailer-sendinblue');

// Create a transporter using Sendinblue
const transporter = nodemailer.createTransport(sendinblue({
    apiKey: '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'
}));

// Function to handle forgot password requests
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;

    // Create a reset token (you'll need to handle token generation and storage in a real app)
    const resetToken = 'dummytoken'; // Replace this with actual token generation

    const resetUrl = `http://localhost:3000/reset-password?token=${resetToken}`;

    const mailOptions = {
        from: 'gunnusharma981@gmail.com', // Your Sendinblue sender email
        to: email,
        subject: 'Password Reset Request',
        text: `You requested a password reset. Please follow this link to reset your password: ${resetUrl}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Error sending password reset email:', error);
        res.status(500).json({ message: 'Error sending password reset email' });
    }
};
