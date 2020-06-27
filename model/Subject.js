const mongoose = require('../common/db')

// Define collection and schema for Login
let SubjectSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    collection: 'subject'
});

module.exports = mongoose.model('Subject', SubjectSchema);