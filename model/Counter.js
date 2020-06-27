const mongoose = require('../common/db')

// Define collection and schema for Annoutcement
let CounterSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    seq: {
        type: Number
    }
}, {
    collection: 'counter'
});

module.exports = Counter = mongoose.model('Counter', CounterSchema);