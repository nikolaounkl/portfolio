import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCbJlWSPt-fJYrIFcO6_30rOWbmK7EZAk4",
    authDomain: "nikolaounikolaos-5544f.firebaseapp.com",
    databaseURL: "https://nikolaounikolaos-5544f.firebaseio.com",
    projectId: "nikolaounikolaos-5544f",
    storageBucket: "nikolaounikolaos-5544f.appspot.com",
    messagingSenderId: "798749035510"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
