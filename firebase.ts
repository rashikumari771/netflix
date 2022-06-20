// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBu-JOto02M274p2DouXPuBt7PiALmUKFw",
  authDomain: "netflix-b940a.firebaseapp.com",
  projectId: "netflix-b940a",
  storageBucket: "netflix-b940a.appspot.com",
  messagingSenderId: "593285633313",
  appId: "1:593285633313:web:7cdedfc9aac6da352cda60"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
