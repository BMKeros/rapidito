import firebase from 'firebase';

export default async ({ store }) => {
  firebase.auth().onAuthStateChanged((user) => {
    const data = user ? { uid: user.uid, email: user.email } : null;
    store.commit('auth/updateUser', data);
  });
};
