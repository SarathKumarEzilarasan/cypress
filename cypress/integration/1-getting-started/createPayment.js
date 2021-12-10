///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import SignUpPage from '../pageObject/signUpPage'
import SignInPage from '../pageObject/signInPage'
import homePage from '../pageObject/homePage'
import billingPage from '../pageObject/billingPage'


import 'cypress-iframe'
describe("Add US Region Credit Card", function () {
  const lo = new SignInPage()
  const si = new SignUpPage()
  const bp = new billingPage()
  const hp = new homePage()

  beforeEach(function () {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    });
    cy.fixture("example").then(function (data) {
      this.data = data
    })
    cy.fixture("Dashboard").then(function (dashboard) {
      this.dashboard = dashboard
    })


  })
  it("Sign In", function () {
    si.getURL()
    si.signIn().click()
    lo.getEmail().type(this.data.email)
    lo.getPassword().type(this.data.password)
    lo.getLoginBtn().click()
    bp.getProfile().should('be.visible')

  })
  it("Update Profile", function () {

    bp.getProfile().should('be.visible').click()
    bp.getPhnumber().should('be.visible').clear()
    cy.wait(3000)
    bp.getPhnumber().type(this.dashboard.phoneNumber)
    bp.getSaveprofile().click()
    bp.getProfileSavemsg().should('be.visible')
  })
  it("Adding Credit Card", function () {
    bp.getBilling().click()
    cy.get("body").then($body => {
      if (bp.getAddButton($body).length > 0) {
        bp.getAddButton().then(function (button) {
          const text = button.text()
          if (text.includes('Credit Card')) {
            cy.log("credit cards")
            cy.wrap(button).click()
            cy.wait(10000)
            bp.getFrame()
              .then(($iframe) => {
                const $body = bp.getFrameBody($iframe)

                bp.getExpmonth($body).should('be.visible').select(this.dashboard.CC_Month)
                bp.getExpyear($body).should('be.visible').select(this.dashboard.CC_year)
                bp.getCCnum().should('be.visible').type(this.dashboard.CC_num)
                bp.getCCcode($body).should('be.visible').type(this.dashboard.CC_code)
                bp.getCCname($body).should('be.visible').type(this.dashboard.CC_name)
                bp.getCCcountry($body).should('be.visible').select(this.dashboard.CC_country_US)
                bp.getCCsubmit($body).should('be.visible').click()
                bp.getCloseBtn().click()


              });

          } else {
            bp.getAddBillinfor().click()
            bp.getBillAddress().clear().type(this.dashboard.Bill_addr)
            bp.getBillAdres2().clear().type(this.dashboard.Bill_addr2)
            bp.getCity().clear().type(this.dashboard.Bill_city)
            bp.getZip().clear().type(this.dashboard.Bill_zip)
            bp.getNxtStep().click()
            cy.wait(10000)
            bp.getFrame()
              .then(($iframe) => {
                const $body = bp.getFrameBody($iframe)

                bp.getExpmonth($body).should('be.visible').select(this.dashboard.CC_Month)
                bp.getExpyear($body).should('be.visible').select(this.dashboard.CC_year)
                bp.getCCnum().should('be.visible').type(this.dashboard.CC_num)
                bp.getCCcode($body).should('be.visible').type(this.dashboard.CC_code)
                bp.getCCname($body).should('be.visible').type(this.dashboard.CC_name)
                bp.getCCcountry($body).should('be.visible').select(this.dashboard.CC_country_US)
                bp.getCCsubmit($body).should('be.visible').click()
                bp.getCloseBtn().click()


              });

          }
        })
        cy.get('.style-sc-1x2wexi-0').click()


      }


    })



  })
})