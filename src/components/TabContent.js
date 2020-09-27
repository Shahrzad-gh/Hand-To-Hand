// TabContent.js

import React, { Component } from "react";
import TabList from "./TabList";
import Login from "./Login";
import Register from "./Register";
import "../App.css";

export default class TabContent extends Component {
  render() {
    return (
      <div className="tabContent container up">
<<<<<<< Updated upstream
        <TabList>
          <div label="Signin" className="tab-content">
=======
      <TabList>
          <div label="Signin" className="tab-content">
            <p className="center">Login</p>
>>>>>>> Stashed changes
            <Login />
          </div>
          <div label="Signup" className="tab-content">
            <Register />
          </div>
        </TabList>
      </div>
    );
  }
}
