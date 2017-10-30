describe('User adds a new issue', function() {
  before(function() {
    // Cleanup database
    cy.request('POST', '/test/reset');
    cy.request({
      method: 'POST',
      url: '/test/seed',
      body: {
        title: 'foo',
        description: 'bar',
      },
      form: true,
    });
  });

  it('User adds a new issue', function() {
    cy.visit('/issues/new');

    cy.get('[name="issue[title]"]').type('Blue screen in Windows Vista');
    cy.get('[name="issue[description]"').type('When I try to play solitaire in Windows, it crash with a blue screen');
    cy.get('button').click();

    cy.root().should('contain', 'Blue screen in Windows Vista');
  });

  it('User adds a new issue (II)', function() {
    visit('/issues/new');

    fillIn('title', 'Blue screen in Windows Vista');
    fillIn('description', 'When I try to play solitaire in Windows, it crash with a blue screen');

    click('button');

    page().should('contain', 'Blue screen in Windows Vista');
  });
});

function visit(path) {
  return cy.visit(path);
}

function fillIn(name, value) {
  return cy.get(`[name="issue[${name}]"]`).type(value);
}

function click(selector) {
  return cy.get(selector).click();
}

function page() {
  return cy.root();
}
