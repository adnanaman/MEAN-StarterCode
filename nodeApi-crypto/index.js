const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./db.js");

var coinController = require("./controllers/coinController");

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:4200" }));

const CONCURRENCY = process.env.WEB_CONCURRENCY || 1;

app.listen(3100, () => console.log("listening at 3100"));

app.use("/Coins", coinController);
