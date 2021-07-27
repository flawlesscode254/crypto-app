import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxUVfkEw6v1JYiLBYVWUwyijXxs7zfCf4",
    authDomain: "crypto-app-78d42.firebaseapp.com",
    projectId: "crypto-app-78d42",
    storageBucket: "crypto-app-78d42.appspot.com",
    messagingSenderId: "5597744419",
    appId: "1:5597744419:web:ecdc02b60b964ec920d096"
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore()
const auth = firebase.auth()

export default db
export { auth }