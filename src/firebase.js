import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdjOiwpnV3nj6EdNf4B7HpoOZvOT6sH-g",
  authDomain: "slack-clone-labbaek.firebaseapp.com",
  projectId: "slack-clone-labbaek",
  storageBucket: "slack-clone-labbaek.appspot.com",
  messagingSenderId: "914815335597",
  appId: "1:914815335597:web:2d3f3e446e5decc9f49a24",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
