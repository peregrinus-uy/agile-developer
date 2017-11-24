const BaseStore = require('./base.store');
const issues = require('./initial-data/issues.json');
const { create, trimValue, validateRequired } = require('./changeset');

class IssueStore extends BaseStore {
  constructor() {
    super(issues);
  }

  add(issue) {
    const changeset = create(issue);

    trimValue(changeset, 'title');
    trimValue(changeset, 'description');
    validateRequired(changeset, 'title');
    validateRequired(changeset, 'description');
    validateRequired(changeset, 'severity');

    if (changeset.isValid()) {
      changeset.entity = super.add(changeset.entity);
    }

    return changeset;
  }

  update(issue) {
    const changeset = create(issue);
    changeset.entity = super.update(changeset.entity);
    return changeset;
  }

  getAllOpen() {
    return this.getAll().filter(issue => issue.status === 'open');
  }
}

module.exports = new IssueStore();
