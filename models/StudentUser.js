const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Schema
const StudentUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  parentcontact: {
    type: String,
    required: true,
  },
  altcontact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  grade: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentUser = mongoose.model("students", StudentUserSchema);
