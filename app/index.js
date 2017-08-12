var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.render("index.html");
});

module.exports = app;
