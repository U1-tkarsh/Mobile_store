const mongoose = require('mongoose');
const validator = require("validator");
const { Schema } = mongoose;

const userModel = new Schema(
    {
        username:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
            index:{unique: true},
            validate: validator.isEmail
        },
        password:{
            type: String,
            required: true,
        },
        userRole:{
            type: String,
            enum: ['student', 'admin'],
            default: 'student'
        },
        mobileNumber: {
            type: Number,
            required: true,
        },
        className: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', userModel);

module.exports = User;