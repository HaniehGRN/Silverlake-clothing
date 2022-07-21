// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile
} from "firebase/auth";
import { getFirestore, doc, getDocs, collection, query, get, docs, where } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpET_8ZyhRKHM_eroZlwUeoC_nL-kfOY",
  authDomain: "silverlake-f496b.firebaseapp.com",
  projectId: "silverlake-f496b",
  storageBucket: "silverlake-f496b.appspot.com",
  messagingSenderId: "109854693674",
  appId: "1:109854693674:web:2489981040cc29b418e653"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
const auth = getAuth();

export const SignUpToFirestore = (email, password, displayName) => {
  createUserWithEmailAndPassword(auth, email, password).then((user) => {
    const displayname = displayName;
    updateProfile(auth.currentUser, { displayName: displayname }).then(() => {
      console.log("user profile updated !")
    }).catch(error => {
      alert(error.message, error.code)
    })
  }).catch(error => {
    alert(error.message, error.code)
  })
  return (auth.currentUser)
}

export const SignInToFirestore = async ({ email, password }) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  }
}

export const GoogleSignInToFirestore = async () => {
  try {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return await signInWithPopup(auth, provider);
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorCode, errorMessage);
  }
}

export const fetchCollections = async () => {
  const q = query(collection(db, "products"));
  const querySnapshot = await getDocs(q);
  const transformedCollection = querySnapshot.docs.map((docSnapshot) => {
    console.log(docSnapshot.data())
    const { title, items } = docSnapshot.data();
    return {
      title,
      items,
      id: docSnapshot.id
    }
  })
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title] = collection;
    return accumulator;
  }, {});
  // return querySnapshot;
}