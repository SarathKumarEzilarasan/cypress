///<reference types="Cypress" />
import login from '../pageObject/login'
describe("Spec1",function(){
    beforeEach(function(){

       
            cy.fixture("mydata").then(function(data){
      this.data=data
      cy.log("I am before each")
            })
    })
    it("Verifying radio1 text",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        
        cy.log("Vivek")
        var a=10
           cy.get("label[for='radio1']").then(function(label){
var text1=label.text()
cy.log("th text is"+text1)
expect(text1).to.include('Radio1')
           })
    
    })
    it("Verifying radio2 text",function(){
        cy.get("label[for='radio2']").then(function(label){
            var text1=label.text()
            cy.log("th text is"+text1)
            expect(text1).to.include('Radio2')
                       })

    })
    it("URL",function(){
       
    const lo= new login()
        cy.visit("https://the-internet.herokuapp.com/login")
        lo.getUsername().type(this.data.username)
        lo.getPassword().type(this.data.password)
        
    })
})