const validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateContactForm(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (validator.isEmpty(data.name)) {
    errors.name = "Please provide name";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Please provide Email ID";
  }

  if (
    !validator.matches(
      data.phone,
      "^(?:(?:\\+|0{0,2})91(\\s*[\\-]\\s*)?|[0]?)?[6-9]\\d{9}$"
    )
  ) {
    errors.phone = "Phone number is invalid";
  }

  if (validator.isEmpty(data.phone)) {
    errors.phone = "Please provide phone number";
  }

  if (validator.isEmpty(data.message)) {
    errors.message = "Please provide a message";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
