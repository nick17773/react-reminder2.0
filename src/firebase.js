import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAIae2xJEZMbIyaTQ2ht4CnI0UHbJtL6fI",
  authDomain: "https://react-reminder-2.firebaseapp.com/",
  databaseURL: "https://react-reminder-2.firebaseio.com/",
  storageBucket: "react-reminder-2.appspot.com",
  messagingSenderId: "130650036145"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
