describe('Navigation Testing', () => {
    it('Navigation: Logged out user', () => {
        cy.visit('http://localhost:3000')
        cy.get('span').contains('OdinSmurfs')
        cy.get('[data-test-id="link-About us"]').contains('About us')
        cy.get('[data-test-id="link-Home"]').contains('Home')
        cy.get('[data-test-id="link-Shop"]').contains('Shop')
        cy.get('[data-test-id="link-Login"]').contains('Login')
        cy.get('[data-test-id="link-Register"]').contains('Register')
    })

    it('Navigation: Logged in user', () => {
        cy.visit('http://localhost:3000')
        cy.get('[data-test-id="link-Login"]').contains('Login').click()
        cy.get('#email').type('willy@gmail.com')
        cy.get('#password').type('123123')
        cy.get('button').contains('Login').click()
        cy.get('[data-test-id="link-My Orders"]').contains('My Orders')
        cy.get('[data-test-id="link-About us"]').contains('About us')
        cy.get('[data-test-id="link-Home"]').contains('Home')
        cy.get('[data-test-id="link-Logout"]').contains('Logout')
        cy.get('[data-test-id="link-Hello, Willy"]').contains('Hello, Willy')
    })

    it('Navigation: About link click updates url', () => {
        cy.get('[data-test-id="link-About us"]').click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/about')
        })
    })

    it('Navigation: Shop link click updates url', () => {
        cy.get('[data-test-id="link-Shop"]').click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/shop')
        })
    })
})