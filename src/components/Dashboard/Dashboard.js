import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import ProfileThumbnail from "../Profile/ProfileThumbnail";
import NotificationsList from "../Notifications/NotificationsList";
import NewPost from "../Posts/NewPost";
import Suggestion from "./Suggestion";
import Login from "../../components/Login";
import PostsList from "../Posts/PostsList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Dashboard extends Component {
  render() {
    const { posts, auth, profile, notifications, users, likes } = this.props;
    if (!auth.uid) return <Redirect to="/Login" />;
    const myLikes =
      likes && Object.values(likes).filter((item) => item.userId == auth.uid);
    console.log("dashboard-OnlineUser", auth.uid);
    console.log("dashboard-allikes", likes);
    console.log("dashboard-MyLikes", myLikes);
    return (
      <div>
        <Navbar />
        <div className="dashboard container-xl mt-3 p-0">
          <div className="row col-md-12">
            <div className="col-md-3">
              <div className="col">
                <ProfileThumbnail
                  profile={profile}
                  notifications={notifications}
                  suggestions={users}
                />
                <Suggestion suggestions={users} notifications={notifications} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="col p-0">
                <NewPost />
                <PostsList posts={posts} auth={auth} likes={myLikes} />
              </div>
            </div>
            <div className="col-md-3">
              <Login />
              <NotificationsList notifications={notifications} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.Posts,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    users: state.firestore.ordered.users,
    likes: state.firestore.ordered.likes,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "likes" },
    { collection: "Posts", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] },
    { collection: "users", limit: 5 },
  ])
)(Dashboard);
