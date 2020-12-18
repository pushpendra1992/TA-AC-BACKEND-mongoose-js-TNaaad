/*
Each user can have fields:-

name
email
age
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    email: String,
    age: Number
})

module.exports = mongoose.model('user', userSchema);
