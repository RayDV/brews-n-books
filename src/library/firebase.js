// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Import getAnalytics conditionally if needed, or check for support
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";                   // User Authentication
import { getFirestore } from "firebase/firestore";         // Database
import { getStorage } from "firebase/storage";             // Optional: file uploads
import { getFunctions } from "firebase/functions";         // Backend logic
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// ---- Add dotenv configuration here ----
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
// ---------------------------------------

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize individual services
// Conditionally initialize Analytics (I think I could delete this later. I don't think this is apart of the test script problem)
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized.");
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
});

// Initialize individual services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

export { analytics, auth, db, storage, functions };