import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCOkYUqn_2bReOMwgcCUmQZdLrGUO8N070",
    authDomain: "firereactdemo.firebaseapp.com",
    databaseURL: "https://firereactdemo.firebaseio.com",
    projectId: "firereactdemo",
    storageBucket: "firereactdemo.appspot.com",
    messagingSenderId: "295478767680"
};

/* 

*/

const initFirebase = () => {
  firebase.initializeApp(config);
}

export default initFirebase


/* IF YOU HAVE MULTIPLE PROJECTS YOU CAN CONFIG MULTIPLE OBJECTS
 * AND HAVE A SCRIPT RUN THAT SWITCHES YOUR ACTIVE CONFIG
const fbConfigs = {
  dev: {
    apiKey: "AIzaSyCOkYUqn_2bReOMwgcCUmQZdLrGUO8N070",
    authDomain: "firereactdemodev.firebaseapp.com",
    databaseURL: "https://firereactdemodev.firebaseio.com",
    projectId: "firereactdemodev",
    storageBucket: "firereactdemodev.appspot.com",
    messagingSenderId: "295478767680"
  },
  stage: {
    apiKey: "AIzaSyCOkYUqn_2bReOMwgcCUmQZdLrGUO8N070",
    authDomain: "firereactdemostage.firebaseapp.com",
    databaseURL: "https://firereactdemostage.firebaseio.com",
    projectId: "firereactdemostage",
    storageBucket: "firereactdemostage.appspot.com",
    messagingSenderId: "295478767680"
  },
  prod: {
    apiKey: "AIzaSyCOkYUqn_2bReOMwgcCUmQZdLrGUO8N070",
    authDomain: "firereactdemo.firebaseapp.com",
    databaseURL: "https://firereactdemo.firebaseio.com",
    projectId: "firereactdemo",
    storageBucket: "firereactdemo.appspot.com",
    messagingSenderId: "295478767680"
  }
}

const active = fbConfigs.prod

//export const functionURL = ""

const initFirebase = () => {
  firebase.initializeApp(active);
}

export default initFirebase

*/
