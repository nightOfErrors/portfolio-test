import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAO4NzsFv5SbgMBe7Z8_clrJsKULApHa58",
    authDomain: "portfolio-a9f62.firebaseapp.com",
    projectId: "portfolio-a9f62",
    storageBucket: "portfolio-a9f62.appspot.com",
    messagingSenderId: "785489828456",
    appId: "1:785489828456:web:165b8cc16cff5fcffa79dd",
    measurementId: "G-85WMKD01EP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;