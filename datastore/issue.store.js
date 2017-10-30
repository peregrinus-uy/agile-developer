const BaseStore = require('./base.store');
const issues = require('./issues.json');
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


    if (changeset.isValid()) {
      changeset.entity = super.add(changeset.entity);
    }

    return changeset;
  }
}

module.exports = new IssueStore();
