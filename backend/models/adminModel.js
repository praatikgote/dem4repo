const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const adminSchema = new mongoose.Schema({
    role: {
        type: String,
        default: "user"
    },
    email:{
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid email"]
    },
    password:{
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password cannot below 8 characters"],
        select: false
    }
}, {timestamps: true});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;