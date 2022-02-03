import React from "react";
import "./Dashboard/Dashboard.scss";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div className="menu">
      <ul>
        <li>
          <Link to="/dashboard" className="link">
            <div className="menu-item">
              <i className="fas fa-home"></i>
              <p>Home</p>
            </div>
          </Link>
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
          <Link
            to={{ pathname: "myProfile", state: { props } }}
            className="link"
          >
            <div className="menu-item">
              <i className="fas fa-id-badge"></i>
              <p>Profile</p>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/setting" className="link">
            <div className="menu-item">
              <i className="fas fa-cog"></i>
              <p>Settings</p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
