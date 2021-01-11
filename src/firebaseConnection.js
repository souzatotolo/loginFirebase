import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCamhrQmWFMtzJGeho10kbl0ihe2I6B4Pk",
  authDomain: "meuapp-efa5d.firebaseapp.com",
  databaseURL: "https://meuapp-efa5d-default-rtdb.firebaseio.com",
  projectId: "meuapp-efa5d",
  storageBucket: "meuapp-efa5d.appspot.com",
  messagingSenderId: "888849214692",
  appId: "1:888849214692:web:db251d93ae89add67c50f1",
  measurementId: "G-7X0S63C4G6"
};

if(!firebase.apps.length){

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
}

export default firebase;