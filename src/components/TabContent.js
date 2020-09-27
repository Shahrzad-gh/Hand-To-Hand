// TabContent.js

import React, { Component } from "react";
import TabList from "./TabList";
import Login from "./Login";
import Register from "./Register";
import "../App.css";

export default class TabContent extends Component {
  render() {
    return (
      //<div className="tabContent container up">
      <div className="tabContent container up">
      {/* <TabList> */}
          <div label="Signin">
          {/* <div label="Signin" className="tab-content"> */}
            <p className="center">Login</p>
            <Login />
          </div>
          <div label="Signup">
          {/* <div label="Signup" className="tab-content"> */}
            {/* <Register /> */}
          </div>
        {/* </-TabList> */}
      </div>
    );
  }
}
