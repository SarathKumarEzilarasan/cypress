///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import SignUpPage from '../pageObject/signUpPage'
import SignInPage from '../pageObject/signInPage'
import homePage from '../pageObject/homePage'
import billingPage from '../pageObject/billingPage'

import 'cypress-iframe'
describe("Create Payment",function(){
  beforeEach(function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
      }); 
      cy.fixture("example").then(function(data){
this.data=data
      })
      cy.fixture("Dashboard").then(function(data1){
        this.data1=data1
              })
 
   
  })
       it("Sign In",function(){
        const lo=new SignInPage()
        const si=new SignUpPage()
        const hp=new homePage()
        const bp=new billingPage()
        si.getURL1()
        lo.getLoginlink().click()
         lo.getEmail().type(this.data.email)
        lo.getPassword().type(this.data.password)
         lo.getLoginBtn().click()
        hp.getDash().click()
       
        hp.getSummary()
        bp.getProfile().should('be.visible').click()
        cy.wait(10000)
        cy.get("input[id='phone number:']").should('be.visible').clear()
        cy.wait(3000)
        cy.get("input[id='phone number:']").type(this.data1.phoneNumber)
        cy.contains('save changes').click()
       
        bp.getBilling().click()
        cy.get("body").then($body => {
          if ($body.find('.style-sc-1x2wexi-0').length > 0) { 
           bp.getAddButton().then(function(button){
              const text=button.text()
              if(text.includes('Credit Card')){
                cy.log("credit cards")
                cy.wrap(button).click()
                cy.wait(30000)
                bp.getFrame()
               .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                    cy.log($iframe.contents().find('body'))
                       bp.getExpmonth()
                            .select('10')
                            cy.wrap($body)
                            .find("#input-creditCardExpirationYear").should('be.visible')
                            .select('2023')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardNumber")
                            .type('4242424242424242')
                            cy.wrap($body).should('be.visible')
                            .find("#input-cardSecurityCode")
                            .type('788')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardHolderName")
                            .type('Usman CHaudry')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardCountry")
                            .select('GBR')
                            cy.wrap($body).should('be.visible')
                            .find("#submitButton")
                            .click()
                            cy.get('.close-remove-card').click()
                          
        
                    });
               
              }
              else{
                cy.contains('Add Billing Information').click()
                cy.get("input[id='Address:']").clear().type('750 Kearny')
                cy.get("input[id='Address 2:']").clear().type('St, San Francisco,')
                cy.get("input[id='City:']").clear().type('San Francisco')
                cy.get("input[id='Zip:']").clear().type('94108')
                cy.contains("Next step").click()
                cy.wait(30000)
                cy.get('#z_hppm_iframe')
               .then(($iframe) => {
                    const $body = $iframe.contents().find('body')
                    cy.log($iframe.contents().find('body'))
                        cy.wrap($body)
                            .find("#input-creditCardExpirationMonth")
                            .select('10')
                            cy.wrap($body)
                            .find("#input-creditCardExpirationYear").should('be.visible')
                            .select('2023')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardNumber")
                            .type('4242424242424242')
                            cy.wrap($body).should('be.visible')
                            .find("#input-cardSecurityCode")
                            .type('788')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardHolderName")
                            .type('Usman CHaudry')
                            cy.wrap($body).should('be.visible')
                            .find("#input-creditCardCountry")
                            .select('UK')
        
                            cy.wrap($body).should('be.visible')
                            .find("#submitButton")
                            .click()
                          
        
                    });
                   
               
              }
            })
            cy.get('.style-sc-1x2wexi-0').click()
           
           
          }
          

        })
     
        
     
       })
})