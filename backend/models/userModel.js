const mongoose = require('mongoose');
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  role:{
    type: String,
  },
  status: {
    type: String,
  },
  deviceToken:{
    type: String
  },
  // email:{
  //   type: String,
  //   required: true,
  //   validate: validator.isEmail,
  //   index: true
  // },
  deviceId:{
    type: String,
  },
  androidVersion: {
    type: String
  },
  deviceBrand: {
    type: String
  },
  subscription: {
    type: String
  },
  coin : {
    type: Number
  },

}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;