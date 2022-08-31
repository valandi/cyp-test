/// <reference types="cypress" />

describe('Ligonier', () => {
    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Ligonier pdp', 
            testName: 'Ligonier pdp test',
        })
    })

    it('Ligonier pdp', () => {

        // Load the login page.
        cy.visit('https://www.ligonier.org/store/the-rc-sproul-signature-classics-6-volume-hardcover-collection')
        cy.wait(2500);
        // Verify the full login page loaded correctly.
        cy.eyesCheckWindow({
            tag: "Full page",
            target: 'window',
            fully: true,
            waitBeforeCapture: 5000,
            lazyLoad: {
                scrollLength: 250,  // amount of pixels to use for each scroll attempt
                waitingTime: 500,   // milliseconds to wait in-between each scroll attempt
            }
        });
        cy.eyesClose()
    })
})