import firebase from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyADOukiGux9WAQXD7Fp6gphd1v1FyoJxxw",
    authDomain: "brifiworks.firebaseapp.com",
    databaseURL: "https://brifiworks.firebaseio.com",
    projectId: "brifiworks",
    storageBucket: "brifiworks.appspot.com",
    messagingSenderId: "1003977228175",
    appId: "1:1003977228175:web:36b749edaee59fd88dd5fa",
    measurementId: "G-7E0520BM9W"
  };

  firebase.initializeApp(config);

 

  export const firestore = firebase.firestore();

  

  export default firebase;