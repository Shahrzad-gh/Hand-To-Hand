import React from "react";
import TabList from "../TabList";
import Info from "../Profile/Info";
import PostsList from "../Posts/PostsList";
import { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class MyProfileLinks extends Component {
  render() {
    const { auth, posts, user } = this.props;
    const uid = auth.uid;
    console.log("allPosts", posts);
    console.log("user-online", uid);
    const myposts = posts
      ? posts.filter((post) => post.authorId === uid)
      : null;
    console.log("myPosts", myposts);
    return (
      <div>
        <div className="container m-2">
          <strong>
            {user.firstName} {user.lastName}
          </strong>
          <p>
            username
            <i className="far fa-star ml-2"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
          </p>
        </div>
        <div
          className="tabContent container-md m-0 profile-link link-content up"
          id="profile-links"
        >
          <TabList>
            <div label="Info" className="tab-content">
              <Info />
            </div>
            <div label="Posts" className="tab-content">
              <PostsList posts={myposts} auth={auth.uid} />
            </div>
            <div label="Likes" className="tab-content"></div>
            <div label="Mention" className="tab-content"></div>
          </TabList>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    posts: state.firestore.ordered.Posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Posts" }])
)(MyProfileLinks);
