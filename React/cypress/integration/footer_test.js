describe('Footer Testing', () => {
    it('Footer: basic information', () => {
        cy.visit('http://localhost:3000')
        cy.get('footer div').contains('© 2020 Copyright:')
        cy.get('footer div a').contains('OdinSmurfs.com')
        cy.expect('span').to.have.lengthOf(4)
    })
})