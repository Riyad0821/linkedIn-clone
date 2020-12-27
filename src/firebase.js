import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB65QFjCmI9V7BygjDSN2FiDKmOiPTmHBI",
    authDomain: "linkedin-clone-2b3c0.firebaseapp.com",
    projectId: "linkedin-clone-2b3c0",
    storageBucket: "linkedin-clone-2b3c0.appspot.com",
    messagingSenderId: "377794740957",
    appId: "1:377794740957:web:f4d7979cdda0f8085a9134"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };