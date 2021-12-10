
class homePage{

    getBillingLink(){
        return cy.contains('billing')
    }
    getDash(){
        return cy.get(':nth-child(1) > :nth-child(1) > .btn')
    }
    getSummary(){
        return cy.visit("https://dashboard.rp2.dolbyio.com/dashboard/applications/summary")
    }
    getSkip(){
        return cy.get('.skip')
    }
    addNewApp(){
        return cy.get('.style-je6lyu-0')
    }
    getAppName(){
        return cy.get("input[id='Application Name: ']")
    }
    getConfirmBtn(){
        return  cy.get('.style-sc-1x2wexi-0')
    }
    addNewAppmsg(){
        return  cy.contains('Application has been successfully created!')
    }
    getApptable(){
        return   cy.get("table tr")
    }
    getEachApp($el){
        return $el.find("td:nth-child(2)").text()
    }
    getEditAppIcon($el){
        return   cy.wrap($el.find("td:nth-child(5) div div svg").eq(0))
    }
    getAppname(){
        return cy.get("input[id='Application Name: ']")
    }
    getUpdateBtn(){
        return cy.contains('Update')
    }
    getAppEditmsg(){
        return cy.contains('Changes has been saved!')
    }
    getApptable(){
        return  cy.get("table tr")
    }
    getAPPDelicon($el){
        return   cy.wrap($el.find("td:nth-child(5) div div svg").eq(1))
    }
}
export default homePage;