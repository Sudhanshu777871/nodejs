const mongoose = require('mongoose');

//  code for making the schema

const mySchema = new mongoose.Schema({
name:String,
email:String,
phoneNo:Number,
address:String
})

// code for exporting and making model

module.exports = mongoose.model('products',mySchema);