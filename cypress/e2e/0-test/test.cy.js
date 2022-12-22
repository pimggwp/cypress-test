/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("example", () => {
  beforeEach(() => {
    cy.visit("url"); //add url
  });

  it("Login", () => {
    const username = "username"; //add username
    const password = "password"; //add password
    cy.get("#userNameInput")
      .type(username, { delay: 100 })
      .should("have.value", username);
    cy.get("#nextButton").click();
    cy.get("#passwordInput")
      .type(password, { delay: 100 })
      .should("have.value", password);
    cy.get("#submitButton").click();
    cy.on("uncaught:exception", (e) => {
      if (e.message.includes("Things went bad")) {
        // we expected this error, so let's ignore it
        // and let the test continue
        return false;
      }
    });
    cy.visit("https://hec-paris.blackboard.com/auth-saml/saml/redirectToLearn");
  });
});
