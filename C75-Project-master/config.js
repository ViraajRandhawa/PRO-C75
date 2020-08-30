import * as firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyDeahuol68UqUP7wKHYz2WY6Hnfn-XezuI",
  authDomain: "c75-project.firebaseapp.com",
  databaseURL: "https://c75-project.firebaseio.com",
  projectId: "c75-project",
  storageBucket: "c75-project.appspot.com",
  messagingSenderId: "286855689095",
  appId: "1:286855689095:web:2cd9e32c2ae3a1592a9922"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();