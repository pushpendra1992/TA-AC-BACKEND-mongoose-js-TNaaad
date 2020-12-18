/*
Each article can have fields :-

title
description
tags
likes
author -> ID of user
comments
timestamps()
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: Number,
    author: Schema.Types.ObjectId,
    comments: Schema.Types.ObjectId,
}, {
    timestamps: true
})

module.exports = mongoose.model('article', articleSchema);