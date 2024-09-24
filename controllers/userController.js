const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const AdminData = require('../models/admin.model')


const loginUser = async (req, res) => {
    const { email, password } = req.body

    // Check for user email
    const user = await AdminData.findOne({ email })
    
    if (!user) {
      return { status: 'error', error: 'Invalid login' }
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    )

    if (isPasswordValid) {
      const token = generateToken(user._id,user.email)    
      return res.json({ status: 'ok', user: token, name:user.fullname })
    } 
    else {
        return res.json({ status: 'error', user: false })
    }

}
  
// Generate JWT
const generateToken = (id,email) => {
    return jwt.sign({ id,email }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    })
}
  
module.exports = {
    loginUser,
}