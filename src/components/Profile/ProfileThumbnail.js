import React from "react";
import { Link } from "react-router-dom";
function ProfileThumbnail(props) {
  console.log("THUMB", props);
  return (
    <div className="profileThumbnail card bg-light">
      <div className="bg-half-indigo">
        <div className="container card-img text-center">
          <img
            width="80"
            height="80"
            src={props.auth.photoURL}
            alt=""
            className="profile-pic mt-5 rounded-circle border border-dark"
          />
        </div>
      </div>
      <div className="text-center card-content mt-3">
        <h6>
          {props.profile.firstName} &nbsp;
          {props.profile.lastName}
        </h6>
        <p>username</p>
        <hr />
        <h6>Following</h6>
        <p>10</p>
        <hr />
        <h6>Followers</h6>
        <p>1</p>
        <hr />
        <Link to={{ pathname: "MyProfile", props: { state: props } }}>
          View Profile
        </Link>
      </div>
    </div>
  );
}
export default ProfileThumbnail;
