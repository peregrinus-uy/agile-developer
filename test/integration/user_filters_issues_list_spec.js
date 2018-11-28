describe('issues list', function() {
  it('shows all issues', function() {
    cy.fixture({
      title: 'lorem ipsum'
    });
    cy.fixture({
      title: 'foo bar',
      status: 'closed'
    });

    cy.visit('/issues');

    cy.contains('lorem ipsum').contains('open').should('exist');
    cy.contains('foo bar').contains('closed').should('exist');
  });
});
