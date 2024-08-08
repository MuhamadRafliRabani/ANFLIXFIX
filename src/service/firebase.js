// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Initialize Firebase if it hasn't been initialized before
if (!getApps().length) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
  };
  initializeApp(firebaseConfig);
}

export const Auth = getAuth();

// Define the asynchronous function for signing up with email and password
export const signUp = async (values) => {
  const { email, password } = values;
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Do something with the signed-up user
    return user;
  } catch (error) {
    // Handle error

    console.log(error.code);
    throw error;
  }
};

export const signIn = async (values) => {
  const { email, password } = values;
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Do something with the signed-in user
    return user;
  } catch (error) {
    // Handle error
    throw error;
  }
};

export const SignOut = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};
