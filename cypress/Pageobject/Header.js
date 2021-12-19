class Header {

    get loginBtn(){
        return cy.get("a[href='/login]");
    }

    get registerBtn(){
        return cy.get("a[href='/register')");
    }

    get logoutBtn(){
        return cy.get(".nav-link").eq(3);
    }

    get allgaleries(){
        return cy.get(".nav-link").eq(0);
    }

    get registerbtn(){
        return cy.get(".nav-link").eq(2);
    }

    get firstnameform(){
        return cy.get("#first-name");
    }

    get lastnameform(){
          return cy.get("#last-name");
    }

    get emailform(){
        return cy.get("#email");
    }
    
    get passwordform() {
        return cy.get("#password");
    }

    get passwordconfirmform(){
        return cy.get("#password-confirmation");
    }

    get termscondform(){
           
        return cy.get("button[type='submit']");
    }
    
       // "SubmitButton": "button[type='submit']",
    get submitvtnform(){  
         return cy.get("input[type='checkbox']");
    }
    
}

export const header = new Header();