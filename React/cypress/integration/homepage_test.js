describe('Homepage Testing', () => {
    it('Homepage: basic information', () => {
        cy.visit('http://localhost:3000')
        cy.get('div').contains('Buy Unranked').contains('LOL Accounts')
        cy.get('div').contains('INSTANT DELIVERY & FULL EMAIL ACCESS ON ALL OUR LOL SMURFS')
    })

    it('Homepage: logged in user', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="link-Login"]').contains('Login').click()
        cy.get('#email').type('willy@gmail.com')
        cy.get('#password').type('123123')
        cy.get('button').contains('Login').click()
    })

    it('Homepage: logged out user', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="home-Login"]').contains('Login')
        cy.get('[data-test-id="home-Register"]').contains('Register')
        cy.get('[data-test-id="home-Shop"]').contains('Shop')
        cy.get('div').contains('New here?')
    })
})