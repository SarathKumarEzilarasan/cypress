
class billingPage{

    getSkip(){
        return cy.get('.skip')
    }
    getDash(){
        return cy.get(':nth-child(1) > :nth-child(1) > .btn')
    }
   
    getSummar(){
        return cy.visit("https://dashboard.rp2.dolbyio.com/dashboard/applications/summary")
    }
    getProfile(){
        return cy.contains('my profile')
     }
     getPhnumber(){
        return cy.get("input[id='phone number:']")
    }
    getSaveprofile(){
        return  cy.contains('save changes')
    }
    getProfileSavemsg(){
        return cy.contains('Your profile has been successfully updated!')
    }
     getBilling(){
        return  cy.contains('billing')
    }
    

    getAddButton($body){
        return $body.find('.style-sc-1x2wexi-0')
    }
    getAddButton(){
        return cy.get('.style-sc-1x2wexi-0')
    }
    getFrame(){
        return cy.get('#z_hppm_iframe')
    }
    
    getFrame(){
        return cy.get('#z_hppm_iframe')
    }
    getFrameBody($iframe){
        return $iframe.contents().find('body')
    }
    getExpmonth($body){
       return  cy.wrap($body).find("#input-creditCardExpirationMonth")
    }
    getExpyear($body){
        return  cy.wrap($body).find("#input-creditCardExpirationYear")
     }
     getExpmonth($body){
        return  cy.wrap($body).find("#input-creditCardExpirationMonth")
     }
     getCCnum($body){
      return  cy.wrap($body).find("#input-creditCardNumber")
     }
     getCCcode($body){
         return   cy.wrap($body).find("#input-cardSecurityCode")
     }
     getCCname($body){
         return  cy.wrap($body).find("#input-creditCardHolderName")
     }
     getCCcountry($body){
         return cy.wrap($body).find("#input-creditCardCountry")
     }
     getCCsubmit($body){
         return cy.wrap($body).find("#submitButton")
     }
     getCloseBtn(){
         return cy.get('.close-remove-card')
     }
    getFrame(){
        return cy.get('#z_hppm_iframe')
    }
    getFrame(){
        return cy.get('#z_hppm_iframe')
    }
    
    getSummar(){
        return cy.visit("https://dashboard.rp2.dolbyio.com/dashboard/applications/summary")
    }
    getAddBillinfor(){
        return  cy.contains('Add Billing Information')
    }
    getBillAddress(){
        return  cy.get("input[id='Address:']")
    }
    getBillAdres2(){
        return cy.get("input[id='Address 2:']")
    }
    getCity(){
        return  cy.get("input[id='City:']")
    }
    getZip(){
        return  cy.get("input[id='Zip:']")
    }
    getNxtStep(){
        return cy.contains("Next step")
    }

}
export default billingPage;