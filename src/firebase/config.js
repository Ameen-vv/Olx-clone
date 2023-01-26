import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA1OXFy8T8iVdnAN6mlRP_oSFpBsIJpmLg",
    authDomain: "olx-clone-be128.firebaseapp.com",
    projectId: "olx-clone-be128",
    storageBucket: "olx-clone-be128.appspot.com",
    messagingSenderId: "540264062537",
    appId: "1:540264062537:web:46f7aa4d57c20b5c0fe998",
    measurementId: "G-0ZNYWHTJ8B"
  };

  export default firebase.initializeApp(firebaseConfig)