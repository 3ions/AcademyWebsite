const exp = require("express");
const router = exp.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//Load User model
const StaffUser = require("../models/StaffUser");

module.exports = router;
