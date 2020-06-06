import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import ProfileThumbnail from "../Profile/ProfileThumbnail";
import NotificationsList from "../Notifications/NotificationsList";
import NewPost from "../Posts/NewPost";
import Suggestion from "./Suggestion";
import TopProfile from "../Profile/TopProfile";
import Login from "../../components/Login";
import PostsList from "../Posts/PostsList";
import { connect } from "react-redux";

import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
class Dashboard extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        <Navbar />
        <div className="dashboard container-xl mt-3 p-0">
          <div className="row col-md-12">
            <div className="col-md-3">
              <div className="col">
                <ProfileThumbnail />
                <Suggestion />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col p-0">
                <NewPost />
                <PostsList posts={posts} />
              </div>
            </div>
            <div className="col-md-3">
              <Login />
              <NotificationsList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.firestore.ordered.posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Posts" }])
)(Dashboard);
