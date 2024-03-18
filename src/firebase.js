import * as firebase from "firebase/app";
import "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC6XhLmAi__dCJPwqTgvs7HVfeh4eQfXVw",
  authDomain: "campuschatter-94994.firebaseapp.com",
  projectId: "campuschatter-94994",
  storageBucket: "campuschatter-94994.appspot.com",
  messagingSenderId: "136617986555",
  appId: "1:136617986555:web:e2dcd107ad44bd9526235e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore;
export default db;
