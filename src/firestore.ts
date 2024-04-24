import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXtMvry7nU5b4Lm5DIGiHgbTp6qJlSiUc",
  authDomain: "generic-team5.firebaseapp.com",
  projectId: "generic-team5",
  storageBucket: "generic-team5.appspot.com",
  messagingSenderId: "930773258326",
  appId: "1:930773258326:web:1b984cfc9626a783816bf7",
  measurementId: "G-2PWTMY1SR8"
};


//initialize firebase
const myapp: FirebaseApp = initializeApp(firebaseConfig);
const db: Firestore = getFirestore(myapp);
export default db;
