const validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateStudentRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.studentID = !isEmpty(data.studentID) ? data.studentID : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.parentcontact = !isEmpty(data.parentcontact) ? data.parentcontact : "";
  data.altcontact = !isEmpty(data.altcontact) ? data.altcontact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.grade = !isEmpty(data.grade) ? data.grade : "";
  data.school = !isEmpty(data.school) ? data.school : "";

  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters";
  }

  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (validator.isEmpty(data.studentID)) {
    errors.studentID = "StudentID is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password is required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  if (validator.isEmpty(data.dob)) {
    errors.dob = "Date of Birth is required";
  }

  if (validator.isEmpty(data.parentcontact)) {
    errors.parentcontact = "Contact is required";
  }

  if (validator.isEmpty(data.altcontact)) {
    errors.altcontact = "Contact is required";
  }

  if (validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }

  if (validator.isEmpty(data.grade)) {
    errors.grade = "Class Grade is required";
  }

  if (validator.isEmpty(data.school)) {
    errors.school = "School is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
