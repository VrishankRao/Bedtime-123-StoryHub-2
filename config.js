import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBXnxBnpo9AzH0ujOCmSNfJrFh-DXN2SUQ",
    authDomain: "story-hub-afc2d.firebaseapp.com",
    databaseURL: "https://story-hub-afc2d.firebaseio.com",
    projectId: "story-hub-afc2d",
    storageBucket: "story-hub-afc2d.appspot.com",
    messagingSenderId: "136375757400",
    appId: "1:136375757400:web:07d7a00bda58e8049b782d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();