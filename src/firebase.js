// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";
// import "firebase/compat/messaging";
// const firebaseConfig = {
//   apiKey: "AIzaSyCQd0K1lzMtprolyot3N9HJtR2hf4UoXEM",
//   authDomain: "trax-cloud-messaging.firebaseapp.com",
//   projectId: "trax-cloud-messaging",
//   storageBucket: "trax-cloud-messaging.appspot.com",
//   messagingSenderId: "790939580320",
//   appId: "1:790939580320:web:50605cb6b22f47c61696c5",
//   measurementId: "G-0BSWK6D81S"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export default firebaseApp
// export default firebaseApp;import firebase from 'firebase/app';
// import 'firebase/messaging';
// import firebase from "firebase/compat/app";
// const firebaseConfig = {
//   apiKey: "AIzaSyD255oy6q2Vyuj9eAoY4tMIGbGc3NebtSA",
//   authDomain: "trax-5abbd.firebaseapp.com",
//   projectId: "trax-5abbd",
//   storageBucket: "trax-5abbd.appspot.com",
//   messagingSenderId: "930835251839",
//   appId: "1:930835251839:web:b2f93f4541d8f76afab54a",
// };

// firebase.initializeApp(firebaseConfig);
// const messaging = firebase.messaging();

// export const getToken = (setTokenFound) => {
//   return messaging.getToken({vapidKey: 'BH97plGjFleE6fvFuH_08jfyKG4GTXlZg4tdUcUAwwjOjL0xSPoKAdruBMhW0Qw9G6f7UvaL6yr1VyNbkUvjj8I'}).then((currentToken) => {
//     if (currentToken) {
//       console.log('current token for client: ', currentToken);
//       setTokenFound(true);
//       // Track the token -> client mapping, by sending to backend server
//       // show on the UI that permission is secured
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//       setTokenFound(false);
//       // shows on the UI that permission is required 
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // catch error while creating client token
//   });
// }

// export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
//});
import firebase from 'firebase/app';
import 'firebase/messaging';
const firebaseConfig = {
  apiKey: "AIzaSyCQd0K1lzMtprolyot3N9HJtR2hf4UoXEM",
  authDomain: "trax-cloud-messaging.firebaseapp.com",
  projectId: "trax-cloud-messaging",
  storageBucket: "trax-cloud-messaging.appspot.com",
  messagingSenderId: "790939580320",
  appId: "1:790939580320:web:50605cb6b22f47c61696c5",
  measurementId: "G-0BSWK6D81S"
};

const firbaseApp=firebase.initializeApp(firebaseConfig);
// const messaging=firebase.messaging()
export default firbaseApp

// const messaging = firebase.messaging();
// export const getToken = (setTokenFound) => {
//   return messaging.getToken({vapidKey: 'BCZcbbHDnJHK78ZSMmizzFI2tmqQLXEKEdDChzE-eOrPRVcfUTC5xzFlXGrVPS1XWogLGyQYPt_xiG47kOq0I5c'}).then((currentToken) => {
//     console.log('currentToken',currentToken)
//     if (currentToken) {
//       console.log('current token for client: ', currentToken);
//       setTokenFound(true);
//       // Track the token -> client mapping, by sending to backend server
//       // show on the UI that permission is secured
//     } else {
//       console.log('No registration token available. Request permission to generate one.');
//       setTokenFound(false);
//       // shows on the UI that permission is required 
//     }
//   }).catch((err) => {
//     console.log('An error occurred while retrieving token. ', err);
//     // catch error while creating client token
//   });
// }
// const messaging=firebase.messaging()
// messaging.onBackgroundMessage(
//   alert('hello')
// )