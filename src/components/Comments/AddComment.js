import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../../store/actions/postActions";
import CommentsList from "./CommentsList";

class Comment extends Component {
  state = {
    content: "",
    userId: "",
    postId: "",
    userName: "",
  };
  handleChange = (e) => {
    console.log("addcomment -E:", e);
    this.setState({
      [e.target.id]: e.target.value,
      userId: e.target.dataset.userid,
      postId: e.target.dataset.postid,
      userName: e.target.dataset.username,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("addcomment", this.state);
    this.props.addComment(this.state);
  };
  render() {
    const { auth } = this.props;
    const { postId } = this.props;
    console.log("WHOADD", auth);
    return (
      <div className="comment">
        <div className="card">
          <div className="row m-2">
            <div className="col-md-12">
              <div className="add-comment">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field col-md-12">
                    <textarea
                      data-userid={auth.uid}
                      data-username={auth.displayName}
                      data-postid={postId}
                      id="content"
                      placeholder="share a comment"
                      className="materialize-textarea"
                      onChange={this.handleChange}
                    />
                    <button className="btn right">
                      <i className="fas fa-share"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// const mapStateToProps = (state) => {
//   console.log("STATE", state);
//   return {
//     auth: state.firebase.auth,
//   };
// };
const mapDispatchToProps = (dispatch) => {
  return { addComment: (comment) => dispatch(addComment(comment)) };
};
export default connect(null, mapDispatchToProps)(Comment);
