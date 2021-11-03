import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA9P2j6JEVSKvEfzVChf9_ncDxrb4gdEmw",
  authDomain: "nextfire-2843d.firebaseapp.com",
  projectId: "nextfire-2843d",
  storageBucket: "nextfire-2843d.appspot.com",
  messagingSenderId: "169217721434",
  appId: "1:169217721434:web:100cad302ae6406fb30463",
  measurementId: "G-0W1JEDQV0C",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/// Helper functions
/**`
 * Gets a user/{uid} document with username
 * @param {string} username
 */

export async function getUserWithUsername(username) {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a Firestore document to JSON
 * @param {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}

export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
