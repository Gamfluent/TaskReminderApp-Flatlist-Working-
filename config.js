import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzVXF9WNK8o2pmlJdgRx7sfNCcN0o4_OY",
    authDomain: "taskreminderapp-c03ae.firebaseapp.com",
    databaseURL: "https://taskreminderapp-c03ae-default-rtdb.firebaseio.com",
    projectId: "taskreminderapp-c03ae",
    storageBucket: "taskreminderapp-c03ae.appspot.com",
    messagingSenderId: "713570737681",
    appId: "1:713570737681:web:9f620573102753f7a15bb0"
  };
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
