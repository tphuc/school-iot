import firebase from 'firebase';
import 'firebase/database'; 
const config = {
  apiKey: "AIzaSyDEbd7n1pjRT2nIU-XaK3Vj30IOBQwn3kM",
  authDomain: "https://monsterkyle-912c1.web.app/",
  databaseURL: "https://monsterkyle-912c1-default-rtdb.europe-west1.firebasedatabase.app"
};
firebase.initializeApp(config);

const db = firebase.database()
export { db }