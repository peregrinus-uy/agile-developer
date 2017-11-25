describe('User filters issues list', function() {
  it('User filters issues list by open status', function() {
    cy.fixture({ title: 'issue 1', status: 'open' });
    cy.fixture({ title: 'issue 2', status: 'open' });
    cy.fixture({ title: 'issue 3', status: 'closed' });

    cy.visit('/issues');
    
    // I can see everything by default
    cy.contains('issue 1').should('exist');
    cy.contains('issue 2').should('exist');
    cy.contains('issue 3').should('exist');

    // Filter the list by open issues
    cy.dataTest('filter-open').click();

    cy.contains('issue 1').should('exist');
    cy.contains('issue 2').should('exist');
    cy.contains('issue 3').should('not.exist');
  });

  it('User filters issues list by closed status', function() {
    cy.fixture({ title: 'issue 1', status: 'open' });
    cy.fixture({ title: 'issue 2', status: 'open' });
    cy.fixture({ title: 'issue 3', status: 'closed' });

    cy.visit('/issues');
    
    // I can see everything by default
    cy.contains('issue 1').should('exist');
    cy.contains('issue 2').should('exist');
    cy.contains('issue 3').should('exist');

    // Filter the list by open issues
    cy.dataTest('filter-closed').click();

    cy.contains('issue 1').should('not.exist');
    cy.contains('issue 2').should('not.exist');
    cy.contains('issue 3').should('exist');
  });
});
