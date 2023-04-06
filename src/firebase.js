// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQBqjjdIlBqUdenhEOfGg9Z_4gNRYs2M8",
  authDomain: "bookingapp-92a69.firebaseapp.com",
  databaseURL:
    "https://bookingapp-92a69-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bookingapp-92a69",
  storageBucket: "bookingapp-92a69.appspot.com",
  messagingSenderId: "79355875629",
  appId: "1:79355875629:web:25794a2103ac27707103a4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();
