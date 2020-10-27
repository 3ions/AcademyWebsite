import React, { Component } from "react";
import axios from "axios";
import TextField from "../common/TextField";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((res) => {
      if (res.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (res.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="wrapper">
            <form className="form">
              <span className="form-title">Send Us A Message</span>
              <TextField
                forType="first-name"
                title="Tell us your name *"
                id="first-name"
                type="text"
                name="first-name"
                placeholder="First name"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
