import firebase from 'firebase';

export default async () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBPrXZT9VfN1S2lVgvxZZ5jONZX6N4Nl_0',
    authDomain: 'rapidito-d11d3.firebaseapp.com',
    databaseURL: 'https://rapidito-d11d3.firebaseio.com',
    projectId: 'rapidito-d11d3',
    storageBucket: '',
    messagingSenderId: '901236979695',
    appId: '1:901236979695:web:7493253a77cf1b7a',
  };
  firebase.initializeApp(firebaseConfig);
};
