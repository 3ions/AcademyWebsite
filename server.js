var express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const contact = require("./routes/index");
const student = require("./routes/students");
const staff = require("./routes/staffs");

const app = express();
const port = process.env.PORT || 5000;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
const db_con = require("./config/keys").mongoURI;

//Connecting to DB
mongoose
  .connect(db_con)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use routes
app.use("/", contact);
app.use("/students", student);
app.use("/staffs", staff);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("jsrracademy/build"));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
