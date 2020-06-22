export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log("creat-postAction:post", post);
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log("imgName", post.url.name);
    const firebase = getFirebase();
    const mainURL = firebase
      .storage()
      .ref("Photos")
      .child(post.imgFile.name)
      .getDownloadURL()
      .then((url) => {
        post.url = url;
        console.log("URL-post", url);
        return url;
      })
      .catch((err) => console.log("dl", err));
    console.log("url*", post.imgFile);
    firestore
      .collection("Posts")
      .add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        likeCount: 0,
        imgFile: post.url,
        url: post.url,
        commentCount: 0,
        viewCount: 0,
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
    console.log("postAction-post", post);
    firestore
      .collection("likes")
      .add({
        postId: post.postId,
        userId: post.userId,
      })
      .then(() => {
        dispatch({ type: "LIKE_POST_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "LIKE_POST_ERROR", err });
      });
    const posts = getState().firestore.data.Posts;
    const likeCount = posts[post.postId].likeCount;
    firestore
      .collection("Posts")
      .doc(post.postId)
      .update({
        likeCount: likeCount + 1,
      })
      .then(() => {
        dispatch({ type: "LIKE_POST_INC_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "LIKE_POST_INC_ERROR", err });
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
      .collection("likes")
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

    const posts = getState().firestore.data.Posts;
    const likeCount = posts[post.postId].likeCount;
    firestore
      .collection("Posts")
      .doc(post.postId)
      .update({
        likeCount: likeCount - 1,
      })
      .then(() => {
        dispatch({ type: "UNLIKE_POST_DEC_SUCCESS", post });
      })
      .catch((err) => {
        dispatch({ type: "UNLIKE_POST_DEC_ERROR", err });
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
    const commentCount = posts[comment.postId].commentCount;
    console.log("ActionADDnimber:", posts[comment.postId]);
    firestore
      .collection("Posts")
      .doc(comment.postId)
      .update({ commentCount: commentCount + 1 })
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
    const commentCount = posts[comment.postId].commentCount;
    console.log("COM_COUN", commentCount);
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
      .update({ commentCount: commentCount - 1 })
      .then(() => {
        dispatch({ type: "COMMENT_COUNT_DEC_SUCCESS", commentCount });
      })
      .catch((err) => {
        dispatch({ type: "COMMENT_COUNT_DEC_ERROR", err });
      });
  };
};

export const uploadImage = (imgFile) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("upload Action:", imgFile);
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref("Photos/" + imgFile.name);
    var task = storageRef
      .put(imgFile)
      .then(() => {
        dispatch({ type: "UPLOAD_IMG_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "UPLOAD_IMG_ERROR", err });
      });
    console.log("task-action", task);
    // task.on(
    //   "state change",
    //   function progress(snapshot) {
    //     var percentage = (snapshot.byteTransferred / snapshot.totalBytes) * 100;
    //     console.log("Percentage:", percentage);
    //   },
    //   function error(err) {
    //     console.log("upload err", err);
    //   },
    //   function complete() {
    //     console.log("upload Finish");
    //   }
    // );
  };
};
