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
  //Which post and who like/unlike post
  state = {
    userId: "",
    postId: "",
  };
  //to find out user Like or unlike
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
    //evertime just one post send as props
    //auth is who is online now
    const { post, auth } = this.props;
    console.log("summary", post);
    console.log("postID-summary", post.authorId);
    console.log("Is userID", auth);
    console.log("count", post.commentCount);
    // if online user likes this current post => to show correct Icon
    const isLike = post.whoLikes && post.whoLikes.includes(auth.uid);
    let DefaultPhoto =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEXo6OhgYGDv7+9ycnLr6+tZWVldXV1VVVVaWlphYWFSUlLm5ubQ0NCCgoJ7e3vg4OCdnZ1nZ2e4uLjS0tKXl5empqaurq6goKCOjo7JycnCwsLa2tpwcHC+vr6pqamxsbGJiYlWM1ywAAAEQ0lEQVR4nO2c23qqMBBGMUwIghxVBPH0/k+5CWhbu62FYIPD96+79or1zTATQyaOAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhROIG0dQP83pIhOt8V0axG0flLl87YlaSJJIi9pT0vQ5fqmVUJLORJNpHgfQW93gyiKpZZCuJY6a+610lVbbnH0excn/w6xzdtZj6EUdBtHni1zmmnFOV6oN86qeRbsJWUVT+8wBew+itmGaq2Ac9/NpMrVgqiqPqJ9igKoaJSlXPCLbImp0i1b/XmK+JukimfuKh0KFPkfnEj5m9iiIdFMIGdWKlSKv+VeYGr1dRuMNyVONFjIJIAxrFJ5xahkkIWQWRKpMQLhYBmzdRXExC2HSMlEsQk6Gd4gMmMaTc1JBLrRGlWZI2abrjkabC0K+ppi4Pw3rIj4p7FIsspb1Zr2gN1xwUqTAupQu552AoUt/c8MzCsBxhuOVhaNosuKxqxsTQ37Aw3MzecDfCkMWihk4jukXBodLQce79kNZzX9M4ZG4oWQg6IjZtiB6TbWGxNS2mPJY0ZtvBHWrFw9ChzEzQy3gkqU5Ts34h+Xy6SMzSVPH5wma2+OaxKO2g2ui7BZ8Qmnw+1K2CTwg1y6GCXsakU1yhvidNPgiY7Hd/IDbD8lSx+GV4B8VD6qnP59vhF7L+C3DfZZaiLZT0VvQPIUdDrdgvUSVTwUYxjPuUG3VxmAo6uvP/coBWH0xk1um/Iarl8zDKjOvh0htEW//nt1F6Bf+j7I5IUvnfLEKbn9LbhcwDeEU4ZzeQd5HUQyVxTvPw05Co8zKTSnYomW2O8xmZ6dBjXcnqmJ+Lc35ch2JmejfoxtQPAgAALKHrEHD7x3UUeCYVVZuRU1f5Nr3EbrbUZG58Sbd5VTvEe+i5a/J5GmVKNasZPQR8W7PpUWDZ/DeL0rxt//w0GztndW4Xak8n9PT6VB7Ks57tZmTZxG51irxf5O41vahY81jKNcFL8rKxG/ql25NqUb7/crz5DXFyh9vdaF7OuKjfV1LfK3D4f/B+aCgD903vIiCxjx7/lh8uKS/V2zmK8PTTvQJGkiornHfaABDhzjM/6vXYUS62b7OJ0/jJF/u1SO/0FlvFRMWr4/fpuMynXweIKvsrP41yJ94wpvASvK6+PMILNlOGUVRL8/PAfZHZdNefiNMfB7DDC/KJFMXG/CDpMCb6yE/RX5aYb4pTHJcSFgUbxdK6oihtCk6QqOJsPmRoRmD3GP/Am0teQ2jTUEQ22sQ90ma1oZXtHNUEFk9nThFCuydsDU85j2VpTdD8SoFx2LuQYMyE4RjsTbaZj/2Mw96LaHb9zHjsXWAzmaG1SyVgCEMYwhCGMIQhDGEIQxjCEIYwhCEMYfg2hpPg2zOMDu4UHOyNtIupsCUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/EPnPZE8QSXkhUAAAAASUVORK5CYII=";
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
                    //photoURL is set after signUp and first time is a default pic
                    src={auth.photoURL != null ? auth.photoURL : DefaultPhoto}
                    className="rounded-circle border-dark mr-2"
                  />
                  <strong className="mr-2">
                    {post.authorFirstName} {post.authorLastName}
                  </strong>
                  <a className="right">
                    <i className="far fa-bookmark "></i>
                  </a>
                  <a className="right">
                    {post.authorId === auth.uid ? (
                      <i
                        className="fas fa-trash mr-2"
                        data-postid={post.id}
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
                <button className="btn" onClick={this.handleClick}>
                  {!isLike && (
                    <i
                      id="like"
                      data-userid={auth.uid}
                      data-postid={post.id}
                      className="far fa-heart mr-1"
                    ></i>
                  )}
                  {isLike && (
                    <i
                      id="unlike"
                      data-userid={auth.uid}
                      data-postid={post.id}
                      className="fas fa-heart mr-1"
                    ></i>
                  )}
                </button>
                <span>{post?.likeCount}</span>

                <Link to={"/post/" + post.id} key={post.id}>
                  <i className="far fa-comment-alt mr-1 ml-2 text-dark"></i>
                  <span className="text-dark">{post.commentCount}</span>
                </Link>

                <a className="right">
                  <i className="fas fa-eye mr-1"></i>
                  <span>{post?.views}</span>
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
