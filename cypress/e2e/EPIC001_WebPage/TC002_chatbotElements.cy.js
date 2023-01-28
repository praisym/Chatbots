//Test Case to verify if the chatbot elements are displayed correctly

import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot elements are displayed correctly', () => {

    beforeEach(() => {
        cy.clearLocalStorage()
        cy.log('Launch webbrowser to the URL')
        cy.visit('/') 
    })

    it('Chatbot window opens on click', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()
            .closeChatbot()
            
    })

    it('Verify the webchat headers', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()
            .verifyAvatar()
            .verifyHeaders()
            .verifyChatShare()
            .closeChatbot()
            
    })

    it('Verify the webchat body', () => {
        const WebPage = new webPage()

        WebPage
            .verifyChatBody()
            .closeChatbot()
    })

    it('Verify the webchat form', () => {
        const WebPage = new webPage()

        WebPage
            .verifyChatBody()
            .closeChatbot()

    })

})