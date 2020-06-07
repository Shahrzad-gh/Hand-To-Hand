import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";
function SignInLinks(props) {
  return (
    <div>
      <ul
        className="right nav mr-auto ml-5 hide-on-med-and-down right"
        id="nav-mobile"
      >
        <li>
          <a href="/">
            <i className="fas fa-home mr-2 fa-sm"></i>
            Home
          </a>
        </li>
        <li>
          <a href="/">
            <i className="fas fa-stream mr-2 fa-sm"></i>
            Timeline
          </a>
        </li>
        <li>
          <Link to="Message">
            <i className="fas fa-envelope mr-2 fa-sm"></i>
            Message
          </Link>
        </li>
        <li className="right">
          <a href="/">
            <i className="fas fa-exclamation mr-2 fa-sm"></i>
          </a>
        </li>
        <li className="right">
          <a onClick={props.signOut}>Sign Out</a>
        </li>
        <li className="right">
          <button className="btn btn-floating bg-floating" type="button">
            SG
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
