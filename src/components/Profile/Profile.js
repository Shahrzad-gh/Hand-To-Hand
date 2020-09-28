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
    console.log("img", URL.createObjectURL(e.target.files[0]));
    this.setState(
      {
        url: URL.createObjectURL(e.target.files[0]),
        imgFile: e.target.files[0],
      },
      console.log("url & imgFile", this.state)
    );
    this.props.updateImageProfile(e.target.files[0]);
  };

  render() {
    console.log("Props", this.props);
    const { photoURL } = this.props;
    let DefaultPhoto ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEXo6OhgYGDv7+9ycnLr6+tZWVldXV1VVVVaWlphYWFSUlLm5ubQ0NCCgoJ7e3vg4OCdnZ1nZ2e4uLjS0tKXl5empqaurq6goKCOjo7JycnCwsLa2tpwcHC+vr6pqamxsbGJiYlWM1ywAAAEQ0lEQVR4nO2c23qqMBBGMUwIghxVBPH0/k+5CWhbu62FYIPD96+79or1zTATQyaOAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAhROIG0dQP83pIhOt8V0axG0flLl87YlaSJJIi9pT0vQ5fqmVUJLORJNpHgfQW93gyiKpZZCuJY6a+610lVbbnH0excn/w6xzdtZj6EUdBtHni1zmmnFOV6oN86qeRbsJWUVT+8wBew+itmGaq2Ac9/NpMrVgqiqPqJ9igKoaJSlXPCLbImp0i1b/XmK+JukimfuKh0KFPkfnEj5m9iiIdFMIGdWKlSKv+VeYGr1dRuMNyVONFjIJIAxrFJ5xahkkIWQWRKpMQLhYBmzdRXExC2HSMlEsQk6Gd4gMmMaTc1JBLrRGlWZI2abrjkabC0K+ppi4Pw3rIj4p7FIsspb1Zr2gN1xwUqTAupQu552AoUt/c8MzCsBxhuOVhaNosuKxqxsTQ37Aw3MzecDfCkMWihk4jukXBodLQce79kNZzX9M4ZG4oWQg6IjZtiB6TbWGxNS2mPJY0ZtvBHWrFw9ChzEzQy3gkqU5Ts34h+Xy6SMzSVPH5wma2+OaxKO2g2ui7BZ8Qmnw+1K2CTwg1y6GCXsakU1yhvidNPgiY7Hd/IDbD8lSx+GV4B8VD6qnP59vhF7L+C3DfZZaiLZT0VvQPIUdDrdgvUSVTwUYxjPuUG3VxmAo6uvP/coBWH0xk1um/Iarl8zDKjOvh0htEW//nt1F6Bf+j7I5IUvnfLEKbn9LbhcwDeEU4ZzeQd5HUQyVxTvPw05Co8zKTSnYomW2O8xmZ6dBjXcnqmJ+Lc35ch2JmejfoxtQPAgAALKHrEHD7x3UUeCYVVZuRU1f5Nr3EbrbUZG58Sbd5VTvEe+i5a/J5GmVKNasZPQR8W7PpUWDZ/DeL0rxt//w0GztndW4Xak8n9PT6VB7Ks57tZmTZxG51irxf5O41vahY81jKNcFL8rKxG/ql25NqUb7/crz5DXFyh9vdaF7OuKjfV1LfK3D4f/B+aCgD903vIiCxjx7/lh8uKS/V2zmK8PTTvQJGkiornHfaABDhzjM/6vXYUS62b7OJ0/jJF/u1SO/0FlvFRMWr4/fpuMynXweIKvsrP41yJ94wpvASvK6+PMILNlOGUVRL8/PAfZHZdNefiNMfB7DDC/KJFMXG/CDpMCb6yE/RX5aYb4pTHJcSFgUbxdK6oihtCk6QqOJsPmRoRmD3GP/Am0teQ2jTUEQ22sQ90ma1oZXtHNUEFk9nThFCuydsDU85j2VpTdD8SoFx2LuQYMyE4RjsTbaZj/2Mw96LaHb9zHjsXWAzmaG1SyVgCEMYwhCGMIQhDGEIQxjCEIYwhCEMYfg2hpPg2zOMDu4UHOyNtIupsCUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/EPnPZE8QSXkhUAAAAASUVORK5CYII="
    return (
      <div className="card text-center m-0">
        <div className="profile card-img  bg-light">
          <img
            id="fileUpload"
            width="120"
            height="120"
            src={photoURL != null ? photoURL : DefaultPhoto}
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
          <button className="btn" hidden={true}>
            Follow
          </button>
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
