import * as firebase from 'firebase'
import initFirebase from './firebaseConfig'

initFirebase()

let db = firebase.database()
let postsRef = database.ref('posts')



