export class welcomeToInt{

    //Object locaters of the page
    ab_testing_link ='A/B Testing'
    add_remove_link ='Add/Remove'
    file_download_link ='File Download'
    file_upload_link ='File Upload'
    check_boxex_link='Checkboxes'
    dropdown_link='Dropdown'



    //Functions of the page
    clickABTesting(){

        cy.contains(this.ab_testing_link).click()
    
    }


    clickAddRmvElements(){

        cy.contains(this.add_remove_link).click()
    
    } 
 
     
    clickFileDwonload(){

        cy.contains(this.file_download_link).click()

    }

    
    clcikFileUpload(){

        cy.contains(this.file_upload_link).click()

    }


    clickCheckBoxes(){

        cy.contains(this.check_boxex_link).click()

    }


    clickDropdownList(){

        cy.contains(this.dropdown_link).click()
    }

}