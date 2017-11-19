describe('User adds a new issue', function() {
  before(function() {
    // Cleanup database
    cy.request('POST', '/test/reset');
    cy.request({
      method: 'POST',
      url: '/test/seed',
      body: {
        title: 'foo',
        description: 'bar'
      },
      form: true
    });
  });

  it('User adds a new issue', function() {
    cy.visit('/issues');
    cy.get(selector('add-issue')).click();

    cy.get('[name="issue[title]"]').type('Blue screen in Windows Vista');
    cy.get('[name="issue[severity]"]').select('High');
    cy.get('[name="issue[description]"').type('When I try to play solitaire in Windows, it crash with a blue screen');
    cy.get('button').click();

    cy.contains('Blue screen in Windows Vista');
  });

  it('User adds a new issue (II)', function() {
    visit('/issues/new');

    fillIn('title', 'Blue screen in Windows Vista');
    select('severity', 'High');
    fillIn('description', 'When I try to play solitaire in Windows, it crash with a blue screen');

    click('button');

    assert_text('Blue screen in Windows Vista');
  });
});

function selector(value) {
  return `[data-test-${value}]`;
}

function visit(path) {
  return cy.visit(path);
}

function fillIn(name, value) {
  return cy.get(`[name="issue[${name}]"]`).type(value);
}

function select(name, value) {
  return cy.get(`[name="issue[${name}]"]`).select(value);
}

function click(selector) {
  return cy.get(selector).click();
}

function assert_text(text) {
  cy.contains(text);
}
