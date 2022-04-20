// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {get, getDatabase} from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  databaseURL: process.env.FIREBASE_DATABASEURL, 
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

