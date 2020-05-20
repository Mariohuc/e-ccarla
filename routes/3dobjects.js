var express = require("express");
var router = express.Router();
var path = require("path");
var multer = require("multer");
//multer by default start since the project's root
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/_uploads/3dobjects"); // destination of file to upload
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // put original name to uploaded file
  }
});
var upload = multer({ storage: storage });

router.post("/save", upload.single("3dobject"), (req, res, next) => {
  res.json({
    message: "File Uploaded!",
    pathfile: `_uploads/3dobjects/${req.file.originalname}`
  });
});
//upload.single(<File name>) Field name is specified in the form of web client

module.exports = router;
