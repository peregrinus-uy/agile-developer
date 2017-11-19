describe('User closes issue', function() {
  it('should update open count', function() {
    cy.visit('/issues');
    cy.contains('1 Open');
    cy.get('.issue-item:first').click();
    cy.get('[data-test-close]').click();

    cy.location('pathname').should('eq', '/issues');
    cy.contains('0 Open');
  });
});
