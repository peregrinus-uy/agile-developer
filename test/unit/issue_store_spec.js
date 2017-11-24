import store from '../../app/models/issue.store';

const invalidAttributes = {};
const validAttributes = {
  title: 'a title',
  description: 'a description',
  severity: 'High'
};

describe('issue.store', function() {
  beforeEach(function() {
    store.reset();
  });

  context('.add', function() {
    it('returns a changset with validation errors', function() {
      var changeset = store.add(invalidAttributes);

      expect(changeset.errors).to.eql({
        title: 'title is required.',
        description: 'description is required.',
        severity: 'severity is required.',
      });
    });

    it('does not store issue when it has errors', function() {
      store.add(invalidAttributes);

      expect(store.getAll()).to.be.empty;
    });

    it('returns a valid changeset when issue is valid', function() {
      var changeset = store.add(validAttributes);

      expect(changeset.isValid()).to.be.true;
    });

    it('stores issue when it is valid', function() {
      store.add(validAttributes);

      var issue = store.getAll()[0];

      expect(issue).to.be.ok;
      expect(issue.title).to.eq(validAttributes.title);
      expect(issue.description).to.eq(validAttributes.description);
      expect(issue.severity).to.eq(validAttributes.severity);
    });

    it('autogenerates an id when issue is valid', function() {
      store.add(validAttributes);

      var issue = store.getAll()[0];

      expect(issue.id).to.be.ok;
    });

    it('trims the title', function() {
      store.add(Object.assign({}, validAttributes, {title: '     title with spaces    '}));

      var issue = store.getAll()[0];

      expect(issue.title).to.eq('title with spaces');
    });

    it('trims the description', function() {
      store.add(Object.assign({}, validAttributes, {description: '     description with spaces    '}));

      var issue = store.getAll()[0];

      expect(issue.description).to.eq('description with spaces');
    });
  });

  context('.update', function() {
    it('returns valid changeset', function() {
      var changeset = store.add(validAttributes);
      var id = changeset.entity.id;
      var updateChangeset = store.update({id, title: 'updated title'});

      expect(updateChangeset.isValid()).to.be.true;
      expect(updateChangeset.entity.title).to.eq('updated title');
    });

    it('persists updated issue', function() {
      var changeset = store.add(validAttributes);
      var id = changeset.entity.id;
      store.update({id, title: 'updated title'});

      var issue = store.getAll()[0];

      expect(issue).to.be.ok
      expect(issue.title).to.eq('updated title');
      expect(issue.description).to.eq(validAttributes.description);
    });
  });
});
