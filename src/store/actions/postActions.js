export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log("post-firestore", firestore);
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("Posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        likes: 0,
        comments: 0,
        views: 0,
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

export const likePost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    console.log("Action", post);
    const firestore = getFirestore();
    console.log("postAction-postId", post.postId);
    firestore
      .collection("likes")
      .add({
        postId: post.postId,
        likeCount: post.likeCount,
        userId: post.userId,
      })
      .then(() => {
        dispatch({ type: "LIKE_POST_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "LIKE_POST_ERROR", err });
      });

    // firestore
    //   .collection("Posts")
    //   .doc(post.postId)
    //   .collection("likes")
    //   .add({
    //     postId: post.postId,
    //     likeCount: post.likeCount,
    //     userId: post.userId,
    //   })
    //   .then(() => {
    //     dispatch({ type: "LIKE_POST_SUCCESS", post });
    //   })
    //   .catch((err) => {
    //     dispatch({ type: "LIKE_POST_ERROR", err });
    //   });
  };
};
