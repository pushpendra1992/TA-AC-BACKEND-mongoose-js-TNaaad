var express = require('express');
var app = express();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connected to database");
});

var logger = require('morgan');
app.use(logger('dev'));





app.listen(3000, 'localhost', () => {
    console.log("connected to port 3k");
});
