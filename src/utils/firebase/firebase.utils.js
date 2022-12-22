import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ3ROkzJwQ4CnXcxiTRrYY0c_F9gp1buI",
  authDomain: "crwn-clothing-db-cb163.firebaseapp.com",
  projectId: "crwn-clothing-db-cb163",
  storageBucket: "crwn-clothing-db-cb163.appspot.com",
  messagingSenderId: "1059861059219",
  appId: "1:1059861059219:web:bad3b95cc79126d9c65f66",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
