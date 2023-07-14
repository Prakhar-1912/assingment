// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuHNPMwGjd_lfj3kVdi8e82ePTelS7dFI",
  authDomain: "authentication-258c9.firebaseapp.com",
  projectId: "authentication-258c9",
  storageBucket: "authentication-258c9.appspot.com",
  messagingSenderId: "922978549621",
  appId: "1:922978549621:web:8eb11c74f0017d9da99d3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);