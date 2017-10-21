var assert = require("assert");
var fork = require("child_process").fork;
var path = require("path");

var webdriver = require("selenium-webdriver");
var By = webdriver.By;
var until = webdriver.until;


describe("GET /", function() {
  var server;
  var driver;

  before(function() {
    server = fork("./app", [], {
      cwd: path.join(__dirname, "..")
    });

    return new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });
  });

  after(function() {
    server.kill('SIGKILL');
  });

  beforeEach(function() {
    driver = new webdriver
      .Builder()
      .forBrowser("chrome")
      .build();
  });

  afterEach(function() {
    driver.quit();
  });

  it("validates title", function() {
    driver.get("http://localhost:3000/");

    return driver.findElement(By.css("h1")).getText().then(function(text) {
      assert.equal(text, "Reporte de incidentes Peregrinus");
    });
  });
});
