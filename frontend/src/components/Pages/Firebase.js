
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
