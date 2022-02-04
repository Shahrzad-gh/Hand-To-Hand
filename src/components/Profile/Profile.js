import React, { Component } from "react";
import { uploadImage } from "../../store/actions/postActions";
import { updateImageProfile } from "../../store/actions/userAction";
import { connect } from "react-redux";

class Profile extends Component {
  state = {
    imgFile: "",
    url: "",
  };
  handleUploadProfilePic = (e) => {
    this.setState({
      url: URL.createObjectURL(e.target.files[0]),
      imgFile: e.target.files[0],
    });
    this.props.updateImageProfile(e.target.files[0]);
  };

  render() {
    const { photoURL } = this.props;
    return (
      <div className="card text-center">
        <div className="profile card-img ">
          <img
            id="fileUpload"
            width="120"
            height="120"
            src={photoURL}
            alt=""
            className="profile-pic rounded-circle border border-dark"
          />
          <div className="add-pic">
            <input
              type="file"
              id="id"
              accept="image/*"
              className="btn btn-floating change-profile-pic"
              onChange={this.handleUploadProfilePic}
            />
            <label className="camera-icon" htmlFor="id">
              <i className="fas fa-camera fa-xs"></i>
            </label>
          </div>
        </div>

        <div className="text-center card-content profile-short-info ">
          <div className="col">
            <div>
              <div>
                <p>Posts</p>
              </div>
              <p>4</p>
            </div>
            <div>
              <div>
                <p>Following</p>
              </div>
              <p>40</p>
            </div>
            <div>
              <div>
                <p>Followers</p>
              </div>
              <p>40</p>
            </div>
          </div>
          <button className="btn">Edit</button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    uploadImage: (image) => dispatch(uploadImage(image)),
    updateImageProfile: (image) => dispatch(updateImageProfile(image)),
  };
};
export default connect(null, mapDispatchToProps)(Profile);
