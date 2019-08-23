import firebase from 'firebase';
import { Notify, Loading } from 'quasar';

const googleProvider = new firebase.auth.GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const response = await firebase.auth().signInWithPopup(googleProvider);

    this.$router.replace('/dashboard');

    console.log(response);
  } catch (error) {
    console.log(error);
    Notify.create(error.message);
  }
}

export async function signInWithCredentials({ dispatch }, credentials) {
  console.log(credentials);
  try {
    const response = await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password);

    const { user } = response;

    if (user.emailVerified) {
      this.$router.push('/dashbaord');
    } else {
      dispatch('signOut');

      Notify.create('Email not verify');
    }

    console.log(response);
  } catch (error) {
    Notify.create(error.message);
    console.log(error);
  }
}

export async function signUp(_, data) {
  try {
    Loading.show();

    const response = await firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password);

    // TODO: Migrar a una cloud functions
    await response.user.sendEmailVerification();

    Notify.create('User register success');

    Loading.hide();
  } catch (error) {
    console.log(error);
    Loading.hide();
    Notify.create(error.message);
  }
}

export async function signOut() {
  try {
    await firebase.auth().signOut();
    this.$router.replace('/');
  } catch (error) {
    console.log(error);
  }
}
