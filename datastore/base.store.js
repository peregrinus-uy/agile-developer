const uuid = require("uuid/v1");

class BaseStore {
  constructor(data) {
    this.db = data;
  }

  add(original) {
    const entity = Object.assign({}, original, { id: uuid() });

    this.db.push(entity);

    return entity;
  }

  get(entity_id) {
    return this.db.find(entity => entity.id == entity_id);
  }

  reset() {
    this.db = [];
  }

  getAll() {
    return this.db;
  }
}

module.exports = BaseStore;
