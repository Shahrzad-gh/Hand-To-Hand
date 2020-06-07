import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../store//actions/authActions";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
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
              <a className="d-inline-block" href="#">
                Forget password?
              </a>
            </div>
            <div className="form-group">
              <button
                value="submit"
                className="btn btn-info btn-md btn-block"
              />
              {authError ? (
                <p className="text-danger text-center">Login Faild</p>
              ) : null}
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return { signIn: (cred) => dispatch(signIn(cred)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
