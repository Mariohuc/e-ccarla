"use strict";
const express = require("express");
var path = require("path");
var app = express();
//var bodyParser = require("body-parser");

app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

var port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("Express server is runnig at port no : 3000")
);
