// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuz5RF99jZTz1orM6UdadBiUOwcTcq5wk",
  authDomain: "genius-car-services-client.firebaseapp.com",
  projectId: "genius-car-services-client",
  storageBucket: "genius-car-services-client.appspot.com",
  messagingSenderId: "628957734391",
  appId: "1:628957734391:web:9c8a44abff09c26c153af2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
