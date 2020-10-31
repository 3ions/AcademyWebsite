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
  parentContact: {
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
  board: {
    type: String,
    required: true,
  },
});

module.exports = StudentUser = mongoose.model("students", StudentUserSchema);
