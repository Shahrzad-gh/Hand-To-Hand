import { getFirebase } from "react-redux-firebase";

export const createPost = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    console.log("creat-postAction:post", post);
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(getState().firebase.auth);
    const firebase = getFirebase();
    // post.imgFile &&
    //   firebase
    //     .storage()
    //     .ref("Photos/")
    //     .child(post.imgFile.name)
    //     .getDownloadURL()
    //     .then((url) => {
    //       //url is firebase Image URL that add to a post
    //       post.url = url;
    //       console.log("URL", url);
    //     })
    //     .catch((err) => console.log("dl", err));
    // console.log("url", post.url);
    // console.log("url-imgfile", post.imgFile.url);

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
    const firebase = getFirebase();
    console.log("postAction-post", post);
    //to like a post and add information of user that liked it to whoLikes arry

    const arrayUnion = firebase.firestore.FieldValue.arrayUnion;
    const posts = getState().firestore.data.Posts;
    console.log("postAction-post", posts);
    const likeCounts = posts[post.postId].likeCount;
    firestore
      .collection("Posts")
      .doc(post.postId)
      .update({
        whoLikes: arrayUnion(post.userId),
        likeCount: likeCounts + 1,
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
    const firestore = getFirestore();
    const firebase = getFirebase();
    console.log("postAction-post", post);
    //to unlike a post and delete information of user that liked it befor from whoLikes arry
    const arrayRemove = firebase.firestore.FieldValue.arrayRemove;
    const posts = getState().firestore.data.Posts;
    const likeCounts = posts[post.postId].likeCount;
    console.log("postUNLIKe", post);
    firestore
      .collection("Posts")
      .doc(post.postId)
      .update({
        whoLikes: arrayRemove(post.userId),
        likeCount: likeCounts - 1,
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

export const uploadImage = (post) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("upload Action:", post.imgFile);
    console.log(post);
    const authorId = getState().firebase.auth.uid;
    console.log("upload-userID", authorId);
    const firebase = getFirebase();
    const storageRef = firebase.storage().ref("Photos/" + post.imgFile.name);

    var task = storageRef.put(post.imgFile);

    task.on(
      firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
          default:
            console.log("Upload **");
        }
      },
      function (error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            // User canceled the upload
            console.log("User canceled the upload");
            break;
          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            console.log("Unknown error occurred, inspect error.serverResponse");
            break;
          default:
            console.log("UNKNOWN ERROR");
        }
      },
      function () {
        // Upload completed successfully, now we can get the download URL
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          post.url = downloadURL;
          console.log("File available at", downloadURL);
        });
      }
    );
    // task.then(() => createPost(post))
  };
};
