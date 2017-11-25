describe('Dashboard', function() {
  it('adjust percentages when new tickets are added', function() {
    cy.visit('/dashboard');

    cy
      .dataTest('open-count')
      .should('exist')
      .should('contain', '1');

    cy
      .dataTest('critical-gauge')
      .should('exist')
      .should('contain', '100%')
      .should('contain', 'Critical');

    cy
      .dataTest('high-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'High');

    cy
      .dataTest('medium-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'Medium');

    cy.dataTest('add-issue').click();

    cy.field('title').type('Blue screen in Windows Vista');

    cy.field('severity').select('High');

    cy.field('description').type('When I try to play solitaire in Windows, it crashes with a blue screen');

    cy.get('button').click();

    cy.visit('/dashboard');

    cy
    .dataTest('open-count')
    .should('exist')
    .should('contain', '2');

    cy
      .dataTest('critical-gauge')
      .should('exist')
      .should('contain', '50%')
      .should('contain', 'Critical');

    cy
      .dataTest('high-gauge')
      .should('exist')
      .should('contain', '50%')
      .should('contain', 'High');

    cy
      .dataTest('medium-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'Medium');
  });

  it('adjust percentages when tickets are closed', function() {
    cy.fixture({
      title: 'The price mentioned on the pricing page is not correct',
      description: 'it says the basic plan is $25 but it should be $29',
      severity: 'High',
      status: 'open'
    });

    cy.visit('/dashboard');

    cy
      .dataTest('open-count')
      .should('exist')
      .should('contain', '2');

    cy
      .dataTest('critical-gauge')
      .should('exist')
      .should('contain', '50%')
      .should('contain', 'Critical');

    cy
      .dataTest('high-gauge')
      .should('exist')
      .should('contain', '50%')
      .should('contain', 'High');

    cy
      .dataTest('medium-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'Medium');

    cy.dataTest('all-issues').click();

    cy.get('a:contains("The price mentioned")').click();

    cy.dataTest('close').click();

    cy.visit('/dashboard');

    cy
      .dataTest('open-count')
      .should('exist')
      .should('contain', '1');

    cy
      .dataTest('critical-gauge')
      .should('exist')
      .should('contain', '100%')
      .should('contain', 'Critical');

    cy
      .dataTest('high-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'High');

    cy
      .dataTest('medium-gauge')
      .should('exist')
      .should('contain', '0%')
      .should('contain', 'Medium');
  });
});
