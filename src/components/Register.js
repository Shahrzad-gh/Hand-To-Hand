import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../store/actions/authActions";

class Register extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/Dashboard" />;
    return (
      <div className="register d-flex align-items-center flex-column justify-content-center ">
        <div className="container-md col-md-12 bg-light">
          <form className="mt-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                onChange={this.handleChange}
                id="firstName"
                className="form-control form-control-md"
                placeholder="firstName"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                onChange={this.handleChange}
                id="lastName"
                className="form-control form-control-md"
                placeholder="lastName"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                onChange={this.handleChange}
                id="email"
                className="form-control form-control-md"
                placeholder="Email"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                onChange={this.handleChange}
                id="password"
                className="form-control form-control-md"
                placeholder="Password"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                className="form-control form-control-md"
                placeholder="Repeat password"
                type="text"
              />
            </div>
            <div className="form-group d-flex justify-content-between">
              <input type="checkbox" />
              <span>Accept agrement</span>
            </div>
            <button className="btn btn-info btn-md btn-block">
              Create account
            </button>
            {authError ? (
              <p className="text-danger text-center">{authError}</p>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.firebase.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Register);
