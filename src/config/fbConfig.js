import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage"; // for storage
import "firebase/storage"; // for storage
import "firebase/database"; // for realtime database
import "firebase/firestore"; // for cloud firestore
import "firebase/messaging"; // for cloud messaging
import "firebase/functions"; // for cloud functions

// Replace this with your own config details
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyC9Yqlv1I0Tu24IkxPzGrBE8VaUyPKIY-0",
  authDomain: "hand-to-hand-d9e6c.firebaseapp.com",
  databaseURL: "https://hand-to-hand-d9e6c.firebaseio.com",
  projectId: "hand-to-hand-d9e6c",
  storageBucket: "hand-to-hand-d9e6c.appspot.com",
  messagingSenderId: "330822259778",
  appId: "1:330822259778:web:e914a723e422951ebd89db",
  measurementId: "G-01PZT3F5JG",
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();
//make auth and firestore refrences
//const auth = firebase.auth();
//update firestore setting
//const storage = firebase.storage();

export default firebase;
