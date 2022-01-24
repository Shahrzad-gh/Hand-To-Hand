import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost, uploadImage } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";
import "emoji-mart/css/emoji-mart.css";
import "../Dashboard/Dashboard.scss";
import { Picker } from "emoji-mart";
class NewPost extends Component {
  state = {
    content: "",
    showPicker: false,
    emoji: "",
    imgFile: null,
    url: null,
    file: [],
  };

  togglePicker = () => {
    this.setState({
      showPicker: !this.state.showPicker,
    });
  };
  handleEmojiSelect = (Emoji) => {
    console.log(this.state.content + Emoji.native);
    this.togglePicker();

    this.setState({ content: this.state.content + Emoji.native });
    //document.getElementById("content").value = this.state.content;
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    console.log("ADD_POST", this.state);
    e.preventDefault();
    this.state.imgFile && this.props.uploadImage(this.state.imgFile);
    this.props.createPost(this.state);
  };
  handleUploadImage = (e) => {
    console.log("img", URL.createObjectURL(e.target.files[0]));
    this.setState(
      {
        url: URL.createObjectURL(e.target.files[0]),
        imgFile: e.target.files[0],
      },
      console.log("url & imgFile", this.state)
    );
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
                      value={this.state.content}
                      placeholder="share a post"
                      className="materialize-textarea"
                      onChange={this.handleChange}
                    />
                    <button className="btn right">
                      <i className="fas fa-share"></i>
                    </button>
                    {this.state.url != null ? (
                      <div>
                        <img
                          id="img-post"
                          src={this.state.url}
                          alt="pictureInPost"
                          width="300"
                          height="200"
                        />
                      </div>
                    ) : null}
                    <div className="row mb-0">
                      <div className="add-emoji">
                        <i
                          className="fa fa-smile-o mr-2"
                          onClick={this.togglePicker}
                        ></i>
                        {this.state.showPicker && (
                          <Picker
                            showPreview={false}
                            showSkinTones={false}
                            onSelect={this.handleEmojiSelect}
                          />
                        )}
                      </div>
                      <div className="change-pic">
                        <input
                          type="file"
                          id="pic"
                          accept="image/*"
                          onChange={this.handleUploadImage}
                        />
                        <label className="camera-icon" htmlFor="pic">
                          <i className="fas fa-camera fa-xs mr-2"></i>
                        </label>
                      </div>
                    </div>
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
    uploadImage: (image) => dispatch(uploadImage(image)),
    createPost: (post) => dispatch(createPost(post)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
