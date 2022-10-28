import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBLIm1DVmpOzVLAYoyL54_kHNVUHSmD0pw",
    authDomain: "food-delivery-app-6aa86.firebaseapp.com",
    databaseURL: "https://food-delivery-app-6aa86-default-rtdb.firebaseio.com",
    projectId: "food-delivery-app-6aa86",
    storageBucket: "food-delivery-app-6aa86.appspot.com",
    messagingSenderId: "814182755272",
    appId: "1:814182755272:web:76d1380cf06d363051aefd"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };