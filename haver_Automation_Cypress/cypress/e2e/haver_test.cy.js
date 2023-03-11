/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('haverLocaters',function(){

    //cy.visit('https://the-internet.herokuapp.com/')
    //cy.contains('A/B Testing').click()
    //cy.contains('Add/Remove').click()
    //cy.contains('File Download').click()
    //cy.contains('File Upload').click()
    //cy.contains('Checkboxes').click()
    cy.contains('Basic Auth').click()
    
    
  
})

