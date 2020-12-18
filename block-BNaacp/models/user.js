var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

    name: String,
    email: String,
    sports: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('user', userSchema);
