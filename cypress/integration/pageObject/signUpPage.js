
class signUpPage{

    getURL(){
        let url = Cypress.config().baseUrl
        return cy.visit(url)
    }
    signUp(){
        return cy.contains('Sign Up')
    }
    signIn(){
        return cy.contains('Sign In')
    }
     getFirstName(){
     return  cy.get('#firstName')
    }
    getLastName(){
        return  cy.get('#lastName')
    }
    getEmail(){
        return  cy.get('#email')
    }
    getPassword(){
        return  cy.get('#password')
    }
    getConfPassword(){
        return   cy.get('#password-confirm')
    }
    getTermsCond(){
        return   cy.get('#terms_and_conditions')
    }
    getFrame(){
        return  cy.get("iframe[title='reCAPTCHA']")
    }
    getFrameBdy($iframe){
        return  $iframe.contents().find('body')
    }
    getChkBox($body1){
        return cy.wrap($body1).find('.recaptcha-checkbox-border')
    }
    getCaptcha($body1){
        cy.wrap($body1).find('.recaptcha-checkbox-checkmark').invoke('css', 'background-position')
    }
    getCreateActbtn(){
        return   cy.get('.btn')
    }
}
export default signUpPage;