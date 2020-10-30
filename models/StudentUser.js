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
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentUser = mongoose.model("students", StudentUserSchema);
