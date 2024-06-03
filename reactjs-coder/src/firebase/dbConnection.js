// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4DpljjfpxcmBbIRopcVU7sNmRoeM7sMg",
  authDomain: "pokestore-jusce-cabrera.firebaseapp.com",
  projectId: "pokestore-jusce-cabrera",
  storageBucket: "pokestore-jusce-cabrera.appspot.com",
  messagingSenderId: "1028071667502",
  appId: "1:1028071667502:web:3698bc0a7461b8c805acbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);