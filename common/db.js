const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// require('dotenv').config({ path: __dirname + '/.env' });
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') } else { console.log('Error in DB connection : ' + err) }
});

//require('./product');

module.exports = mongoose;