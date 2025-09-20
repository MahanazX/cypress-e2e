describe('Login Flow', () => {
    it('Logs in successfully', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
    });

    it('Fails login with invalid credentials', () => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type('wrong_user');
      cy.get('[data-test="password"]').type('wrong_pass');
      cy.get('[data-test="login-button"]').click();
      cy.get('[data-test="error"]').should('contain', 'Username and password do not match');
    });
  });