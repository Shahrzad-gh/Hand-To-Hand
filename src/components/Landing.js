import React, { Component } from "react";
import TabContent from "./TabContent";
import Navbar from "./Navbar/Navbar";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Landing col-lg-12 d-flex align-items-center flex-column justify-content-center min-vh-100 ">
          <div className="container col-md-8 bg-light">
            <div className="row">
              <div className="col-md-6 p-5">
                <h4>Landing</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur a dipisicing elit.
                  Optio, ipsum.
                </p>
              </div>
              <div className="col-md-6 p-3">
                <TabContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
