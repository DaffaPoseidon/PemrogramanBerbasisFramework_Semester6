import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = {timestampsInSnapshots: true};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyCFSRgakF-pbyCtk5kxHntX7UF90CqAfuY",
  authDomain: "semester6-tugas12-pbf.firebaseapp.com",
  projectId: "semester6-tugas12-pbf",
  storageBucket: "semester6-tugas12-pbf.appspot.com",
  messagingSenderId: "641629624439",
  appId: "1:641629624439:web:ff56baf3b6017fbd388e72",
  measurementId: "G-8RJ80KDK9H"
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;


