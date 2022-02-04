import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import NotificationsList from "../Notifications/NotificationsList";
import Suggestion from "../Dashboard/Suggestion";
import MyProfileLinks from "./MyProfileLinks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import Menu from "../Menu";
export default function MyProfile() {
  const location = useLocation();
  const auth = location.state.props.auth;

  const notifications = location.state.props.notifications;
  const userSuggestions = location.state.props.suggestions;
  const user = location.state.props.profile;
  return (
    <div className="profile">
      <Navbar />
      <img
        width=""
        height=""
        className="min-vw-100 img-height-20 profile-header-pic"
        src="https://img.freepik.com/free-photo/starfish-with-sea-shells-sand_23-2147952981.jpg?size=626&ext=jpg"
        alt="Loading..."
      />
      <button className="btn profile-header-change-btn">Change Header</button>
      <div className="dashboard container-xl mt-3 p-0">
        <div className="row col-md-12">
          <div className="col-md-3">
            <div className="col">
              <Profile photoURL={auth.photoURL} />
              <Menu />
              <Suggestion
                suggestions={userSuggestions}
                notifications={notifications}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-0">
              <MyProfileLinks user={user} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <Link to="/setting/">
                Setting
                <i className="fas fa-cog mr-2 text-light"></i>
              </Link>
              {/* <NotificationsList
                notifications={notifications}
                suggestions={userSuggestions}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
