describe('Cart Flow', () => {
       beforeEach(() => {
         cy.visit('https://www.saucedemo.com/');
         cy.get('[data-test="username"]').type('standard_user');
         cy.get('[data-test="password"]').type('secret_sauce');
         cy.get('[data-test="login-button"]').click();
       });

       it('Adds item to cart', () => {
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('.shopping_cart_badge').should('contain', '1');
       });

       it('Views cart and removes item', () => {
         cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
         cy.get('.shopping_cart_link').click();
         cy.get('[data-test="remove-sauce-labs-backpack"]').click();
         cy.get('.shopping_cart_badge').should('not.exist');
       });
     });