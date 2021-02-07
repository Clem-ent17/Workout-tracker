const router = require("express").Router();
var path = require("path");

//Main page index.html
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//Exercice page
router.get("/exercise", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

//Statistics page
router.get("/stats", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;