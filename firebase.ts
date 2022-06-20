// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCFxwi3rbDZQG7q0BdJBQ0xU6R3kGXVWlQ",
    authDomain: "netflix-691c2.firebaseapp.com",
    projectId: "netflix-691c2",
    storageBucket: "netflix-691c2.appspot.com",
    messagingSenderId: "587932855327",
    appId: "1:587932855327:web:193ecddbfee0afd117f92a"
  };
  

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
