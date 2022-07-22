import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBFsv1MLlPiStqXMlXgC8BqETo4RZXKog",
  authDomain: "evernote-clone-610b7.firebaseapp.com",
  projectId: "evernote-clone-610b7",
  storageBucket: "evernote-clone-610b7.appspot.com",
  messagingSenderId: "992550947159",
  appId: "1:992550947159:web:fa0295b10e69979b749612",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
