const validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.enquirydate = !isEmpty(data.enquirydate) ? data.enquirydate : "";
  data.admissiondate = !isEmpty(data.admissiondate) ? data.admissiondate : "";

  if (validator.isEmpty(data.enquirydate)) {
    errors.enquirydate = "Enquiry date is required";
  }

  if (validator.isEmpty(data.admissiondate)) {
    errors.admissiondate = "Enquiry date is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
