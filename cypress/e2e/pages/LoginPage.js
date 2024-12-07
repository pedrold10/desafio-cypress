
class LoginPage {
    loadUserFromFixture(index) {
      cy.fixture('users').then((users) => {
        const user = users[index];
        this.fillUsername(user.username);
        this.fillPassword(user.password);
      });
    }
  
    fillUsername(username) {
      cy.get('#user-name').type(username);
    }
  
    fillPassword(password) {
      cy.get('#password').type(password);
    }
  
    clickLogin() {
      cy.get('#login-button').click();
    }
  }
  
  export default new LoginPage();
  