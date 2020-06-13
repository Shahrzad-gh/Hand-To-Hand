import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
  return (
    <div>
      <nav className="nav-extended grey darken-3 h-25">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo font-family-DancingScript">
              Hand To Hand
              <i className="fas fa-praying-hands"></i>
            </Link>
            {/* <a href="#" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a> */}
            {links}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(Navbar);
