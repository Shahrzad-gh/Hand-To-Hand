import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";
class NewPost extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("ADD_POST", e);
    e.preventDefault();
    this.props.createPost(this.state);
  };
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/Login" />;
    return (
      <div className="newPost">
        <div className="card">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <textarea
                      id="content"
                      placeholder="share a post"
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
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
