import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../store//actions/authActions";
import { Redirect } from "react-router-dom";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/dashboard" auth={auth} />;
    return (
      <div className="login d-flex align-items-center flex-column justify-content-center">
        <div className="container-md col-md-12 bg-light">
          <form className="mt-3" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                id="email"
                onChange={this.handleChange}
                className="form-control form-control-md"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
                id="password"
                onChange={this.handleChange}
                className="form-control form-control-md"
                placeholder="Password"
                type="text"
              />
            </div>
            <div className="form-group d-flex justify-content-between d-inline-block">
              <input type="checkbox" />
              <span>Remember me</span>
            </div>
            <div className="form-group d-flex justify-content-between d-inline-block ">
              <a className="d-inline-block" href="/">
                Forget password?
              </a>
            </div>
            <div className="form-group">
              <button value="submit" className="btn btn-info btn-md btn-block">
                Login
              </button>
              {authError ? (
                <p className="text-danger text-center">Login Faild</p>
              ) : null}
              <Link to="Register">Create Account</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { signIn: (cred) => dispatch(signIn(cred)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
