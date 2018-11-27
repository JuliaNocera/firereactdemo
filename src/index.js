import React from 'react';
import ReactDOM from 'react-dom';
//import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase'
import initFirebase from './firebase/firebaseConfig.js'

import Root from './App/Root'
import configureStore from './store/configureStore'

initFirebase()
let store = configureStore()

/*
var config = {
    apiKey: "AIzaSyCOkYUqn_2bReOMwgcCUmQZdLrGUO8N070",
    authDomain: "firereactdemo.firebaseapp.com",
    databaseURL: "https://firereactdemo.firebaseio.com",
    projectId: "firereactdemo",
    storageBucket: "firereactdemo.appspot.com",
    messagingSenderId: "295478767680"
};

firebase.initializeApp(config);
*/

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('root')
);
//registerServiceWorker();
