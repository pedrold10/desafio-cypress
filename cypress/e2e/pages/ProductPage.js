class ProductsPage {
    validatePage() {
      cy.url().should('include', '/inventory.html');
      cy.get('.title').should('contain.text', 'Products');
    }
  
    addToCart(productName) {
      cy.contains('.inventory_item', productName)
        .find('button')
        .contains('Add to cart')
        .click();
    }
  
    removeFromCart(productName) {
      cy.contains('.inventory_item', productName)
        .find('button')
        .contains('Remove')
        .click();
    }
  
    openCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default new ProductsPage();
  