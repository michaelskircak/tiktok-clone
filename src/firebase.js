import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSGID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREID
};

console.log(firebaseConfig);

console.log(firebaseConfig.authDomain);

const firebaseApp =
  firebase.apps && firebase.apps.length > 0
    ? firebase.apps[0]
    : firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ experimentalForceLongPolling: false });
const db = firebase.firestore();
const fb = firebase;
export { db, fb };
export default firebaseApp;
