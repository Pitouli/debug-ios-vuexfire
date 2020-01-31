import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init goes here
const config = {
    apiKey: "AIzaSyATn5N1tm21Jup5P0Xie1MGW5G63yCRFag",
    authDomain: "debug-ios-vuexfire.firebaseapp.com",
    databaseURL: "https://debug-ios-vuexfire.firebaseio.com",
    projectId: "debug-ios-vuexfire",
    storageBucket: "debug-ios-vuexfire.appspot.com",
    messagingSenderId: "124944452752",
    appId: "1:124944452752:web:2c1dc675adf4d915dd9c15"
  };
  firebase.initializeApp(config);
  
// Get a Firestore instance
export const firestore = firebase.firestore()
export const auth = firebase.auth()

// We enable offline support (with multi tab support)
firebase.firestore().enablePersistence({
    synchronizeTabs: true,
  })
    .catch((err) => {
      if (err.code === 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled
        // in one tab at a a time.
        // ...
      } else if (err.code === 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
      }
    });

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
/*
const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }
*/

export default {
    firestore,
    auth
    // currentUser,
    // usersCollection
  };