const BaseStore = require('./base.store');
const users = require('./users.json');

class UserStore extends BaseStore {
  constructor() {
    super(users);
  }
}

module.exports = new UserStore();
