const BaseStore = require('./base.store');
const issues = require('./issues.json');

class IssueStore extends BaseStore {
  constructor() {
    super(issues);
  }
}

module.exports = new IssueStore();
