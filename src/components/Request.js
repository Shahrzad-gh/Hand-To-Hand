import React from "react";
import "./Dashboard/Dashboard.scss";

function Request() {
  return (
    <div className="request">
      <div className="request-item">
        <div>
          <img
            src="https://img.freepik.com/free-photo/image-magnetic-handsome-helpless-young-man-shrugging-with-shoulders-looking-directly-raising-arms_176532-10250.jpg?size=338&ext=jpg&ga=GA1.2.94874757.1637489236"
            alt="pic"
          />
        </div>
        <div>
          <p>
            <b>Sam Choi</b> wants to add you as a friend.
          </p>
        </div>
      </div>
      <div className="request-item-btn">
        <button className="accept">Accept</button>
        <button className="decline">Decline</button>
      </div>
    </div>
  );
}

export default Request;
