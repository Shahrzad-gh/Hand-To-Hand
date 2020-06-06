export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("Posts")
      .add({
        ...post,
        authorFirstName: "Sh",
        authorLastName: "GH",
        authorId: "123",
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_POST_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_POST_ERROR", err });
      });
  };
};
