import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD1Cvntq2DyVXwMCPgktuM2Ut0Gn5C5pYo",
    authDomain: "portafolio-6ac99.firebaseapp.com",
    projectId: "portafolio-6ac99",
    storageBucket: "portafolio-6ac99.appspot.com",
    messagingSenderId: "870967128066",
    appId: "1:870967128066:web:835739a1c918120834371b",
    measurementId: "G-2FZY5BS5GG"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
