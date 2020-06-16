import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Profile from "../Profile/Profile";
import NotificationsList from "../Notifications/NotificationsList";
import Suggestion from "../Dashboard/Suggestion";
import UserProfileLink from "./UserProfileLink";
export default function UserProfile(props) {
  const notifications = props.location.props.notifications;
  const user = props.location.props.user;
  const suggestions = props.location.props.suggestions;

  return (
    <div>
      <Navbar />
      <img
        width=""
        height=""
        className="min-vw-100 img-height-20 profile-header-pic"
        src="https://img.freepik.com/free-photo/starfish-with-sea-shells-sand_23-2147952981.jpg?size=626&ext=jpg"
        alt="Loading..."
      />
      <div className="dashboard container-xl mt-3 p-0">
        <div className="row col-md-12">
          <div className="col-md-3">
            <div className="col">
              <Profile />
              <Suggestion
                suggestions={suggestions}
                notifications={notifications}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="col p-0">
              <UserProfileLink user={user} />
            </div>
          </div>
          <div className="col-md-3">
            <NotificationsList notifications={notifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
