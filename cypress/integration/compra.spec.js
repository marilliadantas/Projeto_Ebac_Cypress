/// <reference types = "Cypress"/>

context('Realizar uma compra', () => {
    
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br')
    });

    afterEach(() => {
        cy.screenshot()
    }); 

    it('Simular compra', () => {
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.url().should('contain', '/produtos')

        cy.get('.post-2559 > .product-block > .block-inner > .image > .product-image > .image-hover').click()
        cy.url().should('contain','/product')
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Blue').click()

        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.page-title').should('contain', 'Carrinho')
        cy.get('.checkout-button').click()
        cy.url().should('contain', '/checkout')


        cy.get('#billing_first_name').type('Marillia')
        cy.get('#billing_last_name').type('Teste')
        cy.get('#billing_last_name').type('TechTeste')
        cy.get('#billing_address_1').type('Avenida 13 de Maio')
        cy.get('#billing_address_2').type('Apartamento')
        cy.get('#billing_city').type('São Paulo')
        cy.get('#billing_postcode').type('79543-928')
        cy.get('#billing_phone').type('550193448')
        cy.get('#billing_email').type('teste@teste.com')
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.page-title').should('contain', 'Pedido recebido')
        cy.url().should('contain','/order-received')
    });
});