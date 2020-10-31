const exp = require("express");
const router = exp.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const gravatar = require("gravatar");

// Load Input Validation
const validateStaffRegisterInput = require("../validation/staff/register");
const validateStaffLoginInput = require("../validation/staff/login");

//Load User model
const StaffUser = require("../models/StaffUser");

// @route GET staffs/register
// @desc Tests users route
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateStaffRegisterInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  StaffUser.findOne({ email: req.body.email }).then((staff) => {
    if (staff) {
      errors.email = "Email already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm", // Default
      });

      const newUser = new StaffUser({
        name: req.body.name,
        staffID: req.body.staffID,
        email: req.body.email,
        avatar,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route GET staffs/login
// @desc Login for user | Send token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateStaffLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  //Find user email
  StaffUser.findOne({ email }).then((staff) => {
    //Check for user
    if (!staff) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //Check Password
    bcrypt.compare(password, staff.password).then((isMatch) => {
      if (isMatch) {
        // User Matched

        const payload = {
          id: staff.id,
          name: staff.name,
          avatar: staff.avatar,
        }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          }
        );
      } else {
        errors.password = "Password Incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @route GET staffs/current
// @desc Return current user
// @access Private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email,
    });
  }
);

module.exports = router;
