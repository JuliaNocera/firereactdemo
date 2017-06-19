const functions = require('firebase-functions');

const admin = require('firebase-admin')

const serviceCred = require('./firereactdemo-firebase-adminsdk-5prkg-98824944c6.json')

const databaseURL = "https://firereactdemo.firebaseio.com/" 

const cors = require('cors')({origin: true})

admin.initializeApp({
  credential: admin.credential.cert(serviceCred),
  databaseURL: databaseURL
})

const database = admin.database()

exports.helloWorld = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log('req: ', request.body)
    response.send("Hello from Firebase!");
  })
});

exports.getData = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    let todosRef = database.ref('todos')
    todosRef.once('value', snap => {
      if(snap.val()) {
console.log('snap: ', snap.val())
        response.status(200).send(snap.val())
      } else {
        response.status(203).send('no data')
      }
    })
  })
})

