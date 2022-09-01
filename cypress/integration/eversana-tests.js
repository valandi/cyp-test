/// <reference types="@applitools/eyes-cypress" />

/// <reference types="cypress" />

describe('Sarclisa Finland', () => {

    beforeEach(() => {
        cy.eyesOpen({
            disableBrowserFetching: true, 
            batchName: 'Sarclisa Finland One page',
            appName: 'Sarclisa Finaland One page',
            browser: [
                { width: 1600, height: 900, name: 'chrome' },
            ],
        });
    });

    afterEach(() => {
        cy.eyesClose();
    });

    let url = 'https://www.sanofimyelomahcp.com/'

    //'https://sanofimyelomahcp-1-1-1.sanofigenzyme.intouch-qc.com/'

    function eyesCheck(urltag, pageTitle) {
        cy.url().should('include', urltag)
        cy.wait(2000);
        cy.eyesCheckWindow(pageTitle);
    }

    beforeEach(() => {
        cy.visit(url);
        cy.get('.fa').click();
        cy.get('[data-code="FI"]').click({force:true});
        cy.get('#fimnet-auth-link > span').click();
        cy.get('#login_user').type('wilcse-1')
        cy.get('[type="password"]').type('SANOFI022')
        cy.get('button').click();

        cy.visit({
            url: `${url}/en-fi/`,
            headers: {
                'Referer': url
            }
        });
    });


    it("MOA", () => {
        //Mechanism of Action - IKEMA Sarclisa + Kd
        cy.get('#navbarNav > ul > li:nth-child(2) > a > span').click({ force: true });
        cy.scrollTo('bottom');
        cy.wait(2500);
        cy.scrollTo('top');
        cy.wait(2500);
        eyesCheck('/mechanismofaction#mechanismofaction', 'Mechanism of Action');
    });
});