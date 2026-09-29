import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics, isSupported } from 'firebase/analytics'

// Firebase web config values are public identifiers, not secrets.
// Access is protected by Firestore security rules, not by hiding these.
const firebaseConfig = {
  apiKey: 'AIzaSyDdmGEjuVD7o_JNzs6MFGFbs6X897j6AsY',
  authDomain: 'aditech-projects.firebaseapp.com',
  projectId: 'aditech-projects',
  storageBucket: 'aditech-projects.firebasestorage.app',
  messagingSenderId: '461394775826',
  appId: '1:461394775826:web:24026587ff3b4732c62dcb',
  measurementId: 'G-NZFXQ29JRQ',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

// Only this Google account can add or delete projects (enforced by Firestore rules too).
export const ADMIN_EMAIL = 'adisanureni2023@gmail.com'

// Analytics throws in unsupported environments (some browsers, private mode), so guard it.
isSupported().then((ok) => { if (ok) getAnalytics(app) }).catch(() => {})