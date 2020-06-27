const mongoose = require('../common/db');

// Define collection and schema for Login
let ScoresSchema = new mongoose.Schema({
    _id: {
        type: Number
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    score: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    traineeCourse: {
        type: Schema.Types.ObjectId,
        ref: 'TraineeCourse'
    }
}, {
    collection: 'scores'
});

module.exports = mongoose.model('Scores', ScoresSchema);