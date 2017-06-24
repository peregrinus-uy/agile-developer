var express = require("express");
var app = express();

app.get("/ping", function(req, res) {
  res.send("pong");
});

module.exports = app;
