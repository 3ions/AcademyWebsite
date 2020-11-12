const validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateStaffInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.address = !isEmpty(data.address) ? data.address : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 to 40 characters";
  }

  if (validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required";
  }

  if (validator.isEmpty(data.status)) {
    errors.status = "Status is required";
  }

  if (validator.isEmpty(data.skills)) {
    errors.skills = "Skills is required";
  }

  if (validator.isEmpty(data.contact)) {
    errors.contact = "Contact is required";
  }

  if (validator.isEmpty(data.address)) {
    errors.address = "Address is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
