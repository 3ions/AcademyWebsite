import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./assignment.css";

class Assignment extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isStudentAuth) {
      this.setState({ user: this.props.auth.student });
    } else if (this.props.auth.isStaffAuth) {
      this.setState({ user: this.props.auth.staff });
    }
  }

  render() {
    return (
      <div className="assignment-container">
        <h1>Assignment</h1>
        <div>Assignments will be shown here.</div>
      </div>
    );
  }
}

Assignment.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Assignment);
