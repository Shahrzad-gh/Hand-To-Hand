import React from "react";
import moment from "moment";
import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { likePost } from "../../store/actions/postActions";

class PostSummary extends Component {
  state = {
    userId: "",
    postId: "",
    likeCount: 0,
    isLiked: false,
  };
  handleClick = (e) => {
    console.log("CLICK", e.target.dataset.userid);
    const newCount = this.state.likeCount + 1;
    this.setState(
      {
        userId: e.target.dataset.userid,
        postId: e.target.dataset.postid,
        likeCount: newCount,
        isLiked: true,
      },
      function () {
        console.log("state", this.state);
        this.props.likePost(this.state);
      }
    );
    //console.log("PSSS", this.state);
  };
  render() {
    const { post } = this.props;
    console.log("postID", post.id);
    const { auth } = this.props;
    console.log("userID", auth);
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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEXo6OhgYGDv7+9ycnLr6+tZWVldXV1VVVVaWlphYWFSUlLm5ubQ0NCCgoJ7e3vg4OCdnZ1nZ2e4uLjS0tKXl5empqaurq6goKCOjo7JycnCwsLa2tpwcHC+vr6pqamxsbGJiYlWM1ywAAAEQ0lEQVR4nO2c23qqMBBGMUwIghxVBPH0/k+5CWhbu62FYIPD96+79or1zTATQyaOAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhROIG0dQP83pIhOt8V0axG0flLl87YlaSJJIi9pT0vQ5fqmVUJLORJNpHgfQW93gyiKpZZCuJY6a+610lVbbnH0excn/w6xzdtZj6EUdBtHni1zmmnFOV6oN86qeRbsJWUVT+8wBew+itmGaq2Ac9/NpMrVgqiqPqJ9igKoaJSlXPCLbImp0i1b/XmK+JukimfuKh0KFPkfnEj5m9iiIdFMIGdWKlSKv+VeYGr1dRuMNyVONFjIJIAxrFJ5xahkkIWQWRKpMQLhYBmzdRXExC2HSMlEsQk6Gd4gMmMaTc1JBLrRGlWZI2abrjkabC0K+ppi4Pw3rIj4p7FIsspb1Zr2gN1xwUqTAupQu552AoUt/c8MzCsBxhuOVhaNosuKxqxsTQ37Aw3MzecDfCkMWihk4jukXBodLQce79kNZzX9M4ZG4oWQg6IjZtiB6TbWGxNS2mPJY0ZtvBHWrFw9ChzEzQy3gkqU5Ts34h+Xy6SMzSVPH5wma2+OaxKO2g2ui7BZ8Qmnw+1K2CTwg1y6GCXsakU1yhvidNPgiY7Hd/IDbD8lSx+GV4B8VD6qnP59vhF7L+C3DfZZaiLZT0VvQPIUdDrdgvUSVTwUYxjPuUG3VxmAo6uvP/coBWH0xk1um/Iarl8zDKjOvh0htEW//nt1F6Bf+j7I5IUvnfLEKbn9LbhcwDeEU4ZzeQd5HUQyVxTvPw05Co8zKTSnYomW2O8xmZ6dBjXcnqmJ+Lc35ch2JmejfoxtQPAgAALKHrEHD7x3UUeCYVVZuRU1f5Nr3EbrbUZG58Sbd5VTvEe+i5a/J5GmVKNasZPQR8W7PpUWDZ/DeL0rxt//w0GztndW4Xak8n9PT6VB7Ks57tZmTZxG51irxf5O41vahY81jKNcFL8rKxG/ql25NqUb7/crz5DXFyh9vdaF7OuKjfV1LfK3D4f/B+aCgD903vIiCxjx7/lh8uKS/V2zmK8PTTvQJGkiornHfaABDhzjM/6vXYUS62b7OJ0/jJF/u1SO/0FlvFRMWr4/fpuMynXweIKvsrP41yJ94wpvASvK6+PMILNlOGUVRL8/PAfZHZdNefiNMfB7DDC/KJFMXG/CDpMCb6yE/RX5aYb4pTHJcSFgUbxdK6oihtCk6QqOJsPmRoRmD3GP/Am0teQ2jTUEQ22sQ90ma1oZXtHNUEFk9nThFCuydsDU85j2VpTdD8SoFx2LuQYMyE4RjsTbaZj/2Mw96LaHb9zHjsXWAzmaG1SyVgCEMYwhCGMIQhDGEIQxjCEIYwhCEMYfg2hpPg2zOMDu4UHOyNtIupsCUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/EPnPZE8QSXkhUAAAAASUVORK5CYII="
                    alt=""
                    className="rounded-circle border-dark mr-2"
                  />
                  <strong className="mr-2">
                    {post.authorFirstName} {post.authorLastName}
                  </strong>
                  <a className="right">
                    <i class="far fa-bookmark "></i>
                  </a>
                </div>
              </div>
              <div className="card-content">
                <span>{post.content}</span>
              </div>
              <div>
                <span className="ml-2">
                  Created At: {moment(post.createAt.toDate()).calendar()}
                </span>
              </div>
              <div className="card-footer col-md-12">
                <button className="btn p-0" onClick={this.handleClick}>
                  {!this.state.isLiked && (
                    <i
                      id={post.id}
                      data-userid={auth}
                      data-postid={post.id}
                      className="far fa-heart p-0 mr-1"
                    ></i>
                  )}
                  {this.state.isLiked && (
                    <i
                      id={post.id}
                      data-userid={auth}
                      data-postid={post.id}
                      className="fas fa-heart p-0 mr-1"
                    ></i>
                  )}
                </button>
                <span>{this.state.likeCount}</span>
                <Link to={"/post/" + post.id} key={post.id}>
                  <i className="far fa-comment-alt mr-1 ml-2 text-dark"></i>
                  <span className="text-dark">{post.comments}</span>
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
  };
};
export default connect(null, mapDispatchToProps)(PostSummary);
