import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./dashboard.css";

class Dashboard extends Component {
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
      <div className="dash-container">
        <h1>Dashboard</h1>
        <div>Welcome {this.state.user.name}</div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
