/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('abTesting',function(){

    WecomeToInt.clickABTesting()


    // A/B Test Variation 1 - Locate the element
    cy.get('h3')
    
      // Check the text is contain
      //.should('contain','A/B Test Variation 1')
      // Check the selected eliment is visible
      .should('be.visible')
     
    // Text  - Locate the sentence 'Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).'
    cy.get('p')
    
      // Check the text is contain
      .should('contain','Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).')
      // Check the selected eliment is visible
      .should('be.visible')

    // Check the text is contain  - Powered by Elemental Selenium'
    cy.get('.large-4 > div')
    
      // Check the text is contain
      .should('contain','Powered by Elemental Selenium')
      // Check the selected eliment is visible
      .should('be.visible')
      // Check the selected eliment is enable
      //.should('be.enabled')
    
  
    // Check the image is contain  - Fock me on Github'
    cy.get('img')
    
      // Check the text is contain
      //.should('contain','Powered by Elemental Selenium')
      // Check the selected eliment is visible
      .should('be.visible')
      // Check the selected eliment is enable
      //.should('be.enabled')


})

