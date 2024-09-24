const mongoose = require('mongoose')

const Admin = mongoose.Schema(
    {
		fullname: {type: String},
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },        
    }
);

const AdminData = mongoose.model('AdminData', Admin)
module.exports = AdminData