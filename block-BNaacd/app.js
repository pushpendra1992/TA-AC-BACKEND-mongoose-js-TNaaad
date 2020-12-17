//Requires

var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');


// initializing requires

var app = express();
mongoose.connect("mongodb://localhost/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connect to database")
})

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({
    extended: false
}));

// Routes


// Error Handlers


// Listning Port

app.listen(3000, 'localhost', () => {
    console.log('Welcome to localhost 3k');
})
