import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAZd0_3e_Yh2S9M73a5Rxk-qlk-4bPnyN8",
  authDomain: "marianovillalonga-abac8.firebaseapp.com",
  databaseURL: "https://marianovillalonga-abac8.firebaseio.com",
  projectId: "marianovillalonga-abac8",
  storageBucket: "marianovillalonga-abac8.appspot.com",
  messagingSenderId: "792283038793",
  appId: "1:792283038793:web:b8dfbf08b3881688a4ab98",
  measurementId: "G-W94F79FT3W"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);