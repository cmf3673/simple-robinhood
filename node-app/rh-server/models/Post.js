const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ticker: String,
    price: Number,
})

//create new model
module.exports = mongoose.model('Post', schema);