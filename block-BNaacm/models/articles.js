var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var articleSchemaSchema = new Schema({
    title: String,
    description: String,
})

module.exports = mongoose.model('article', 'articleSchema');
