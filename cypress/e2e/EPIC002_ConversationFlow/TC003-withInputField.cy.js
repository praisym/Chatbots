//Test Case to verify if the chatbot elements are displayed correctly

import { conversationPage } from "../../support/PageObjects/conversationFlowElements"
import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot conversation with input field text',() => {
    
    beforeEach(() => {
        cy.log('launch webrowser to the URL')        
        cy.visit('/')
    })

    it('Verify the welcome messages', () => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()
        ConversationPage
            .verifyMessage(`Jamie`,`Hi 👋 \nI'm Jamie, your friendly guide to chatbots and SnatchBot.`)
            //.verifyDateAndTime(`Jamie`) -> Need to work on milliseconds
            .verifySignature('Jamie')
            .verifyMessageAvatar('Jamie')
            .verifyMessage(`name`,`There’s lots I can show you but first please let me know your name.`)
            //.verifyDateAndTime(`Jamie`) -> Need to work on milliseconds
            .verifySignature('name')
            .verifyMessageAvatar('name')
            .fillInInput('Ida')
            .sendMessage()
            .verifyMessage(`Good to chat to you`,`Hi Ida! Good to chat to you. Did I get your name right?`)
            //.verifyDateAndTime(`Jamie`) -> Need to work on milliseconds
    })

    // it('Verify the relevant response on typing the name', () => {
    //     cy.get('#sntch_button').click()
    // })

    // it('Verify the response for `Explain chatbots` typed in input field', () => {

    // })

    // it('Verify the input field is disabled when there are `text-to-speech` buttons', () => {

    // })

    // it('Verify the text field maximum character length', () => {

    // })

    // it('Verify attempt to submit without any text in the input field', () => {

    // })
})