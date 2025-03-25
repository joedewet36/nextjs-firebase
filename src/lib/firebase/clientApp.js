'use client';

import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { auth } from "firebase-admin";


try
{
  const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  const authy = getAuth(firebaseApp);
} catch(error) {
    console.log('Error:', error)
}
export const firebaseApp = app;
export const auth = authy;
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);
