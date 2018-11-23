describe('Landing', function() {
  it('should display welcome message', function() {
    cy.visit('/');

    cy.contains('Welcome to Bug Tracking System').should('exist');
  });
});
