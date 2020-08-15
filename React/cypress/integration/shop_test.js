describe('Shop page Testing', () => {
    it('Shop page: switching through different items unlogged', () => {
        cy.visit('http://localhost:3000/shop')
        cy.get('div').contains('Premium unverified Accounts')
        cy.get('img').first().click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/accounts/unverified')
        })
        cy.get('img').first().click()
        cy.get('p').contains('You have to be logged to buy this item!')
    })

    it('Shop page: switching through different items logged', () => {
        cy.visit('http://localhost:3000/login')
        cy.get('span').contains('Login')
        cy.get('#email').type('lenny@gmail.com')
        cy.get('#password').type(123123)
        cy.get('button').click()
        cy.get('[data-test-id="link-Shop"]').click()
        cy.get('div').contains('Premium unverified Accounts')
        cy.get('img').first().click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/accounts/unverified')
        })
        cy.get('img').first().click()
        cy.get('a').contains('Add to Cart').click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/shop')
        })
        cy.get('a i').click()
        cy.get('a').contains('Checkout').click()
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('http://localhost:3000/about')
        })
        cy.visit('http://localhost:3000/user/orders')
        cy.get('p').last().contains('Pending')
    })
})