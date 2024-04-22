import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

//Removed key information for security purposes plus disabling of Firebase db due to effort needed for long term upkeep being deemed unnecessary

/* const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export async function getFeed() {
  const postsCol = collection(db, "posts");
  const postsSnapshot = await getDocs(postsCol);
  return (postsSnapshot?.docs.map((doc) => doc.data()));
}; */
