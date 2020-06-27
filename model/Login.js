const mongoose = require('../common/db')

// Define collection and schema for Login
let LoginInfoSchema = new mongoose.Schema({
    user: {
        type: String
    },
    pass: {
        type: String
    },
    email: {
        type: String
    },
    role: {
        type: String
    }
}, {
    collection: 'login_info'
});

module.exports = mongoose.model('Login_info', LoginInfoSchema);