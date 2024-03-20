import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyC6XhLmAi__dCJPwqTgvs7HVfeh4eQfXVw",
  authDomain: "campuschatter-94994.firebaseapp.com",
  projectId: "campuschatter-94994",
  storageBucket: "campuschatter-94994.appspot.com",
  messagingSenderId: "136617986555",
  appId: "1:136617986555:web:e2dcd107ad44bd9526235e",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export async function getFeed() {
  const postsCol = collection(db, "posts");
  const postsSnapshot = await getDocs(postsCol);
  return (postsSnapshot?.docs.map((doc) => doc.data()));
};
