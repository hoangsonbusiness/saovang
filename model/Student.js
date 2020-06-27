const mongoose = require('../common/db');

// Define collection and schema for Login
let StudentSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    subjects: {
        type: Schema.Types.ObjectId,
        ref: 'TraineeCourse'
    }
}, {
    collection: 'student'
});

module.exports = mongoose.model('Student', StudentSchema);