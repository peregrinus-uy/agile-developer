module.exports = {
  create,
  trimValue,
  validateRequired
};

function create(entity) {
  return {
    entity: Object.assign({}, entity),
    errors: {},
    isValid() {
      return !Object.keys(this.errors).length;
    }
  };
}

function trimValue(changeset, field) {
  var value = getValue(changeset, field);

  if (typeof value === 'string') {
    setValue(changeset, field, value.trim());
  }
}

function validateRequired(changeset, field) {
  if (!getValue(changeset, field)) {
    changeset.errors[field] = `${field} is required.`;
  }
}

function getValue(changeset, field) {
  return changeset.entity[field];
}

function setValue(changeset, field, value) {
  changeset.entity[field] = value;
}
