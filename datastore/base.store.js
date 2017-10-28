const uuid = require("uuid/v1");

class BaseStore {
  constructor(data) {
    this.db = data;
  }

  add(entity) {
    const id = user.id || uuid();

    this.db.push({
      id: id,
      name: user.name
    });

    return this.db[id];
  }

  get(entity_id) {
    return this.db.find(entity => entity.id == entity_id);
  }

  reset() {
    this.db = {};
  }

  getAll() {
    return this.db;
  }
}

module.exports = BaseStore;
