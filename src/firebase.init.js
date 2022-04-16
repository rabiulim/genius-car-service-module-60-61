// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFVwXb72kYLw7UKT4jXVPKgil-eaKiJrA",
  authDomain: "genius-car-services-f036c.firebaseapp.com",
  projectId: "genius-car-services-f036c",
  storageBucket: "genius-car-services-f036c.appspot.com",
  messagingSenderId: "315044439089",
  appId: "1:315044439089:web:7e7ec8d6fb2bb6f960a110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
