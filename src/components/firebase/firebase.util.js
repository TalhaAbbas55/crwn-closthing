import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyD9mTWpxUmBFzfRB82-LfKRdJ8zt86q59Q",
    authDomain: "clothing-672ae.firebaseapp.com",
    databaseURL: "https://clothing-672ae-default-rtdb.firebaseio.com",
    projectId: "clothing-672ae",
    storageBucket: "clothing-672ae.appspot.com",
    messagingSenderId: "297659451123",
    appId: "1:297659451123:web:d00f1d39b037441a2ad986"
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData
            });
        } catch (error) {
            console.log('error creating users', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;