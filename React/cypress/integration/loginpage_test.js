describe('Login page Testing', () => {
    it('Login page: basic information', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('span').contains('Login')
        cy.get('#email').should('have.value', '')
        cy.get('#password').should('have.value', '')
        cy.get('button').contains('Login')
    })

    it('Login page: log in successfully', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('span').contains('Login')
        cy.get('#email').type('willy@gmail.com')
        cy.get('#password').type(123123)
        cy.get('button').click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/')
        })
    })
})