///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import SignUpPage from '../pageObject/signUpPage'
import SignInPage from '../pageObject/signInPage'
import homePage from '../pageObject/homePage'

import 'cypress-iframe'
import billingPage from '../pageObject/billingPage'
describe("SignUp", function () {
  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });
    cy.fixture("example").then(function (data) {
      this.data = data
    })


  })
  it("Entering Details for Signup", function () {
    const si = new SignUpPage()
    let url = Cypress.config().baseUrl
    si.getURL()
    si.signUp().click()
    si.getFirstName().should('be.visible').type(this.data.firstName)
    si.getLastName().type(this.data.lastName)
    si.getEmail().type(this.data.email)
    si.getPassword().type(this.data.password)

    si.getConfPassword().type(this.data.password)
    si.getTermsCond().click('bottomLeft', {
      force: true
    })
    si.getFrame().then(function ($iframe) {

      cy.log($iframe.contents().find('body'))
      const $body1 = si.getFrameBdy($iframe)
      si.getChkBox().should('be.visible').click();
      cy.wrap($body1).find('.recaptcha-checkbox-checkmark').invoke('css', 'background-position').should('include', '600')


    })

    si.getCreateActbtn().click()


  })
  it("Email validation", function () {

    const lo = new SignInPage()
    const si = new SignUpPage
    cy.mailosaurGetMessage(this.data.serverId, {
      sentTo: this.data.email
    }).then(email => {
      cy.log(email.subject)
      cy.log(email.html.links[0].href);
      cy.visit(email.html.links[0].href, {
        failOnStatusCode: false
      })
      //cy.visit("https://dashboard.kaos.dolbyio.com/enrollment")
    })
    lo.getAcceptBtn().click()
  })
  it("Sign In", function () {
    const lo = new SignInPage()
    const si = new SignUpPage()
    const bp = new billingPage()
    const hp = new homePage()
    si.getURL()
    si.signIn().click()
    lo.getEmail().type(this.data.email)
    lo.getPassword().type(this.data.password)
    lo.getLoginBtn().click()
    lo.getOrg().type(this.data.organization)
    lo.getRole().click()
    lo.getLiketodo().click()
    lo.getNext().click()
    hp.getSkip().click()
    bp.getProfile().should('be.visible')


  })
})