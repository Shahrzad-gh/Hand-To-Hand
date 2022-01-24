import React, { Component } from "react";
import TabContent from "./TabContent";
import Navbar from "./Navbar/Navbar";
import { motion } from "framer-motion";

export default class Landing extends Component {
  render() {
    return (
      <div className="Landing col-lg-12 d-flex align-items-center flex-column justify-content-center min-vh-100 ">
        {/* initial={{ x: "-100vw" }}
          animate={{ x: "0" }} */}

        <div className="container col-md-8 bg-light lighten-5">
          <div className="row">
            <div className="col-md-6 p-5 ">
              <h4>Welcome</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur a dipisicing elit.
                Optio, ipsum.
              </p>
              <div className="center">
                <img
                  src="https://img.freepik.com/free-photo/woman-using-smartphone-social-media-conecpt_53876-40967.jpg?size=338&ext=jpg"
                  width="200"
                  height="200"
                  alt="icon"
                />
              </div>
            </div>
            <div className="col-md-6 p-3">
              <TabContent />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
