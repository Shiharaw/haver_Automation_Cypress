/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('dropdown List',function(){


    WecomeToInt.clickDropdownList()
    cy.get('#dropdown').select(["Option 1"])
    // Check the text is contain "Option 1"
    .should('contain','Option 1')

    cy.get('#dropdown').select(["Option 2"])
    // Check the text is contain "Option 2"
    .should('contain','Option 2')
    
  
})

