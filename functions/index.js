const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// middle ware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.get("/", (req, res) => {
  console.log("API CALLED");
  // db.collection("main").add("jatin").set({ name: "jatin" });
  return res.send("API CALLED");
});

app.get("/hello", (req, res) => {
  console.log("API HELLO");
  res.send("API HELLO");
});

const api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const helloWorld = functions.https.onRequest((request, response) => {
  console.log("hello from firebase");
  let data = {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
  };

  // Add a new document in collection "cities" with ID 'LA'
  let setDoc = db
    .collection("main")
    .doc("LA")
    .set(data)
    .then((data) => console.log("created", data))
    .catch((err) => console.log("error", err));
  response.send("Hello from Firebase!");
});

module.exports = {
  helloWorld,
  api,
};
