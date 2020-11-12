const exp = require("express");
const router = exp.Router();
var nodemailer = require("nodemailer");
const creds = require("../config/keys");

// Load input validation
const validateContactForm = require("../validation/contact/contactForm");

var transport = {
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: creds.contact_user,
    pass: creds.contact_password,
  },
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error) => {
  if (error) {
    console.log(error);
  }
});

router.post("/send", (req, res, next) => {
  const { errors, isValid } = validateContactForm(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var message = req.body.message;
  var content = `Received new inquiry from website jsrracademy.com \nThe information from the user are: \n\nName of the Recipient: ${name} \nEmail-ID given: ${email} \nPhone Number: ${phone} \nMessage given: ${message} `;

  var mail = {
    from: name,
    to: "jsrracademy@gmail.com",
    subject: "New Inquiry from Contact Form",
    text: content,
  };

  transporter.sendMail(mail, (err) => {
    if (err) {
      errors.status = "Message not Sent!";
      return res.status(400).json(errors);
    }
  });

  transporter.sendMail(
    {
      from: "jsrracademy@gmail.com",
      to: email,
      subject: "Submission was successful - JSRR Team",
      text: `Thank you for contacting us! \nWe will revert back to you ASAP or you can give us a call on the phone number provided.\n\nForm submission details\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    },
    function (err, info) {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.json(info.response);
      }
    }
  );
});

module.exports = router;
