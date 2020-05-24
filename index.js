"use strict";
const express = require("express");
var path = require("path");
var app = express();
var _3dobject = require("./routes/3dobjects");
var user = require("./routes/users");

app.use(express.static("public"));
app.use("/api/v1/3dobjects", _3dobject);

app.use("/api/v1/users", user);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

var port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log("Express server is runnig at port no : " + port)
);
