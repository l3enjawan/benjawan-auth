import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATebrHzXZTIg22CCdrw0aNpTtWbOx8JZA",
  authDomain: "benjawan-4e880.firebaseapp.com",
  projectId: "benjawan-4e880",
  appId: "1:376358245553:web:6fd60646f216f23b21fe90",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
export const db = getFirestore(app);
