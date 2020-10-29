import React, { Component } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";
import TextField from "../common/TextField";
import TextAreaField from "../common/TextAreaField";
import { Button } from "../common/Button";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPhoneChange(event) {
    this.setState({ phone: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:5000/send",
      data: this.state,
    }).then((res) => {
      if (res.data.status === "success") {
        this.resetForm();
      } else if (res.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", phone: "", message: "" });
  }

  render() {
    return (
      <>
        <div className="title bg-color">
          <h1>Contact Us</h1>
        </div>
        <div className="container">
          <div className="wrapper">
            <form
              className="form"
              id="contact-form"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <span className="form-title">Send Us A Message</span>
              <TextField
                forType="full-name"
                title="Tell us your name *"
                id="full-name"
                type="text"
                name="full-name"
                placeholder="Full name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
              <TextField
                forType="email"
                title="Enter your email *"
                id="email"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
              <TextField
                forType="phone"
                title="Enter your phone number *"
                id="phone"
                type="text"
                name="phone"
                placeholder="Eg. +919876543210"
                value={this.state.phone}
                onChange={this.onPhoneChange.bind(this)}
              />
              <TextAreaField
                forType="message"
                title="Message *"
                id="message"
                name="message"
                placeholder="Write us a message"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />

              <div className="form-btn">
                <Button dark="true">Send Message</Button>
              </div>
            </form>
            <div className="photo">
              <div className="text-wrap">
                <div className="text-wrap-col">
                  <span className="text-head">
                    <FaMapMarkerAlt />
                    <span className="pad">Address</span>
                  </span>

                  <span className="txt">
                    No. 19/1, 2nd Floor, 8th Main, 13th Cross, Wilson Garden,
                    Bangalore - 560027
                  </span>
                </div>
              </div>
              <div className="text-wrap">
                <div className="text-wrap-col">
                  <span className="text-head">
                    <FaPhoneAlt />
                    <span className="pad">Call Us</span>
                  </span>

                  <span className="txt">080-22225590</span>
                </div>
              </div>
              <div className="text-wrap">
                <div className="text-wrap-col">
                  <span className="text-head">
                    <FaEnvelope />
                    <span className="pad">General Support</span>
                  </span>

                  <span className="txt">jsrracademy@gmail.com</span>
                </div>
              </div>
              <div className="text-wrap">
                <div className="text-wrap-col">
                  <span className="text-head">
                    <FaWhatsapp />
                    <span className="pad">WhatsApp</span>
                  </span>

                  <span className="txt">9206447090</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
