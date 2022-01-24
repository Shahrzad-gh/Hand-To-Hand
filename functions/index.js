const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

const createNotification = (notification) => {
  return admin
    .firestore()
    .collection("notifications")
    .add(notification)
    .then((doc) => console.log("notification added", doc));
};

exports.postliked = functions.database.ref("Posts/{postId}")
  .onUpdate((change, context) => {
    const before = change.before.val();
    //const after = change.after.val();
    console.log("before",before);
    //console.log("after",after);
    const notification = {
      content: "Added a new like",
     // user: `${post.authorFirstName} ${post.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };
    return createNotification(notification);
  });

exports.postCreated = functions.firestore
  .document("Posts/{postId}")
  .onCreate((doc) => {
    const post = doc.data();
    console.log("ON_CREATE", post);
    const notification = {
      content: "Added a new post",
      user: `${post.authorFirstName} ${post.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp(),
    };

    return createNotification(notification);
  });

exports.userJoined = functions.auth.user().onCreate((user) => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then((doc) => {
      const newUser = doc.data();
      const notification = {
        content: "Joined the H2H",
        user: `${newUser.firstName} ${newUser.lastName}`,
        time: admin.firestore.FieldValue.serverTimestamp(),
      };

      return createNotification(notification);
    });
});
