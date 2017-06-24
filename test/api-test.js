var assert = require("assert");
var request = require("supertest");
var api = require("../api");

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
