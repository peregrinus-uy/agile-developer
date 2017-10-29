const BaseStore = require('./base.store');
const issues = require('./issues.json');

const Changeset = {
  create(entity) {
    return {
      entity: Object.assign({}, entity),
      errors: {},
      isValid() {
        return !Object.keys(this.errors).length;
      }
    };
  },

  trimValue(changeset, field) {
    var value = this.getValue(changeset, field);

    if (typeof value === 'string') {
      this.setValue(changeset, field, value.trim());
    }
  },

  validateRequired(changeset, field) {
    if (!this.getValue(changeset, field)) {
      changeset.errors[field] = `${field} is required.`;
    }
  },

  getValue(changeset, field) {
    return changeset.entity[field];
  },

  setValue(changeset, field, value) {
    changeset.entity[field] = value;
  }
};

class IssueStore extends BaseStore {
  constructor() {
    super(issues);
  }

  add(issue) {
    const changeset = Changeset.create(issue);
    console.log('changeset before', changeset);

    Changeset.trimValue(changeset, 'title');
    Changeset.trimValue(changeset, 'description');
    console.log('changeset after', changeset);
    Changeset.validateRequired(changeset, 'title');
    Changeset.validateRequired(changeset, 'description');


    if (changeset.isValid()) {
      changeset.entity = super.add(changeset.entity);
    }

    return changeset;
  }
}

module.exports = new IssueStore();
