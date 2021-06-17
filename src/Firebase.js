import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAE4D66LSY47v-vExAh-P9oK6dOkiiQVgg",
  databaseURL: "toktome-ba8f3.firebaseapp.com",
  projectId: "toktome-ba8f3",
  storageBucket: "toktome-ba8f3.appspot.com",
  messagingSenderId: "436454402580",
  appId: "1:436454402580:web:75865272381ad51b6f5501",
  measurementId: "G-GJQFPVLVQV"
}

firebase.initializeApp(config);

export default firebase

