const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    price: Number,
})

//create new model
module.exports = mongoose.model('Post', schema);