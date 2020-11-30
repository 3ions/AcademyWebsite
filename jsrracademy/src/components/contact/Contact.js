import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { sendContact } from "../../actions/contactActions";
import TextField from "../common/TextField";
import TextAreaField from "../common/TextAreaField";
import { Button } from "../common/Button";
import "./Contact.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();

    const userData = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };

    this.props.sendContact(userData);
  }

  render() {
    const { errors } = this.props;

    const { isSentContact } = this.props.form;

    return (
      <>
        <div className="title bg-color" id="contact">
          <h1>Contact Us</h1>
        </div>
        <div className="container">
          <div className="wrapper">
            <form
              className="form"
              id="contact-form"
              onSubmit={this.onSubmit}
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
                error={errors.name}
                value={isSentContact ? "" : this.state.name}
                onChange={this.onChange}
              />
              <TextField
                forType="email"
                title="Enter your email *"
                id="email"
                type="text"
                name="email"
                placeholder="Eg. example@email.com"
                error={errors.email}
                value={isSentContact ? "" : this.state.email}
                onChange={this.onChange}
              />
              <TextField
                forType="phone"
                title="Enter your phone number *"
                id="phone"
                type="text"
                name="phone"
                placeholder="Eg. +919876543210"
                error={errors.phone}
                value={isSentContact ? "" : this.state.phone}
                onChange={this.onChange}
              />
              <TextAreaField
                forType="message"
                title="Message *"
                id="message"
                name="message"
                placeholder="Write us a message"
                error={errors.message}
                value={isSentContact ? "" : this.state.message}
                onChange={this.onChange}
              />

              <div className="form-btn">
                <Button dark="true" disable={isSentContact}>
                  {!isSentContact ? "Send Message" : "Message Sent!"}
                </Button>
              </div>
              {errors.status && (
                <div className="invalid-feedback">{errors.status}</div>
              )}
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

                  <span className="txt">080-2222 5590</span>
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

Contact.propTypes = {
  sendContact: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  form: state.form,
  errors: state.errors,
});

export default connect(mapStateToProps, { sendContact })(Contact);
