/*
create a user schema with following fields and type 1.name -> string 2.email -> string 3.age -> number
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// update user schema to make email lowercase and default age to be 0.

/*
 Update user schema

contains password field with minimum 5 characters
add createdAt field of type date and default it to current date.
*/

var userSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true
    },
    age: {
        type: Number,
        default: 0
    },
    password: {
        type: String,
        minlength: 5
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    // Add favourites in user schema of type array of strings.

    favourites: [String],

    // Add timestamps to user and address schema.

}, {
    timestamps: true
});

//create model for users schema created above and export it.

module.exports = mongoose.model('user', 'userSchema');
