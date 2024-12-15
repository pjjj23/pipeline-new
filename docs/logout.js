// Import Firebase Auth SDK
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
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

// Sign out the user
signOut(auth).then(() => {
  // Redirect to login page after logging out
  window.location.href = 'login.html';
}).catch((error) => {
  console.error('Error signing out: ', error);
});
