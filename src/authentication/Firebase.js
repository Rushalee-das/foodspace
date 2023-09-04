import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCwOfA3r4iRCISd_ivPhPyNtcG1uFU2Yf0",
    authDomain: "foodspace-d2b39.firebaseapp.com",
    projectId: "foodspace-d2b39",
    storageBucket: "foodspace-d2b39.appspot.com",
    messagingSenderId: "815366006934",
    appId: "1:815366006934:web:4af862711d355d9b00bab7",
    measurementId: "G-RDXKFMMY9N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const firstName = name.split(' ')[0];
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", firstName);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};