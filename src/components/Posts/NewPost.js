import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
  };
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault();
    this.props.createPost(this.state);
  };
  render() {
    return (
      <div>
        <div className="card">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field">
                    <textarea
                      id=""
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
const mapStateToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};
export default connect(null, mapStateToProps)(NewPost);
