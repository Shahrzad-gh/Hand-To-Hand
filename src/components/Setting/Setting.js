import React, { Component } from "react";
import TabList from "../TabList";
// import AccountSetting from "./AccountSetting";
// import ChangePassword from "./ChangePassword";
// import Security from "./Security";
// import Privacy from "./Privacy";
import Navbar from "../Navbar/Navbar";
export default class Setting extends Component {
  render() {
    return (
      <div className="setting">
        <Navbar />
        <div className="container col-md-12">
          <div className="row">
            <div className="card col-md-3 p-0" id="card-setting">
              <div className="SettingTabContent container-md m-0 profile-link link-content up">
                <TabList className="setting">
                  <div label="Account Setting"></div>
                  <div label="Change Password"></div>
                  <div label="Privacy"></div>
                  <div label="Security"></div>
                </TabList>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="tab-content"></div>
          </div>
        </div>
      </div>
    );
  }
}
