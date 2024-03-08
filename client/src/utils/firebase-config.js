import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUrQqUATLrbpLEzskVVhSwJOsNH-G5quk",
  authDomain: "netflix-clones-32df3.firebaseapp.com",
  projectId: "netflix-clones-32df3",
  storageBucket: "netflix-clones-32df3.appspot.com",
  messagingSenderId: "764526254338",
  appId: "1:764526254338:web:9a07742896c81f74728a1b"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
