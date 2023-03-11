it('Assertions Demo', () => {
    // visit -command to visit web page
    cy.visit('https://example.cypress.io')
     // contains - Locate the element
    //cy.contains('get').click()

    // get - Locate the element
    //cy.get('#query-btn')

    //Implesit assertions
      // Check the text "butten" is contain
      .should('contain','Button')
      // Check the class is contain
      .should('have.class','query-btn btn btn-primary')
      // Check the selected eliment is visible
      .should('be.visible')
      // Check the selected eliment is enable
      .should('be.enabled')
      // Check the selected eliment is disable
      // .should('be.disabled') 


     cy.get('.btn > span')
      
      // Check the text "butten" is contain
      .should('contain','Save Form')
      // When we are using same assertion, we can use 'and' instered of it
      // Check the selected eliment is visible
      .and('be.visible')

    
     //Explesit assertions
      // If this is pass nothing comes to the logs
      expect (true).to.be.true

      assert.equal(4,4,'Not equel')
      assert.equal(4,'4','Numbers are Equel')
      
      // 4 as a number not equel to 4 because 2nd 4 is given as a string or a character 
      // assert.strictEqual(4,'4','Numbers are Equel')

  })