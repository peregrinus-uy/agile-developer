import { create, trimValue, validateRequired } from '../../datastore/changeset.js';

describe('Changeset', function() {
  context('.create', function() {
    it('copies entity', function() {
      const original = { foo: 'bar' };
      const changeset = create(original);

      original.foo = 'baz';

      expect(changeset.entity.foo).to.eq('bar');
    });
  });
});
