import React, { Component } from "react";
export default class Profile extends Component {
  state = {
    imgFile: "",
    url: "",
  };
  handleUploadProfilePic = (e) => {
    console.log("img", e.target.files[0]);
    this.setState(
      {
        url: URL.createObjectURL(e.target.files[0]),
        imgFile: e.target.files[0],
      },
      console.log("imgObjectURL", this.state.url)
    );
  };
  render() {
    const { imageURL } = this.props;
    return (
      <div className="card text-center m-0">
        <div className="profile card-img  bg-light">
          <img
            width="120"
            height="120"
            src={imageURL}
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
          <div className="row">
            <div className="col s5">
              <div>
                <h6>Following</h6>
              </div>
              <p>4</p>
            </div>
            <div className="col s5">
              <div>
                <h6>Followers</h6>
              </div>
              <p>40</p>
            </div>
          </div>
          <button className="btn">Follow</button>
        </div>
      </div>
    );
  }
}
