import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
function SignInLinks(props) {
  return (
    <div>
      <ul
        className="signInLinks right nav  mr-auto ml-5 hide-on-med-and-down right"
        id="nav-mobile"
      >
        <li>
          <a href="/">
            <i className="fas fa-home"> Home</i>
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-stream"> Timeline</i>
          </a>
        </li>
        <li>
          <Link to="Message">
            <i className="fas fa-envelope"> Message</i>
          </Link>
        </li>
        <li className="right">
          <a href="/">
            <i className="fas fa-exclamation"></i>
          </a>
        </li>
        <li className="right">
          <a href="/" onClick={props.signOut}>
            Sign Out
          </a>
        </li>
        <li className="right">
          <button className="btn btn-floating" type="button">
            {props.profile.initials}
          </button>
        </li>
      </ul>
    </div>
  );
}
const mapDispatchToPtops = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToPtops)(SignInLinks);
