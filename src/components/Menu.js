import React from "react";
import "./Dashboard/Dashboard.scss";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <li>
          <div className="menu-item">
            <i className="fas fa-home"></i>
            <p>Home</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <i className="fas fa-user-friends"></i>
            <p>People</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <i className="fas fa-image"></i>
            <p>Photos</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <i className="fas fa-newspaper"></i>
            <p>New Feed</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <i className="fas fa-id-badge"></i>
            <p>Profile</p>
          </div>
        </li>
        <li>
          <div className="menu-item">
            <i className="fas fa-cog"></i>
            <p>Settings</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
