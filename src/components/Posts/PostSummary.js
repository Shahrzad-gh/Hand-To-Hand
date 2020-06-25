import React from "react";
import moment from "moment";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  likePost,
  unlikePost,
  deletePost,
} from "../../store/actions/postActions";

class PostSummary extends Component {
  state = {
    userId: "",
    postId: "",
  };
  handleClick = (e) => {
    console.log("CLICK", e.target.dataset);
    if (e.target.id === "like") {
      this.setState(
        {
          userId: e.target.dataset.userid,
          postId: e.target.dataset.postid,
        },
        function () {
          console.log("state-likePost", this.state);
          this.props.likePost(this.state);
        }
      );
    } else {
      this.setState(
        {
          userId: e.target.dataset.userid,
          postId: e.target.dataset.postid,
        },
        function () {
          console.log("state-unlikePost", this.state);
          this.props.unlikePost(this.state);
        }
      );
    }
  };

  handleDelete = (e) => {
    console.log("DEL", e.target.dataset.postid);
    this.props.deletePost(e.target.dataset.postid);
  };
  render() {
    const { post, auth } = this.props;
    console.log("summary", post);
    console.log("postID-summary", post.authorId);
    console.log("Is userID", auth);
    console.log("post URL", post);
    const isLike = post.whoLikes && post.whoLikes.includes(auth.uid);

    //
    return (
      <div className="postSummary">
        <div className="card col-md-12 p-0">
          <div className="container-md p-0">
            <div className="col-md p-0">
              <div className="row m-0">
                <div className="card-header col-md-12">
                  <img
                    width="50"
                    height="50"
                    alt=""
                    src={auth.photoURL}
                    className="rounded-circle border-dark mr-2"
                  />
                  <strong className="mr-2">
                    {post.authorFirstName} {post.authorLastName}
                  </strong>
                  <a className="right">
                    <i class="far fa-bookmark "></i>
                  </a>
                  <a className="right">
                    {post.authorId === auth.uid ? (
                      <i
                        class="fas fa-trash mr-2"
                        data-postId={post.id}
                        onClick={this.handleDelete}
                      ></i>
                    ) : null}
                  </a>
                </div>
              </div>
              <div className="card-content">
                {post.imgFile ? (
                  <div className="img-post-content mb-3">
                    <img
                      id="post-image"
                      src={post.imgFile}
                      width="100%"
                      height="auto%"
                    />
                  </div>
                ) : null}

                <div className="post-content">
                  <span>{post.content}</span>
                </div>
              </div>
              <div>
                <span className="ml-2">
                  Created At: {moment(post.createAt.toDate()).calendar()}
                </span>
              </div>
              <div className="card-footer col-md-12">
                <button className="btn p-0" onClick={this.handleClick}>
                  {!isLike && (
                    <i
                      id="like"
                      data-userid={auth.uid}
                      data-postid={post.id}
                      className="far fa-heart p-0 mr-1"
                    ></i>
                  )}
                  {isLike && (
                    <i
                      id="unlike"
                      data-userid={auth.uid}
                      data-postid={post.id}
                      className="fas fa-heart p-0 mr-1"
                    ></i>
                  )}
                </button>
                <span>{post.likeCount}</span>

                <Link to={"/post/" + post.id} key={post.id}>
                  <i className="far fa-comment-alt mr-1 ml-2 text-dark"></i>
                  <span className="text-dark">{post.commentCount}</span>
                </Link>

                <a className="right">
                  <i class="fas fa-eye mr-1"></i>
                  <span>{post.views}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    likePost: (post) => dispatch(likePost(post)),
    unlikePost: (post) => dispatch(unlikePost(post)),
    deletePost: (post) => dispatch(deletePost(post)),
  };
};
export default connect(null, mapDispatchToProps)(PostSummary);
