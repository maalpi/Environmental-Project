// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl5NYPILCIaIy-i9IK9g6l1Gq5vYxEBGQ",
  authDomain: "ambiental-112b3.firebaseapp.com",
  projectId: "ambiental-112b3",
  storageBucket: "ambiental-112b3.appspot.com",
  messagingSenderId: "217491249145",
  appId: "1:217491249145:web:c4a70e08c2e0591df44f28",
  measurementId: "G-BRK8ZWGNLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const storage = getStorage(app);

//export { database, storage };
export default database;