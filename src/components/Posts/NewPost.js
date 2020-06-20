import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
class NewPost extends Component {
  state = {
    content: "",
    showPicker: false,
    emoji: "",
  };
  togglePicker = () => {
    this.setState({
      showPicker: !this.state.showPicker,
    });
  };
  handleEmojiSelect = (Emoji) => {
    console.log(Emoji.native);
    this.togglePicker();
    this.setState({ content: this.state.content + Emoji.native });
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
                    <ul className="newPostAttachment">
                      <li>
                        <i
                          className="fa fa-smile-o"
                          onClick={this.togglePicker}
                        ></i>
                        {this.state.showPicker && (
                          <Picker
                            showPreview={false}
                            showSkinTones={false}
                            onSelect={this.handleEmojiSelect}
                          />
                        )}
                      </li>
                      <li>
                        <div>
                          <input type="file" id="pic" accept="image/*" />
                          <label className="camera-icon" htmlFor="pic">
                            <i className="fas fa-camera fa-xs"></i>
                          </label>
                        </div>
                      </li>
                    </ul>
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
