import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfGlCvE0dPdBYZitYXn2QXuzXjRIk8gh8",
    authDomain: "twitter-clone-3697e.firebaseapp.com",
    projectId: "twitter-clone-3697e",
    storageBucket: "twitter-clone-3697e.appspot.com",
    messagingSenderId: "661224585047",
    appId: "1:661224585047:web:01b77006d18699a747b012",
    measurementId: "G-6WJTRHX2Y7"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;