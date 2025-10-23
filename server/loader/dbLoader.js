import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "../config/config.js"; // your validated config


const firebaseApp = initializeApp(config.firebaseConfig);

const db = getFirestore(firebaseApp);

export default db;
