var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user')

// connect mongoDB

mongoose.connect('mongodb://localhost/sample', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connected to database")
})


var app = express();
app.use(express.json());

var logger = require('morgan');
app.use(logger('dev'));



// routes

app.post('/user', (req, res) => {
    User.create(req.body, (err, user) => {
        res.json(user);
        console.log(err);
    })
})

app.get('/user', (req, res) => {
    User.find({}, (err, user) => {
        res.send({
            user: user
        });
    })
})


app.get('/user/:id', (req, res) => {
    var id = req.params.id;
    User.find({
        _id: id
    }, (err, user) => {
        console.log(err);
        res.json({
            _id: user
        });
    })
})

app.get('/user', (req, res) => {
    var id = req.param.id;
    User.findOne({
        _id: "5fdc8282f8adb00f78ef59a7"
    }, (err, user) => {
        console.log(err)
        res.json(user);
    })
})

app.get('/user/:id', (req, res) => {
    var id = req.params.id;
    User.findById(id, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.put('/user/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {
        new: true
    }, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.put('/user/:id', (req, res) => {
    var id = req.params.id;
    User.findOneAndUpdate({
        _id: id
    }, req.body, {
        new: true
    }, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.delete('/user/:id', (req, res) => {
    var id = req.params.id;
    User.findByIdAndDelete(id, (err, deletedUser) => {
        res.send(`${deletedUser.name} is deleted`);
    })
})

// error handler

// port

app.listen(3000, 'localhost', () => {
    console.log("connected to port 3000, localhost")
})
