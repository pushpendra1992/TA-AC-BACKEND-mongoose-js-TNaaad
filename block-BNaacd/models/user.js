var mongoose = require('mongoose')
var Schema = mongoose.schema;

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number
})


var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    age: {
        type: String,
        default: 0
    }
})
