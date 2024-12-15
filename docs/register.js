// Import the necessary functions from Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLcft2Kv2n_mp-AXRccIpYXi-gqOM89-o",
    authDomain: "pipeline-sirteo.firebaseapp.com",
    projectId: "pipeline-sirteo",
    storageBucket: "pipeline-sirteo.firebasestorage.app",
    messagingSenderId: "955821809232",
    appId: "1:955821809232:web:90d8392858ae19093c7b55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Handle form submission
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const emailPhone = document.getElementById('emailPhone').value;
  const password = document.getElementById('password').value;

  // Check if the input is a valid email or phone number
  if (emailPhone.includes('@')) {
    // Email registration
    createUserWithEmailAndPassword(auth, emailPhone, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Registration successful! Welcome!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  } else {
    // Phone registration (using Firebase phone number authentication)
    const appVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // Do something when captcha is solved
      }
    }, auth);

    signInWithPhoneNumber(auth, emailPhone, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = prompt("Enter the verification code sent to your phone:");
        return confirmationResult.confirm(verificationCode);
      })
      .then((result) => {
        alert('Registration successful!');
        window.location.href = 'login.html'; // Redirect to login page
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert('Error: ' + errorMessage);
      });
  }
});
