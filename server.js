var express = require("express");
var router = express.Router();
var cors = require("cors");
var nodemailer = require("nodemailer");
const creds = require("./config/config");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${message} `;

  var mail = {
    from: name,
    to: "mlmtt1998@gmail.com",
    subject: "New Message from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });

  transporter.sendMail(
    {
      from: "jsrracademy@gmail.com",
      to: email,
      subject: "Submission was successful",
      text: `Thank you for contacting us!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    },
    function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: " + info.response);
      }
    }
  );
});

app.use("/", router);

app.listen(port, () => console.log(`Server running on port ${port}`));
