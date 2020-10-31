const exp = require("express");
const router = exp.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

//Load User model
const StudentUser = require("../models/StudentUser");

// @route GET api/user/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "User works!" }));

module.exports = router;
