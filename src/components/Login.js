import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Login extends Component {
  render() {
    return (
      <div className="login d-flex align-items-center flex-column justify-content-center">
        <div className="container-md col-md-12 bg-light">
          <form className="mt-3">
            <div className="form-group">
              <input
                className="form-control form-control-md"
                placeholder="Username"
                type="text"
              />
            </div>
            <div className="form-group">
              <input
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
              <Link className="btn btn-info btn-md btn-block" to="/Dashboard">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
