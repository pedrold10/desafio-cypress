const faker = require('faker');

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('Login com usuário gerado dinamicamente', () => {
    const randomUsername = faker.internet.userName();
    const randomPassword = faker.internet.password();

    cy.get('#user-name').type(randomUsername);
    cy.get('#password').type(randomPassword);
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
  });

  it('Login com usuário válido', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.url().should('include', '/inventory.html');
  });

  it('Login com usuário bloqueado', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.error-message-container').should('contain', 'Sorry, this user has been locked out.');
  });

  it('Login com senha incorreta', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();

    cy.get('.error-message-container').should('contain', 'Username and password do not match any user in this service');
  });

  it('Login sem preencher os campos', () => {
    cy.get('#login-button').click();

    cy.get('.error-message-container').should('contain', 'Username is required');
  });
});
