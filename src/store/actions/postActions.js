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
        likeCount: 0,
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
      .collection("Posts")
      .doc(post.postId)
      .update({
        likeCount: post.likeCount,
        userId: post.userId,
      })
      .then(() => {
        dispatch({ type: "LIKE_POST_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "LIKE_POST_ERROR", err });
      });
  };
};

export const unlikePost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    console.log("Action", post);
    const firestore = getFirestore();
    console.log("postAction-postId", post.postId);
    firestore
      .collection("Posts")
      .doc(post.postId)
      .update({
        likeCount: post.likeCount,
        userId: post.userId,
      })
      .then(() => {
        dispatch({ type: "UNLIKE_POST_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "UNLIKE_POST_ERROR", err });
      });
  };
};

export const addComment = (comment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("comments")
      .add({
        postId: comment.postId,
        content: comment.content,
        userId: comment.userId,
        username: comment.userName,
        createAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "COMMENT_ADD_SUCCESS", comment });
      })
      .catch((err) => {
        dispatch({ type: "COMMENT_ADD_ERROR", err });
      });
    const posts = getState().firestore.data.Posts;
    const commentCount = posts[comment.postId].comments;
    console.log("ActionADDnimber:", posts[comment.postId].comments);
    firestore
      .collection("Posts")
      .doc(comment.postId)
      .update({ comments: commentCount + 1 })
      .then(() => {
        dispatch({ type: "COMMENT_COUNT_INC_SUCCESS", comment });
      })
      .catch((err) => {
        dispatch({ type: "COMMENT_COUNT_INC_ERROR", err });
      });
  };
};

export const deletePost = (postId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log("post-firestore", firestore);
    firestore
      .collection("Posts")
      .doc(postId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_POST_SUCCESS", postId });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_POST_ERROR", err });
      });
  };
};

export const deleteComment = (comment) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    console.log("comment", comment);
    const firestore = getFirestore();
    const posts = getState().firestore.data.Posts;
    const commentCount = posts[comment.postId].comments;
    firestore
      .collection("comments")
      .doc(comment.commentId)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_COMMENT_SUCCESS", comment });
      })
      .catch((err) => {
        dispatch({ type: "DELETE_COMMENT_ERROR", err });
      });

    firestore
      .collection("Posts")
      .doc(comment.postId)
      .update({ comments: commentCount - 1 })
      .then(() => {
        dispatch({ type: "COMMENT_COUNT_DEC_SUCCESS", commentCount });
      })
      .catch((err) => {
        dispatch({ type: "COMMENT_COUNT_DEC_ERROR", err });
      });
  };
};
