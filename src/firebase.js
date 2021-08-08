import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyDUjrfgja1veOe1niAK1eRodta-h8SC2AQ",
    authDomain: "snapchat-clone-xlr.firebaseapp.com",
    projectId: "snapchat-clone-xlr",
    storageBucket: "snapchat-clone-xlr.appspot.com",
    messagingSenderId: "912646072236",
    appId: "1:912646072236:web:154c0b206575014c97fc09"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const storage = firebase.storage()
  const prodvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, prodvider }