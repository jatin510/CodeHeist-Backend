const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// const db = admin.firestore();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// middle ware
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser);

app.get("/", (req, res) => {
  console.log("hello");
  return res.send("hello");
});

app.get("/hello", (req, res) => {
  console.log("hello");
  res.send("hello");
});

exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});
