var uuid = require("uuid/v1");

var db = {};

function add(user) {
  var id = null;

  if (user.id) {
    id = user.id;
  } else {
    id = uuid();
  }

  db[id] = {
    id: id,
    name: user.name
  };

  return db[id];
}

function get(user_id) {
  return db[user_id];
}

function reset() {
  db = {};
}

module.exports = {
  add: add,
  get: get,
  reset: reset
};
