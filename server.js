"use strict";
require("dotenv").config();

const express = require("express");
const mongo = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
mongoose.connect("mongodb://localhost:27017/url-shortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(process.env.PORT, function() {
  console.log(`listening on port: ${process.env.PORT || 8080}`);
});
