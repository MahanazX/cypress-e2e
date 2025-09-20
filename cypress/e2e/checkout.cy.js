describe('Checkout Flow', () => {
       beforeEach(() => {
         cy.visit('https://www.saucedemo.com/');
         cy.get('[data-test="username"]').type('standard_user');
         cy.get('[data-test="password"]').type('secret_sauce');
         cy.get('[data-test="login-button"]').click();
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('.shopping_cart_link').click();
         cy.get('[data-test="checkout"]').click();
       });

       it('Completes checkout with valid details', () => {
         cy.get('[data-test="firstName"]').type('Mahanaz');
         cy.get('[data-test="lastName"]').type('Tabassum');
         cy.get('[data-test="postalCode"]').type('1000');
         cy.get('[data-test="continue"]').click();
         cy.get('[data-test="finish"]').click();
         cy.get('.complete-header').should('contain', 'Thank you for your order');
       });
     });