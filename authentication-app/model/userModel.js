const mongoose = require('mongoose');

const { Schema, model } = mongoose

//  User Schema
const userSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        
    },
    password : {
        type : String,
        required : true
    },
    token : String
});


// User Model

exports.Users = model('User', userSchema);


