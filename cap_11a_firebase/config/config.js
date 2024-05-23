// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJBLEDacV7LlJvv03X_ipZ1rcuWEU1T8k",
  authDomain: "lista-de-linguagens-a0557.firebaseapp.com",
  databaseURL: "https://lista-de-linguagens-a0557-default-rtdb.firebaseio.com",
  projectId: "lista-de-linguagens-a0557",
  storageBucket: "lista-de-linguagens-a0557.appspot.com",
  messagingSenderId: "395050092310",
  appId: "1:395050092310:web:6d86d50329f48940d17237",
  measurementId: "G-Y6PC4PQ07J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);