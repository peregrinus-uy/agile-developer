describe('issues list', function() {
  it('shows all issues', function() {
    cy.fixture({
      title: 'lorem ipsum'
    });
    cy.fixture({
      title: 'foo bar'
    });

    cy.visit('/issues');

    cy.contains('lorem ipsum').should('exist');
    cy.contains('foo bar').should('exist');
  });
});
