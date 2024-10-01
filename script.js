// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgQMn_xrXc1yewdFivI4esb8UZGe3-zUM",
    authDomain: "login-f7b13.firebaseapp.com",
    projectId: "login-f7b13",
    storageBucket: "login-f7b13.appspot.com",
    messagingSenderId: "37059316507",
    appId: "1:37059316507:web:05fff1d23e1585ea55e1be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google sign-in logic
document.getElementById('google-login').addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // Handle successful sign-in
            const user = result.user;
            console.log('User signed in:', user);
            // Redirect to a different page (GitHub in this case)
            window.location.href = "https://allysarebato.github.io/profile/";
        })
        .catch((error) => {
            // Handle errors
            console.error('Error during sign-in:', error);
        });
});
