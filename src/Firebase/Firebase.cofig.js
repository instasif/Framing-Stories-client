// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,

    apiKey: "AIzaSyDqm-UywGor2Hw-diFCHB-nDcd2TPkSsuk",
    authDomain: "framing-stories.firebaseapp.com",
    projectId: "framing-stories",
    storageBucket: "framing-stories.appspot.com",
    messagingSenderId: "822866072147",
    appId: "1:822866072147:web:75aa561330c5e6cd72aca6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;