import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCdBaFRaDeKe9u0mbTx5_UuF5JX07iXXhY",
  authDomain: "netflix-clone-b5955.firebaseapp.com",
  projectId: "netflix-clone-b5955",
  storageBucket: "netflix-clone-b5955.appspot.com",
  messagingSenderId: "695958428738",
  appId: "1:695958428738:web:ed876c65ff0210229fa1db",
  measurementId: "G-ZQNVCJ4C96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);