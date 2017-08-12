var path = require("path");
var mustache = require("mustache-express");
var app = require("./app/index");

app.engine("html", mustache());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "app", "views"));

app.listen(3000, function() {
  console.log("http://localhost:3000");
});
