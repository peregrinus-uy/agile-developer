var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var db = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", function(req, res) {
  res.send("pong");
});

app.get("/users/:userId", function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  res.json(db.get(req.params.userId));
});

app.post("/users", function(req, res) {
  res.setHeader('Content-Type', 'application/json');

  var user = db.add({
    name: req.body.name
  });

  res.json(user);
});

module.exports = app;
