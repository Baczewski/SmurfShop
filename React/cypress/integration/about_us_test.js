describe('About us Testing', () => {
    it('About us: loading', () => {
        cy.visit('http://localhost:3000/about')
        cy.get('h2').contains('WE PROVIDE:')
        cy.get('#about-div').contains('Lifetime Warranty')
        cy.get('#about-div').contains('Live Chat Support')
        cy.get('#about-div').contains('Instant Delivery 24/7')
    })
})