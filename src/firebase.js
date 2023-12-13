import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCbeRxDukykDCKaQ673WtgwcTL_BndwnM",
  authDomain: "chat-app-react-c4d1d.firebaseapp.com",
  projectId: "chat-app-react-c4d1d",
  storageBucket: "chat-app-react-c4d1d.appspot.com",
  messagingSenderId: "875830917355",
  appId: "1:875830917355:web:0f9d6eca7cab92aaaba6ae"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);