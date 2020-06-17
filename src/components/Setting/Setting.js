import React, { Component } from "react";
import TabList from "../TabList";
import AccountSetting from "./AccountSetting";
import ChangePassword from "./ChangePassword";
import Security from "./Security";
import Privacy from "./Privacy";
export default class Setting extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="card col-md-3 p-0" id="card-setting">
            <div className="container-md p-0 ">
              <div className="SettingTabContent container-md m-0 profile-link link-content up">
                <TabList>
                  <div label="Account Setting" className="tab-content">
                    <div className="card col-md-8">
                      <AccountSetting />
                    </div>
                  </div>
                  <div label="Change Password" className="tab-content">
                    <ChangePassword />
                  </div>
                  <div label="Security" className="tab-content">
                    <Security />
                  </div>
                  <div label="Privacy" className="tab-content">
                    <Privacy />
                  </div>
                </TabList>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
