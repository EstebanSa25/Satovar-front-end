// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyC-Fd5DD_74FPCbt_8J1F2w0yQwbX82-1Q',
    authDomain: 'satovar-948e6.firebaseapp.com',
    projectId: 'satovar-948e6',
    storageBucket: 'satovar-948e6.appspot.com',
    messagingSenderId: '596825872377',
    appId: '1:596825872377:web:a9c80f234311875d4d4f28',
    measurementId: 'G-EJXYQT5MXB',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
