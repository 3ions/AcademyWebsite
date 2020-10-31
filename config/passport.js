const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const StaffUser = mongoose.model("staffs");
const StudentUser = mongoose.model("students");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      StudentUser.findById(jwt_payload.id)
        .then((student) => {
          if (student) {
            return done(null, student);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );

  passport.use(
    new JWTStrategy(opts, (jwt_payload, done) => {
      StaffUser.findById(jwt_payload.id)
        .then((staff) => {
          if (staff) {
            return done(null, staff);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
