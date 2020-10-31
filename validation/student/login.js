const validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateStudentLoginInput(data) {
  let errors = {};

  data.studentID = !isEmpty(data.studentID) ? data.studentID : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (validator.isEmpty(data.studentID)) {
    errors.studentID = "StudentID is required";
  }

  if (validator.isEmpty(data.password)) {
    errors.password = "Password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
