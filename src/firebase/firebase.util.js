import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

const config = {

        apiKey: "AIzaSyD8QmVPKWMEFaUS9igN_sHHh1B7odDG70c",
        authDomain: "sallabh-db.firebaseapp.com",
        databaseURL: "https://sallabh-db.firebaseio.com",
        projectId: "sallabh-db",
        storageBucket: "sallabh-db.appspot.com",
        messagingSenderId: "664640212573",
        appId: "1:664640212573:web:e22ad38c4a0183f98fc7b4",
        measurementId: "G-DZCJG45M4N"

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;