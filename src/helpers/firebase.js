import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/database';

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE
})

export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();
export const firestore = app.firestore();
export const database = firebase.database();
export const storage = firebase.storage();

firestore.enablePersistence().catch(err => {
    if (err.code === 'failed-precondition') {
        console.log('persistence failed');
    }
    else if (err.code === 'umimplemented') {
        console.log('not avaialble');
    }
})



export default app
