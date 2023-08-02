const mongoose = require('mongoose');

const { Schema, model } = mongoose

//  User Schema
const userSchema = new Schema({
    name : {
        type : String, 
        required : true,
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type : String,
        required : true
    }
});


// User Model

exports.Users = model('User', userSchema);


