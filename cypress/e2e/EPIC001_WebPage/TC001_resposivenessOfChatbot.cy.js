//Test Case to verify if the webpage loads successfully along with chatbot

import { webPage } from "../../support/PageObjects/webPageElements";

describe('Verify the webpage loads successfully', () => {

    // Launch Webrowser to the URL
    beforeEach(() => {
        cy.log('launch webrowser to the URL')
        cy.visit('/');
    })

    it('Webpage loads successfully', () => {
        const WebPage = new webPage()
        
        // Verify the url works
         WebPage
            .verifyUrl()         
    });

    it('Chatbot is responsive on all screen sizes', () => {
        const WebPage = new webPage()

        //Verify if the chatbot is reponsive
        WebPage
            .verifyResponsiveness()
    })

    it('Has the lang attribute set to en', () => {
        const WebPage = new webPage()

        // Verify language is set to english
        WebPage
            .verifyLanguageSetting()
      });
})