import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNmLmHBVbK-po6ji8qJTf2gEjQb6IbbHg",
  authDomain: "clone-62574.firebaseapp.com",
  projectId: "clone-62574",
  storageBucket: "clone-62574.appspot.com",
  messagingSenderId: "273843555778",
  appId: "1:273843555778:web:1c84f46e3a67deeeb95a5b",
  measurementId: "G-56H6ZQMN15",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
