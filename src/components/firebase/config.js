import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBub1bbwBK-dabtgwL_ya3OYSbfyDv831c",
  authDomain: "ddecommerce-a0b1c.firebaseapp.com",
  projectId: "ddecommerce-a0b1c",
  storageBucket: "ddecommerce-a0b1c.appspot.com",
  messagingSenderId: "191731049408",
  appId: "1:191731049408:web:ae4ce4e0cae7e78e1bde25"
};
// init firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export {db}