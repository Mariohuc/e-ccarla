var express = require("express");
var router = express.Router();

router.get("/", (request, response) => {
  response
    .status(200)
    .send({ title: "User", description: "Nothing to show" });
});

module.exports = router;