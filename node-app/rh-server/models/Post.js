const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticker: String,
    prices: [Number],
})


//create new model
module.exports = mongoose.model('Post', schema);