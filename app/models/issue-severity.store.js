const BaseStore = require('./base.store');
const severities = require('./initial-data/issue-severity.json');

class IssueSeverityStore extends BaseStore {
  constructor() {
    super(severities);
  }
}

module.exports = new IssueSeverityStore();
