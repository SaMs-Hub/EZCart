import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATSVoYurMr_pQl3gpmIanmS6aQBE7ufPI",
  authDomain: "ezcart-c29d0.firebaseapp.com",
  projectId: "ezcart-c29d0",
  storageBucket: "ezcart-c29d0.appspot.com",
  messagingSenderId: "1014715396725",
  appId: "1:1014715396725:web:cf4ddf905bfa45f05efe3c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// rendering app
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

