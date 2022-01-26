import React from "react";
import TabList from "../TabList";
import Info from "../Profile/Info";
import PostsList from "../Posts/PostsList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
function UserProfileLinks(props) {
  const user = props.user;

  const posts = props.posts;
  const myposts = posts
    ? posts.filter((post) => post.authorId === user.id)
    : null;
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
      <div className="tabContent container-md m-0 profile-link link-content up">
        <TabList>
          <div label="Info" className="tab-content">
            <Info />
          </div>
          <div label="Posts" className="tab-content">
            <PostsList posts={myposts} auth={user.id} />
          </div>
        </TabList>
      </div>
      {/* <i className="fas fa-heart"></i>Likes
      <i className="fas fa-info-circle"></i>Info
      <i className="fas fa-quote-right"></i>Mentions */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.Posts,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "Posts" }])
)(UserProfileLinks);
