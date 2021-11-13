import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBxEKdxTTY8KG7tyXuiLGqByYCuV9WkKs",
  authDomain: "userrearedfire.firebaseapp.com",
  projectId: "userrearedfire",
  storageBucket: "userrearedfire.appspot.com",
  messagingSenderId: "974339293832",
  appId: "1:974339293832:web:0921778370969bc765953d",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
