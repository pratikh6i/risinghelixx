// Firebase Configuration
// For demo purposes, Firebase is disabled. Uncomment and add your credentials to enable.

// import { initializeApp } from 'firebase/app'
// import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Replace with your Firebase configuration from Firebase Console
const firebaseConfig = {
    apiKey: "demo-mode",
    authDomain: "demo.firebaseapp.com",
    projectId: "demo-project",
    storageBucket: "demo.appspot.com",
    messagingSenderId: "000000000000",
    appId: "demo-app-id"
}

// Mock auth object for demo mode
export const auth = {
    currentUser: null,
    onAuthStateChanged: (callback) => {
        callback(null)
        return () => { }
    }
}

export const googleProvider = {}

// To enable Firebase:
// 1. Uncomment the imports above
// 2. Add your Firebase config
// 3. Uncomment below:
// const app = initializeApp(firebaseConfig)
// export const auth = getAuth(app)
// export const googleProvider = new GoogleAuthProvider()

export default {}
