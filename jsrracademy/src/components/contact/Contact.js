import React, { Component } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import TextField from "../common/TextField";
import TextAreaField from "../common/TextAreaField";
import { Button } from "../common/Button";
import axios from "axios";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      msg: "Send Message",
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const userData = this.state;

    axios.post("/send", userData).then((res) => {
      if (res.status === "fail") {
        alert("Message failed to send.");
      }
      this.setState({
        name: "",
        email: "",
        phone: "",
        message: "",
        msg: "Message Sent!",
      });
    });
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
              onSubmit={this.handleSubmit}
              method="POST"
            >
              <span className="form-title">Send Us A Message</span>
              <TextField
                forType="name"
                title="Tell us your name *"
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onChange}
              />
              <TextField
                forType="email"
                title="Enter your email *"
                id="email"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                value={this.state.email}
                onChange={this.onChange}
              />
              <TextField
                forType="phone"
                title="Enter your phone number *"
                id="phone"
                type="text"
                name="phone"
                placeholder="Eg. +919876543210"
                value={this.state.phone}
                onChange={this.onChange}
              />
              <TextAreaField
                forType="message"
                title="Message *"
                id="message"
                name="message"
                placeholder="Write us a message"
                value={this.state.message}
                onChange={this.onChange}
              />

              <div className="form-btn">
                <Button dark="true">{this.state.msg}</Button>
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
