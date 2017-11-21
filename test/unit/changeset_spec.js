import { create, trimValue, validateRequired } from '../../datastore/changeset.js';

// Assertion library
// https://docs.cypress.io/guides/references/assertions.html#BDD-Assertions

describe('Changeset', function() {
  context('.create', function() {
    it('copies entity', function() {
      const original = { foo: 'bar' };
      const changeset = create(original);

      original.foo = 'baz';

      expect(changeset.entity.foo).to.eq('bar');
    });

    it('contains an empty errors object', function() {
      const changeset = create({ foo: 'bar' });

      expect(changeset.errors).to.eql({});
    });

    it('is valid', function() {
      const changeset = create({ foo: 'bar' });

      expect(changeset.isValid()).to.be.true;
    });
  });

  context('.trimValue', function() {
    it('removes white spaces', function() {
      const changeset = create({ foo: 'bar    \n\r' });

      trimValue(changeset, 'foo');

      expect(changeset.entity.foo).to.eq('bar');
    });
  });

  context('.validateRequired', function() {
    it('sets an error when the field is an empty string', function() {
      const changeset = create({ foo: '' });

      validateRequired(changeset, 'foo');

      expect(changeset.isValid()).to.be.false;
      expect(changeset.errors.foo).to.eq('foo is required.');
    });

    it('sets an error when the field is null', function() {
      const changeset = create({ foo: null });

      validateRequired(changeset, 'foo');

      expect(changeset.isValid()).to.be.false;
      expect(changeset.errors.foo).to.eq('foo is required.');
    });

    it('does not set an error when the field contains a value', function() {
      const changeset = create({ foo: 'bar' });

      validateRequired(changeset, 'foo');

      expect(changeset.isValid()).to.be.true;
      expect(changeset.errors.foo).to.be.undefined;
    });
  });
});
