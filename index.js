const admin = require("firebase-admin");
const db = admin.firestore();

admin.initializeApp();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// middle ware
app.use(cors({ origin: true }));
app.use(exress.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser);

exports.api = functions.https.onRequest(app);
