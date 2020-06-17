import React from "react";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import moment from "moment";
import { Component } from "react";
import AddComment from "../Comments/AddComment";
import CommentList from "../Comments/CommentsList";
import Navbar from "../Navbar/Navbar";

class PostDetails extends Component {
  state = {
    likeCount: 0,
  };
  handleLike = (e) => {
    let newCount = this.state.likeCount + 1;
    console.log("Like count", newCount);
    this.setState({
      likeCount: newCount,
    });
  };
  render() {
    const { post, auth, comments, profile } = this.props;
    const postId = this.props.match.params.id;
    console.log("comments- details", comments);
    const thisPostComments = comments
      ? Object.entries(comments).filter(
          ([key, comment]) => comment && comment.postId === postId
        )
      : null;
    console.log("DETAILS**", profile);
    console.log("DETAILS*", thisPostComments);
    console.log("DETAILS***", comments);
    if (!auth.uid) return <Redirect to="/Login" />;
    if (post) {
      return (
        <div>
          <Navbar />
          <div className="postDetails container-xl mt-3 p-0">
            <div className="row col-md-8">
              <div className="card col-md-12 p-0">
                <div className="card-header">
                  <img
                    width="50"
                    height="50"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEXo6OhgYGDv7+9ycnLr6+tZWVldXV1VVVVaWlphYWFSUlLm5ubQ0NCCgoJ7e3vg4OCdnZ1nZ2e4uLjS0tKXl5empqaurq6goKCOjo7JycnCwsLa2tpwcHC+vr6pqamxsbGJiYlWM1ywAAAEQ0lEQVR4nO2c23qqMBBGMUwIghxVBPH0/k+5CWhbu62FYIPD96+79or1zTATQyaOAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhROIG0dQP83pIhOt8V0axG0flLl87YlaSJJIi9pT0vQ5fqmVUJLORJNpHgfQW93gyiKpZZCuJY6a+610lVbbnH0excn/w6xzdtZj6EUdBtHni1zmmnFOV6oN86qeRbsJWUVT+8wBew+itmGaq2Ac9/NpMrVgqiqPqJ9igKoaJSlXPCLbImp0i1b/XmK+JukimfuKh0KFPkfnEj5m9iiIdFMIGdWKlSKv+VeYGr1dRuMNyVONFjIJIAxrFJ5xahkkIWQWRKpMQLhYBmzdRXExC2HSMlEsQk6Gd4gMmMaTc1JBLrRGlWZI2abrjkabC0K+ppi4Pw3rIj4p7FIsspb1Zr2gN1xwUqTAupQu552AoUt/c8MzCsBxhuOVhaNosuKxqxsTQ37Aw3MzecDfCkMWihk4jukXBodLQce79kNZzX9M4ZG4oWQg6IjZtiB6TbWGxNS2mPJY0ZtvBHWrFw9ChzEzQy3gkqU5Ts34h+Xy6SMzSVPH5wma2+OaxKO2g2ui7BZ8Qmnw+1K2CTwg1y6GCXsakU1yhvidNPgiY7Hd/IDbD8lSx+GV4B8VD6qnP59vhF7L+C3DfZZaiLZT0VvQPIUdDrdgvUSVTwUYxjPuUG3VxmAo6uvP/coBWH0xk1um/Iarl8zDKjOvh0htEW//nt1F6Bf+j7I5IUvnfLEKbn9LbhcwDeEU4ZzeQd5HUQyVxTvPw05Co8zKTSnYomW2O8xmZ6dBjXcnqmJ+Lc35ch2JmejfoxtQPAgAALKHrEHD7x3UUeCYVVZuRU1f5Nr3EbrbUZG58Sbd5VTvEe+i5a/J5GmVKNasZPQR8W7PpUWDZ/DeL0rxt//w0GztndW4Xak8n9PT6VB7Ks57tZmTZxG51irxf5O41vahY81jKNcFL8rKxG/ql25NqUb7/crz5DXFyh9vdaF7OuKjfV1LfK3D4f/B+aCgD903vIiCxjx7/lh8uKS/V2zmK8PTTvQJGkiornHfaABDhzjM/6vXYUS62b7OJ0/jJF/u1SO/0FlvFRMWr4/fpuMynXweIKvsrP41yJ94wpvASvK6+PMILNlOGUVRL8/PAfZHZdNefiNMfB7DDC/KJFMXG/CDpMCb6yE/RX5aYb4pTHJcSFgUbxdK6oihtCk6QqOJsPmRoRmD3GP/Am0teQ2jTUEQ22sQ90ma1oZXtHNUEFk9nThFCuydsDU85j2VpTdD8SoFx2LuQYMyE4RjsTbaZj/2Mw96LaHb9zHjsXWAzmaG1SyVgCEMYwhCGMIQhDGEIQxjCEIYwhCEMYfg2hpPg2zOMDu4UHOyNtIupsCUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/EPnPZE8QSXkhUAAAAASUVORK5CYII="
                    alt=""
                    className="rounded-circle border-dark mr-2"
                  />
                  <strong className="mr-2">
                    {post.authorFirstName} {post.authorLastName}
                  </strong>
                  <button className="btn right">
                    <i class="far fa-bookmark"></i>
                  </button>
                </div>
                <div className="card-content">
                  <span>{post.content}</span>
                </div>
                <div className="ml-2">
                  <span>
                    Created At: {moment(post.createAt.toDate()).calendar()}
                  </span>
                </div>
                <div className="card-footer">
                  <button className="btn">
                    <i class="far fa-heart mr-1" onClick={this.handleLike}></i>
                  </button>
                  <span>{post.likeCount}</span>
                  <i class="far fa-comment-alt mr-1 ml-2"></i>
                  <span>{post.commentCount}</span>
                  <a className="right">
                    <i class="fas fa-eye mr-1"></i>
                    <span>{post.views}</span>
                  </a>
                </div>
                <AddComment postId={postId} profile={profile} auth={auth} />
                <CommentList comments={thisPostComments} auth={auth} />
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <div className="container center">Loading Post...</div>;
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.Posts;
  const allComments = state.firestore.data.comments;
  const post = posts ? posts[id] : null;
  // const thisPostCommets = Object.key(allComments).filter((key) =>
  //   posts[id].include(key).reduce((obj, key) => {
  //     obj[key] = allComments[key];
  //     return obj;
  //   }, {})
  // );
  console.log("**", state.firebase.auth);
  return {
    id: id,
    post: post,
    auth: state.firebase.auth,
    comments: allComments,
    profile: state.firebase.profile,
    user: state.firebase.comments,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "Posts" },
    { collection: "comments", orderBy: ["createAt", "desc"] },
  ])
)(PostDetails);
