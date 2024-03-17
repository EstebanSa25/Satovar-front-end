import { FirebaseAuth } from './config';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        //  const credential = GoogleAuthProvider.credentialFromResult(result);
        // console.log(result);
        const { displayName, uid, photoURL, email, phoneNumber } = result.user;

        return {
            ok: true,
            //user info
            displayName,
            email,
            photoURL,
            uid,
            phoneNumber,
        };
    } catch (error) {
        const errorCode = (error as Error).name;
        const errorMessage = (error as Error).message;
        return {
            ok: false,
            errorMessage,
            errorCode,
        };
    }
};

export const registerUserWithEmailPassword = async ({
    email,
    password,
    displayName,
    phoneNumber,
}: {
    email: string;
    password: string;
    displayName: string;
    phoneNumber: string;
}) => {
    try {
        const resp = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        const { photoURL, uid } = resp.user;

        //TODO: actualizar el displayName en Firebase//

        if (FirebaseAuth.currentUser) {
            await updateProfile(FirebaseAuth.currentUser, { displayName });
        }

        return {
            ok: true,
            uid,
            photoURL,
            displayName,
            email,
            phoneNumber,
        };
    } catch (error) {
        const errorMessage = (error as Error).message;
        return {
            ok: false,
            error: errorMessage,
        };
    }
};
export const loginWithEmailPassword = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}) => {
    try {
        const resp = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        const { uid, displayName, photoURL } = resp.user;

        return {
            ok: true,
            uid,
            displayName,
            photoURL,
        };
    } catch (error) {
        const errorMessage = (error as Error).message;
        return {
            ok: false,
            error: errorMessage,
        };
    }
};
export const logoutFireBase = async () => {
    return await FirebaseAuth.signOut();
};
