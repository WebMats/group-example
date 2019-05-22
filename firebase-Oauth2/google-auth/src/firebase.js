import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    "CREDENTIALS": "YOUR PROJECT'S FIREBASE CREDENTIALS"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({
    "prompt": "select_account"
})

export default firebase;