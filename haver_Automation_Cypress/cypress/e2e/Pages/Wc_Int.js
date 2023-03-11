export class welcomeToInt{



    clickABTesting(){

        cy.contains('A/B Testing').click()

    }


    clickAddRmvElements(){

        cy.contains('Add/Remove').click()

     } 
 
     
    clickFileDwonload(){

        cy.contains('File Download').click()

    }

    
    clcikFileUpload(){

        cy.contains('File Upload').click()

    }


    clickCheckBoxes(){

        cy.contains('Checkboxes').click()

    }


    clickBasicAuth(){

        cy.contains('Basic Auth').click()
    }

}