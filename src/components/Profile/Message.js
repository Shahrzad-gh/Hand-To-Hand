import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import MessageConversation from "./MessageConversation";
import MessageContact from "./MessageContact";

export default class Message extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="Message-page mt-3 p-0 bg-light">
          <div className="container">
            <div className="message-section">
              <div className="row">
                <div className="col-lg-4 col-md-12 p-0">
                  <MessageContact />
                </div>
                <div className="col-lg-8 col-md-12 pr-0 pl-0">
                  <MessageConversation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
