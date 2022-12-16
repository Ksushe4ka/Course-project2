import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDbO1VGqCkyG3TNBRPh8jBRgT4hnp3yxY8",
  authDomain: "market-55bd1.firebaseapp.com",
  projectId: "market-55bd1",
  storageBucket: "market-55bd1.appspot.com",
  messagingSenderId: "419794918974",
  appId: "1:419794918974:web:9e6ccb1819d63280c6fb6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
