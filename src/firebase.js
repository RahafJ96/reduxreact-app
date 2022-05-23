import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCqO3m-A1BpAKuEG9DafGydkbgpw03Cv8",
  authDomain: "react-redux-tarjameh.firebaseapp.com",
  projectId: "react-redux-tarjameh",
  storageBucket: "react-redux-tarjameh.appspot.com",
  messagingSenderId: "1063377994068",
  appId: "1:1063377994068:web:94d08960a7c74df36ac8c1",
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };
