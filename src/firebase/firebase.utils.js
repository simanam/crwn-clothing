import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDvNQhq_WKoPimrJfbTwmR8LpBI1XQiM1Q",
    authDomain: "crwn-db-8c098.firebaseapp.com",
    databaseURL: "https://crwn-db-8c098.firebaseio.com",
    projectId: "crwn-db-8c098",
    storageBucket: "crwn-db-8c098.appspot.com",
    messagingSenderId: "165077421368",
    appId: "1:165077421368:web:2b4e073528bdaf892cc5cd",
    measurementId: "G-KL0CYKTGD7"
};

firebase.initializeApp(config);
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })

        } catch (error) {
            console.log('error creating user', error.message);

        };


    }

    return userRef
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;