// Import Firebase Authentication SDK
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";

// Your Firebase configuration
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
const auth = getAuth(app);

// Function to load user email into the dashboard
function loadUserEmail(user) {
  const emailElement = document.getElementById('email');
  emailElement.textContent = user.email || "Email not available"; // Display user email or a fallback message
}

// Check if the user is logged in
onAuthStateChanged(auth, (user) => {
  if (!user) {
    // Redirect to login page if not logged in
    window.location.href = 'login.html';
  } else {
    // Load user email if logged in
    loadUserEmail(user);
  }
});
