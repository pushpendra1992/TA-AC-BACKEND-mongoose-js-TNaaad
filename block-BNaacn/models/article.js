/*Create an article Schema with fields

title -> String
description -> String
tags -> String
createdAt -> Date, defaults to current date
likes -> Number, defaults to zero
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    desctiption: String,
    tags: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }

})

//create model for article schema created above and export it.

module.exports = mongoose.model('article', 'articleSchema')
