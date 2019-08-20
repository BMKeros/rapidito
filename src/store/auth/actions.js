import firebase from 'firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const response = await firebase.auth().signInWithPopup(googleProvider);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  try {
    await firebase.auth().signOut();
  } catch (error) {
    console.log(error);
  }
}
