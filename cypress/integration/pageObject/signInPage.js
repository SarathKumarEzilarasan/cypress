
class signInPage{

    getAcceptBtn(){
        return cy.get('.btn')
    }
    getLoginlink(){
        return  cy.contains('Log In')
    }
    
    getEmail(){
        return  cy.get("#username")
    }
    getPassword(){
        return  cy.get('#password')
    }
    getLoginBtn(){
        return   cy.get('#kc-login')
    }
    getOrg(){
        return   cy.get(':nth-child(4) > .col > input')
    }
    getRole(){
        return  cy.get('.role-break > .style-up5f4i-0 > :nth-child(3)')
    }
    getLiketodo(){
        return   cy.get('.col > .style-up5f4i-0 > :nth-child(3)')
    }
    getNext(){
        return cy.get('.enrollNext')
    }
}
export default signInPage;