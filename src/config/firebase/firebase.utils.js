// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTcEq0yRJ7wbYqpy_yNu83Wsvt73qghJc",
  authDomain: "silverlake-97dda.firebaseapp.com",
  projectId: "silverlake-97dda",
  storageBucket: "silverlake-97dda.appspot.com",
  messagingSenderId: "851311038013",
  appId: "1:851311038013:web:729eef3000d500d3d52454",
  measurementId: "G-QGT56M7E8K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);