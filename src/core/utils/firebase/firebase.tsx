import firebase from "firebase/app";
import { firebaseConfig } from "../../config/config";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);

type SocialType = "google" | "github";

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signInWithSocial = (type: SocialType) => {
  const provider =
    type === "google"
      ? new firebase.auth.GoogleAuthProvider()
      : new firebase.auth.GithubAuthProvider();

  provider.setCustomParameters({ prompt: "select_account" });
  return () => auth.signInWithPopup(provider);
};

export default firebase;
