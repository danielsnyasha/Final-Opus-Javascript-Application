// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCZkDPHDQ2u3ebfDNeQNc1-nDf0MMwgpTA",
    authDomain: "lcv-final-opus.firebaseapp.com",
    projectId: "lcv-final-opus",
    storageBucket: "lcv-final-opus.appspot.com",
    messagingSenderId: "506156423758",
    appId: "1:506156423758:web:1c1c9c76f2c0bdce39011f",
    measurementId: "G-RZB9GRK6W1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

export {db, auth, storage};