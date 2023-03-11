/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('checkBoxes',function(){


    WecomeToInt.clickCheckBoxes()
    
    cy.get('#checkboxes > :nth-child(1)').check()
    cy.get('#checkboxes > :nth-child(3)').uncheck()
  
})

