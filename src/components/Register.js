import React, { Component } from "react";

export default class Register extends Component {
  render() {
    return (
      <div className="register d-flex align-items-center flex-column justify-content-center ">
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
                placeholder="Email"
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
            <div className="form-group">
              <a className="btn btn-info btn-md btn-block" href="/">
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
