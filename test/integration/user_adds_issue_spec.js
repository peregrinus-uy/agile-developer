describe('User adds a new issue', function() {
  it('User adds a new issue', function() {
    cy.visit('/issues');
    cy.get('[data-test-add-issue]').click();

    cy.get('[name="issue[title]"]').type('Blue screen in Windows Vista');
    cy.get('[name="issue[severity]"]').select('High');
    cy.get('[name="issue[description]"').type('When I try to play solitaire in Windows, it crashes with a blue screen');
    cy.get('button').click();

    cy.contains('Blue screen in Windows Vista');
  });
});
