import firebase from "firebase/app";
// To import firebase database
import "firebase/firestore";
// To import firebase auth
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAso0-3HC_mvXugBYuKFu5cM7rzQFip_Bc",
  authDomain: "clothingshop-db.firebaseapp.com",
  databaseURL: "https://clothingshop-db.firebaseio.com",
  projectId: "clothingshop-db",
  storageBucket: "clothingshop-db.appspot.com",
  messagingSenderId: "292095534051",
  appId: "1:292095534051:web:b60ff1e66dab59546436d6",
  measurementId: "G-V979ER9873"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
