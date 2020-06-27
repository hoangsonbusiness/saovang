const mongoose = require('../common/db');
const { Schema } = require('../common/db');

// Define collection and schema for Login
let TraineeCourseSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    name: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    subjects: [{
        // type: Schema.Types.ObjectId,
        // ref: 'Subject'
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }]
}, {
    collection: 'trainee_course'
});

module.exports = mongoose.model('TraineeCourse', TraineeCourseSchema);