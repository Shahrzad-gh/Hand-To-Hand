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
    const { posts } = this.props;
    console.log("Link", { posts });

    return (
      <div>
        <div className="container m-2">
          <strong>Name</strong>
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
              <PostsList posts={posts} />
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
  console.log("state.firestore.ordered.posts:", state);
  return {
    posts: state.firestore.ordered.Posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Posts" }])
)(MyProfileLinks);
