/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('addRemElm',function(){


    WecomeToInt.clickAddRmvElements()

    //Click on Add Element button
    cy.contains('Add Element')
    // Check the text is contain
    .should('contain','Add Element')
    // Check the selected eliment is visible
    .should('be.visible')
    // Check the selected eliment is enable
    .should('be.enabled')
    //Click on Add Element button
    .click()


    cy.get('.added-manually')
    // Check the text is contain
    .should('contain','Delete')
    // Check the selected eliment is visible
    .should('be.visible')
    // Check the selected eliment is enable
    .should('be.enabled')
    //Click on Add Element button
    .click()



    
  
})

