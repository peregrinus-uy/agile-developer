var express = require("express");
var app = express();

app.use(express.static(process.cwd() + '/public'));

app.get("/", function(req, res) {
  res.render("index.html");
});

app.post("/session", function(req, res) {
  res.send("12345");
});

module.exports = app;
