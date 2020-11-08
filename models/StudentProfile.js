const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentProfileSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: "students",
  },
  enquirydate: {
    type: Date,
    required: true,
  },
  admissiondate: {
    type: Date,
    required: true,
  },
  board: {
    sslc: {
      type: Boolean,
      default: false,
    },
    icse: {
      type: Boolean,
      default: false,
    },
    cbse: {
      type: Boolean,
      default: false,
    },
  },
  tuitionplan: {
    annual: {
      type: Boolean,
      default: false,
    },
    monthly: {
      type: Boolean,
      default: false,
    },
  },
  subjects: {
    english: {
      type: Boolean,
      default: false,
    },
    kannada: {
      type: Boolean,
      default: false,
    },
    hindi: {
      type: Boolean,
      default: false,
    },
    maths: {
      type: Boolean,
      default: false,
    },
    science: {
      type: Boolean,
      default: false,
    },
    social: {
      type: Boolean,
      default: false,
    },
    physics: {
      type: Boolean,
      default: false,
    },
    chemistry: {
      type: Boolean,
      default: false,
    },
    biology: {
      type: Boolean,
      default: false,
    },
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = StudentProfile = mongoose.model(
  "studentProfile",
  StudentProfileSchema
);
