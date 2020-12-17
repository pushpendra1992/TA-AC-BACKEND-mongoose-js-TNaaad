var mongoose = require('mongoose')
var Schema = mongoose.schema;

var articles = new Schema({
    title : String,
    price : Number,
    description : String
})
