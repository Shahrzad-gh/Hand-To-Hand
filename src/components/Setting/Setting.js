import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Setting extends Component {
  render() {
    return (
      <div className="card col-md-12 p-0" id="card-setting">
        <div className="container-md p-0 ">
          <a className="btn right text-light ">
            Setting
            <i class="fas fa-cog mr-2 text-light"></i>
          </a>
        </div>
      </div>
    );
  }
}
