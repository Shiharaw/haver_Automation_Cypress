/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('addRemElm',function(){


    WecomeToInt.clickBasicAuth()
    
  
})

