export const updateImageProfile = (profileImage) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    let user = firebase.auth().currentUser;
    user
      .updateProfile({
        photoURL: profileImage.url,
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
};
