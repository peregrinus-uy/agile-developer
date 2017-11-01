const BaseStore = require('./base.store');
const users = require('./initial-data/users.json');

class UserStore extends BaseStore {
  constructor() {
    super(users);
  }
}

module.exports = new UserStore();
