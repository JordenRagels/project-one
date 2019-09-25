
describe('Simple Test', () => {
    it('Tests that Cypress is integrated', () => {
        expect(true).to.equal(true) // sample passing test
        // expect(true).to.equal(false) // sample failing test
    })
})

// (https://docs.cypress.io/guides/getting-started/writing-your-first-test.html#Write-a-real-test)
// 3 phases to testing application:
    // 1) Set up the application state.
    // 2) Take an action.
    // 3) Make an assertion about the resulting application state.

describe('QA Tests for Project One', () => {
    
    it('Visits the Rhythm Radar Page', () => {
        cy.visit('localhost:5500/index.html')
    })

    it('Should be able to search for a city and state', () => {
        cy.get('#inputCity').type('Asheville')
        cy.get('#inputState').select('NC')
    })
})


