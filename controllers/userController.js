const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AdminData = require('../models/admin.model')


const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check for user email
        const user = await AdminData.findOne({ email });

        if (!user) {
            return res.status(400).json({ status: 'error', error: 'Email not found' });
        }

        // Check for valid password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ status: 'error', error: 'Incorrect password' });
        }

        // Generate JWT token
        const token = generateToken(user._id, user.email);
        return res.status(200).json({ status: 'ok', user: token, name: user.fullname });

    } catch (err) {
        console.error('Login error:', err);
        return res.status(500).json({ status: 'error', error: 'Server error. Please try again later.' });
    }
};

// Generate JWT
const generateToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
};
  
module.exports = {
    loginUser,
}
