import firebase, { auth, provider } from './firebase.js';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAIae2xJEZMbIyaTQ2ht4CnI0UHbJtL6fI",
  authDomain: "https://react-reminder-2.firebaseapp.com/?80876",
  databaseURL: "https://react-reminder-2.firebaseio.com/?80876",
  storageBucket: "react-reminder-2.appspot.com",
  messagingSenderId: "130650036145"
};
var firebase = firebase.initializeApp(config);
export default firebase;