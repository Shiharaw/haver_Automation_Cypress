/// <reference types="cypress"/>
import {welcomeToInt} from "./Pages/Wc_Int"

const WecomeToInt = new welcomeToInt


// beforeEach - This run before every test in this Test File
beforeEach(function(){

    cy.visit('https://the-internet.herokuapp.com/')
})



it('fileUpload',function(){


    WecomeToInt.clcikFileUpload()

    cy.get('#file-upload').selectFile('cypress/fixtures/IMG-20220515-WA0041.jpg')
    cy.get('#file-submit').click()

     // Check the text is contain  - Powered by Elemental Selenium'
     cy.contains('File Uploaded')
    
     // Check the text is contain
     .should('contain','File Uploaded')
     // Check the selected eliment is visible
     .should('be.visible')
    

     // Check the image is contain  - IMG-20220515-WA0041.jpg
     cy.get('#uploaded-files')
    
     // Check the text is contain
     .should('contain','IMG-20220515-WA0041.jpg')
     // Check the selected eliment is visible
     .should('be.visible')




    
  
})

