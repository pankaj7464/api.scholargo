const mongoose = require('mongoose')
const adminSchema = new mongoose.Schema({
    adminName: String,
    role: {
        type: String,
        enum: ['admin', 'author']
    },
    aboutAdmin: String
});
const Admin = mongoose.model('Author', adminSchema);
module.exports = Admin