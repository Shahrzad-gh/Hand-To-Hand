import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
import "../../App.css";
function SignInLinks(props) {
  return (
    <div className="signin-links">
      <input
        id="search"
        // onChange={this.handleChange}
        className="form-control form-control-md"
        placeholder="Search"
        type="text"
      />
      <button className="btn btn-floating bg-floating right" type="button">
        {props.profile.initials}
      </button>
      {/* <ul
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
          <button className="btn btn-floating bg-floating" type="button">
            {props.profile.initials}
          </button>
        </li>
      </ul> */}
    </div>
  );
}
const mapDispatchToPtops = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(null, mapDispatchToPtops)(SignInLinks);
