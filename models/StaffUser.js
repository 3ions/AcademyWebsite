const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Schema
const StaffUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  staffID: {
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

module.exports = StaffUser = mongoose.model("staffs", StaffUserSchema);
