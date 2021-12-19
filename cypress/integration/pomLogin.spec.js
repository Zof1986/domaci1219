///<reference types="cypress" />

import { authLogin } from "../Pageobject/authLogin";
import { header } from "../Pageobject/Header";

const faker = require("faker");

describe('POM Login', () => {

    let validEmail = "nikola.zof@gmail.com";
    let validPass = "dukenukem3d";
    
    let userData = {
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
        randomName: faker.name.findName()
        
    };

    

    before('visit app', () => {
        cy.visit('/');
        cy.url().should("contains", "gallery-app");
    });

    it('login with invalid credentials', () => {
        cy.get("a[href='/login']").click();
        cy.url().should("contains", "/login");
    });

    it('login with valid credentias', () => {

        cy.get("a[href='/login']").click();
        cy.url().should("contains", "/login");

        authLogin.login(validEmail,validPass);
        cy.url().should("not.contains", "/login");

    })
    
    
    it('logout', () => {
        cy.wait(1000);
        header.logoutBtn.click();
    })

    it('allgaleries', () => {
        cy.wait(1000);
        header.allgaleries.click();
    })

    it('register', () => {
        cy.wait(1000);
        header.registerbtn.click();
        header.firstnameform.type(userData.randomName);
        header.lastnameform.type(userData.randomName);
        header.emailform.type(userData.randomEmail);
        header.passwordform.type(userData.randomPassword);
        header.passwordconfirmform.type(userData.randomPassword);
        header.submitvtnform.check();
        header.termscondform.click();
    })

    
})