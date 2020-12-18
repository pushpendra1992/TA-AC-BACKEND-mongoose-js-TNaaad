// require

var express = require('express');
var app = express();
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/assignment_01', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connected to database")
})

// middlewares

// routes

// error handler

// port

app.listen(3000, 'localhost', () => {
    console.log("welcome on port 3k");
})
