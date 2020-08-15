describe('Register page Testing', () => {
    it('Register page: basic information', () => {
        cy.visit('http://localhost:3000/register')
        cy.get('span').contains('Register')
        cy.get('#email').should('have.value', '')
        cy.get('#username').should('have.value', '')
        cy.get('#password').should('have.value', '')
        cy.get('#rePassword').should('have.value', '')
        cy.get('button').contains('Register')
        cy.get('button').contains('Click me for free RP')
        cy.get('div').contains('Riot Points: 0 RP')
    })

    it('Register page: rp button', () => {
        cy.visit('http://localhost:3000/register')
        cy.get('span').contains('Register')
        cy.get('button').contains('Click me for free RP').click().click().click().click().click().click()
        cy.get('div').contains('Nothing is free in this life, expect our instant delivery')
    })

    // it('Register page: rp button', () => {
    //     cy.visit('http://localhost:3000/register')
    //     cy.get('#email').type('lenny@gmail.com')
    //     cy.get('#username').type('Lenny')
    //     cy.get('#password').type('123123')
    //     cy.get('#rePassword').type('123123')
    //     cy.get('button').contains('Register').click()
    //     cy.get('span').contains('Login')
    // })
})