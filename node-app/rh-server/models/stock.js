const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticker: {type: String, unique: true},
    prices: [Number],
})


//create new model
module.exports = mongoose.model('Post', schema);