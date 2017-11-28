describe('User adds a new issue', function() {
  it('User adds a new issue', function() {
    cy.visit('/issues');
    cy.dataTest('add-issue').click();

    cy.field('title').type('Blue screen in Windows Vista');
    cy.field('estimation').select('13');
    // cy.field('severity').select('High');
    cy.field('description').type('When I try to play solitaire in Windows, it crashes with a blue screen');
    cy.get('[type="submit"]').click();

    cy.contains('Blue screen in Windows Vista').click();

    cy.contains('Estimation').should('exist');
    cy.contains('13').should('exist');
    // cy.contains('Severity').should('exist');
    // cy.contains('High').should('exist');
  });
});
