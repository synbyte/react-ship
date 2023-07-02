import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let db = false;

export const getDb = () => {
    if (!db) {
        const firebaseConfig = {
            apiKey: "AIzaSyD7Czj4x0xUpyGY9zmU-tIKAOX9ygBs0Vw",
            authDomain: "ship-b9753.firebaseapp.com",
            projectId: "ship-b9753",
            storageBucket: "ship-b9753.appspot.com",
            messagingSenderId: "665129169941",
            appId: "1:665129169941:web:3986c1c2a504f0596f0a1c",
            measurementId: "G-P0MFD41BL4"
        }

        const app = initializeApp(firebaseConfig)

        db = getFirestore(app)
    }

    return db
}