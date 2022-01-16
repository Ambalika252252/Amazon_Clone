// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwbEctP0VepDnGz0W5U3gd6dblDEtf-po",
    authDomain: "clone-ff38a.firebaseapp.com",
    projectId: "clone-ff38a",
    storageBucket: "clone-ff38a.appspot.com",
    messagingSenderId: "976638903871",
    appId: "1:976638903871:web:5f0babbd6f27ced9281a8a",
    measurementId: "G-008H9PZTT2"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};