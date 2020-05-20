"use strict";
const express = require("express");
var path = require("path");
var app = express();
//var bodyParser = require("body-parser");

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(3000, () =>
  console.log("Express server is runnig at port no : 3000")
);
