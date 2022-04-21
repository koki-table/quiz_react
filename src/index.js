
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwHfxGdWvjCUkqzgl2BGVL_XUxWQL7MWI",
  authDomain: "lobbing-quiz.firebaseapp.com",
  projectId: "lobbing-quiz",
  storageBucket: "lobbing-quiz.appspot.com",
  messagingSenderId: "548272421156",
  appId: "1:548272421156:web:fa0f1cc695fbccf116dbb1",
  measurementId: "G-E6R9YEEJ7J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

