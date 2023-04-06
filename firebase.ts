// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWOqvm8hmI4NjGX8Lv8J_BWFZiMc2Pj6A",
  authDomain: "netflix-clone-bb3a4.firebaseapp.com",
  projectId: "netflix-clone-bb3a4",
  storageBucket: "netflix-clone-bb3a4.appspot.com",
  messagingSenderId: "397508304153",
  appId: "1:397508304153:web:ab8fe2c43b76ee6e917988"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
