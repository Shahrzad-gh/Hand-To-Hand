export const updateImageProfile = (profileImage) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    console.log("profileImg", profileImage);

    const mainURL = firebase
      .storage()
      .ref("Photos")
      .child(profileImage)
      .getDownloadURL()
      .then((url) => {
        profileImage.url = url;
        console.log("URL-profileImg", profileImage.url);
        return url;
      })
      .catch((err) => console.log("dl", err));
    console.log("url*", profileImage.url);
    firebase
      .auth()
      .currentUser()
      .then((response) => {
        response.user.updateProfile({
          photoURL: profileImage.url,
        });
      });
  };
};
