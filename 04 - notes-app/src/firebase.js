// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7CE32hvDajJL7Ec4t1Y8t52wi7sg0btk",
  authDomain: "react-notes-6bffd.firebaseapp.com",
  projectId: "react-notes-6bffd",
  storageBucket: "react-notes-6bffd.appspot.com",
  messagingSenderId: "1094126694345",
  appId: "1:1094126694345:web:eaf60d26564daa23af4218",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = Firestore(app);
const notesCollection = collection(db, "notes");
