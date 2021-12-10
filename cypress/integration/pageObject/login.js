
class login{

    getUsername(){
        return cy.get("#username")
    }
    getPassword(){
        return cy.get("#password")
    }

}
export default login;