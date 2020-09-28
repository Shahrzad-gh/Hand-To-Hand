import React from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import NotificationsList from "../Notifications/NotificationsList";
import Suggestion from "../Dashboard/Suggestion";
import MyProfileLinks from "./MyProfileLinks";
import { Link } from "react-router-dom";
import "./MyProfile.scss"

export default function MyProfile(props) {
  console.log("MYPROF", props);
  const auth = props.location.props.state.auth;
  const notifications = props.location.props.state.notifications;
  const userSuggestions = props.location.props.state.suggestions;
  const user = props.location.props.state.profile;
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
      <div className="mt-3 mb-0 p-0">
        <div className="row col-md-12">
          <div className="col-md-3">
            <div className="col">
              <Profile photoURL={auth.photoURL} />
              <Suggestion
                suggestions={userSuggestions}
                notifications={notifications}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col p-0">
              <MyProfileLinks user={user} />
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <Link to="/setting/">
                <a href="/" className="btn text-light ">
                  Setting
                  <i class="fas fa-cog mr-2 text-light"></i>
                </a>
              </Link>
              <NotificationsList
                notifications={notifications}
                suggestions={userSuggestions}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
