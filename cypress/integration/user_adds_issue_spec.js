describe('User adds a new issue', function() {
  it('User adds a new issue', function() {
    cy.visit('/issues/new');

    cy.get('[name="issue[title]"]').type('Blue screen in Windows Vista');
    cy.get('[name="issue[description]"').type('When I try to play solitaire in Windows, it crash with a blue screen');
    cy.get('button').click();

    cy.root().should('contain', 'Blue screen in Windows Vista');
  });
});
