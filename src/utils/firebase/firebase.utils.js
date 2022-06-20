import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhGDoQ3P5_wKAJvh8Qg2srcrj2fBTynt0",
  authDomain: "crown-shop-db-8a7e6.firebaseapp.com",
  projectId: "crown-shop-db-8a7e6",
  storageBucket: "crown-shop-db-8a7e6.appspot.com",
  messagingSenderId: "252522473397",
  appId: "1:252522473397:web:b14dd8184fb55c6deb9bfc",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid); //db-Data Base, "users" - collection, userAuth.uid - unique id

  const userSnapshot = await getDoc(userDocRef);

  //if user data does not exists
  //create /  set the document with data from userAuth in my collection
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //if user data exists
  //return userDocRef
  return userDocRef;
};
