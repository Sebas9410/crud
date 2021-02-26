import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCawaoXcvHOhLDZqGoszV262WZsJ15rEJo",
    authDomain: "crud-d7e08.firebaseapp.com",
    projectId: "crud-d7e08",
    storageBucket: "crud-d7e08.appspot.com",
    messagingSenderId: "51191404339",
    appId: "1:51191404339:web:aba086cbbb59157afa5046"
  }


  export const  firebaseApp = firebase.initializeApp(firebaseConfig)