///<reference types="Cypress" />

describe("My practise",function(){
    it("IsVisible",function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("body").then(function($body){
            cy.log($body.find("#displayed-text").length)
            cy.log($body.find("#displayed-text").is(':visible'))
        })
           
        cy.get("body").then(function($body){
            cy.log($body.find("#displayed-text").length)
            if($body.find("#displayed-text").length>0){
                cy.log("The element is displayed")
            }
            else{
                cy.log("the element is not displayed")
            }
               
        })

    })
    it("hiding",function(){
        cy.get("#hide-textbox").click()
        cy.get("body").then(function($body){
            cy.log($body.find("#displayed-text").length)
            
            cy.log($body.find("#displayed-text").is(':visible'))
            cy.get('#show-textbox').click();
            cy.get('#show-textbox').click();
            cy.wait(3000)
            cy.log($body.find("#displayed-text").is(':visible'))
        })
    })
    it.skip("openTab",function(){
        cy.get("#opentab").then(function($tab){
         var tab_url=   $tab.prop('href')
         cy.log(tab_url)
        cy.visit(tab_url)
        cy.get('.col-md-6 > h2 > span').should('be.visible').then(function($newtext){
            cy.log($newtext.text())
            var htext=$newtext.text()
        
expect(htext).to.include('Learn Earn & Shine')

        })
        })
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })
    it("removeAttr",function(){
        cy.get("#opentab").invoke('removeAttr','target').click()
        cy.get('.col-md-6 > h2 > span').should('be.visible').then(function($newtext){
            cy.log($newtext.text())
            var htext=$newtext.text()
        
expect(htext).to.include('Learn Earn & Shine')
cy.go('back')

        })
    })
    it.skip("Alert",function(){
cy.get("#name").type("Test")
cy.get("#alertbtn").click()
cy.on('window:alert',function(str){
    expect(str).to.equal('Hello Test, share this practice page and share your knowledge')
})
    })
    it("Alert Confirm",function(){
        cy.get("#name").type("Test")
        cy.get("#confirmbtn").click()
        
        cy.on('window:confirm',function(str){
            expect(str).to.equal('Hello Test, Are you sure you want to confirm?')
        })
    })
    it("Alert Cancel",function(){
        cy.get("#name").type("Test")
        cy.get("#confirmbtn").click()
        
        cy.on('window:confirm',function(str){
            expect(str).to.equal('Hello Test, Are you sure you want to confirm?')
            return false

        })
    })
    it("Table Handling",function(){
        cy.get("table[name='courses'] tr").each(function($td,index,$list){
            $td.find("td:nth-child(2)")
            cy.log($td.text()+index)
            if($td.text().includes('JMETER')){
                cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                 const priceText=   price.text()
                 expect(priceText).to.equal('25')
                })
            }
        })
       
    })
})