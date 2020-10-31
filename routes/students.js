const exp = require("express");
const router = exp.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
const gravatar = require("gravatar");

// Load Input Validation
const validateStudentRegisterInput = require("../validation/student/register");
const validateStudentLoginInput = require("../validation/student/login");

//Load User model
const StudentUser = require("../models/StudentUser");

// @route GET student/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "User works!" }));

// @route POST students/register
// @desc Registers new student
// @access Public
router.post("/register", (req, res) => {
  const { errors, isValid } = validateStudentRegisterInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  StudentUser.findOne({ studentID: req.body.studentID }).then((student) => {
    if (student) {
      errors.studentID = "StudentID already exists";
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.studentID, {
        s: "200", // Size
        r: "pg", // Rating
        d: "mm", // Default
      });

      const newStudent = new StudentUser({
        name: req.body.name,
        studentID: req.body.studentID,
        avatar,
        password: req.body.password,
        dob: req.body.dob,
        email: req.body.email,
        parentContact: req.body.parentContact,
        address: req.body.address,
        grade: req.body.grade,
        school: req.body.school,
        board: req.body.board,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newStudent.password, salt, (err, hash) => {
          if (err) throw err;
          newStudent.password = hash;
          newStudent
            .save()
            .then((student) => res.json(student))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route GET student/login
// @desc Login for student | Send token
// @access Public
router.post("/login", (req, res) => {
  const { errors, isValid } = validateStudentLoginInput(req.body);

  //Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const studentID = req.body.studentID;
  const password = req.body.password;

  //Find user studentID
  StudentUser.findOne({ studentID }).then((student) => {
    //Check for student
    if (!student) {
      errors.studentID = "Student not found";
      return res.status(404).json(errors);
    }

    //Check Password
    bcrypt.compare(password, student.password).then((isMatch) => {
      if (isMatch) {
        // student Matched

        const payload = {
          id: student.id,
          name: student.name,
          avatar: student.avatar,
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

// @route GET student/current
// @desc Return current student
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
