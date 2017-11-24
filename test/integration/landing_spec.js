describe('Landing', function() {
  it('should display welcome message', function() {
    cy.visit('/');

    cy.contains('Welcome to Ostrich Bug Tracking System');
  });
});
