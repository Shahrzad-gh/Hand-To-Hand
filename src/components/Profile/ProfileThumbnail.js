import React from "react";
import { Link } from "react-router-dom";
import "../Dashboard/Dashboard.scss";

function ProfileThumbnail(props) {
  let DefaultPhoto =
    "https://image.freepik.com/free-photo/playful-hot-african-american-with-afro-hairstyle-pulling-hands-towards-make-selfie-winking-joyfully-smiling-broadly-making-new-profile-pic-social-network_176420-23120.jpg";
  return (
    <div className="profileThumbnail card ">
      <div>
        <div className="card-img item">
          <img
            width="80"
            height="80"
            src={props.auth.photoURL ? props.auth.photoURL : DefaultPhoto}
            alt=""
            className="profile-pic "
          />
        </div>
      </div>
      <div className="item text-center">
        <Link to={{ pathname: "myProfile", state: { props } }}>
          <h6>
            {props.profile.firstName} &nbsp;
            {props.profile.lastName}
          </h6>{" "}
        </Link>
        <p>@sherry</p>
      </div>
    </div>
  );
}
export default ProfileThumbnail;
