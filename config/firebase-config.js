const admin = require("firebase-admin");
const serviceAccount = require("./powercaregirl-vhuw-firebase-adminsdk-hfjd6-d87df09587.json");

admin.initializeApp({
  apiKey: "AIzaSyCDZzlYZjZBRiVe91UP6FGjP8waD5An9rI",
  authDomain: "powercaregirl-vhuw.firebaseapp.com",
  databaseURL: "https://powercaregirl-vhuw-default-rtdb.firebaseio.com",
  projectId: "powercaregirl-vhuw",
  storageBucket: "powercaregirl-vhuw.appspot.com",
  messagingSenderId: "302094464999",
  appId: "1:302094464999:web:9e3fceeb50c69039eb6f42",
  measurementId: "G-B8Q3BVT3MH",
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://powercaregirl-vhuw-default-rtdb.firebaseio.com",
});

const db = admin.firestore();
const FieldValue = admin.firestore.FieldValue;
module.exports = { db,FieldValue };
