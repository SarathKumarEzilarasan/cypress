///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import SignUpPage from '../pageObject/signUpPage'
import SignInPage from '../pageObject/signInPage'
import homePage from '../pageObject/homePage'

import 'cypress-iframe'
describe("Create Payment", function () {
    beforeEach(function () {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        });
        cy.fixture("example").then(function (data) {
            this.data = data
        })
        cy.fixture("Dashboard").then(function (data1) {
            this.data1 = data1
        })


    })
    it("Login", function () {
        const lo = new SignInPage()
        const si = new SignUpPage()
        const hp = new homePage()
        si.getURL()
        si.signIn().click()
        lo.getEmail().type(this.data.email)
        lo.getPassword().type(this.data.password)
        lo.getLoginBtn().click()
    })
    it("ADD APP", function () {
        const lo = new SignInPage()
        const si = new SignUpPage()
        const hp = new homePage()

        cy.get('.loader').should('not.exist')
        cy.wait(6000)
        hp.addNewApp().click()
        hp.getAppName().type(this.data1.APP_Name)
        hp.getConfirmBtn().click()
        hp.addNewAppmsg().should('be.visible')

    })
    it("Edit APP", function () {
        const lo = new SignInPage()
        const si = new SignUpPage()
        const hp = new homePage()
        hp.getApptable().each(function ($el, $index, $list) {
          
            let text = hp.getEachApp($el)
            if (text === this.data1.APP_Name) {
                cy.log("ducess" + $index)
                hp.getEditAppIcon($el).click()
                hp.getAppName().type(this.data1.APP_Name + "edited")
                hp.getUpdateBtn().click()
                hp.getAppEditmsg().should('be.visible')
                cy.contains(this.data1.APP_Name + "edited").should('be.visible')
            }

        })
    })
    it("Delete APP", function () {
        const lo = new SignInPage()
        const si = new SignUpPage()
        const hp = new homePage()
       hp.getApptable().each(function ($el, $index, $list) {
        let text = hp.getEachApp($el)
            var text1 = this.data1.APP_Name + "edited"
            cy.log(text1)
            if (text === text1) {
               
               hp.getAPPDelicon($el).click()
                hp.getConfirmBtn().click()
                cy.contains(this.data1.APP_Name + "edited").should('not.exist')

            }

        })






    })
})