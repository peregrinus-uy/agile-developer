describe('Dashboard', function() {
  it('should display the critical gauge', function() {
    cy.visit('/');
    cy.get('[data-test-critical-gauge]').should('exist');
  });
  it('should display the high gauge', function() {
    cy.visit('/');
    cy.get('[data-test-high-gauge]').should('exist');
  });
  it('should display the medium gauge', function() {
    cy.visit('/');
    cy.get('[data-test-medium-gauge]').should('exist');
  });
})
