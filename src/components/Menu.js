import React from "react";
import "./Dashboard/Dashboard.scss";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <ul>
        <Link to="/dashboard" className="link">
          <li>
            <div className="menu-item">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </div>
          </li>
        </Link>
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
        <Link to="/setting" className="link">
          <li>
            <div className="menu-item">
              <i className="fas fa-cog"></i>
              <p>Settings</p>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Menu;
