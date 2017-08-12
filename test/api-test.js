var assert = require("assert");
var request = require("supertest");
var api = require("../api");
var db = require("../api/db");

describe("GET /ping", function() {

  it("answers with 'pong'", function() {
    return request(api)
      .get("/ping")
      .expect(200)
      .then(function(response) {
        assert.equal(response.text, "pong");
      });
  });

});

describe("GET /users/:userId", function() {

  it("returns user data for John", function() {
    db.add({
      id: 1,
      name: "John Doe"
    });

    return request(api)
      .get("/users/1")
      .expect(200)
      .then(function(response) {
        assert.equal(response.body.id, 1);
        assert.equal(response.body.name, "John Doe");
      });
  });

});

describe("POST /users", function() {

  it("returns 200 if the user is saved correctly", function() {
    return request(api)
      .post("/users")
      .send({name: "Paul Roe"})
      .expect(200)
      .then(function(response) {
        var userId = response.body.id;
        var user = db.get(userId);

        assert.ok(user);
        assert.equal(user.id, userId);
        assert.equal(user.name, "Paul Roe");
      });
  });

});
