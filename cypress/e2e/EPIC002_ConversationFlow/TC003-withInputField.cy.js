//Test Case to verify the chatbot responses when user interacts through input field

import { checkButtonIsActive, checkButtonIsDisabled, clickButtonByValue } from "../../support/Helpers/buttons"
import { fillInInputValue } from "../../support/Helpers/inputs"
import { conversationPage } from "../../support/PageObjects/conversationFlowElements"
import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot conversation through input field',() => {
    
    beforeEach(() => {
        cy.clearLocalStorage()
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

        fillInInputValue('Ida')
        clickButtonByValue('send')

        ConversationPage
            .verifyMessage(`Good to chat to you`,`Hi Ida! Good to chat to you. Did I get your name right?`)
            //.verifyDateAndTime(`Jamie`) -> Need to work on milliseconds
            
        WebPage.closeChatbot()
    })

    it('Verify the response for `explain chatbots` typed in input field', () => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        fillInInputValue('explain chatbots')
        clickButtonByValue('send')

        ConversationPage
            .verifyMessage(`software applications`,`Basically, we chatbots are just software applications, like any other application you use on your computer. The important difference is that people interface with us using conversation. Shall I say more about this? 👀`)
            //.verifyDateAndTime(`software applications`) -> Need to work on milliseconds
            .verifySignature('software applications')
            .verifyMessageAvatar('software applications')
            
        WebPage.closeChatbot()
    })

    it('Verify the send button is disabled when there are `text-to-speech` buttons', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        checkButtonIsActive('Yes')
        checkButtonIsDisabled('send')

        WebPage.closeChatbot()
        
    })

    it('Verify the text field maximum character length', () => {

    })

    it('Verify attempt to submit without any text in the input field', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue(' ')
        checkButtonIsDisabled('send')

        WebPage.closeChatbot()

    })

    it('Verify the response when irrelevant characters are typed', () => {

        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        fillInInputValue('irrelavant')
        clickButtonByValue('send')
    
        ConversationPage
            .verifyMessage(`sorry`,`I'm sorry, Ida, I didn't get that. Let me tell you again what I can do for you.`)
            //.verifyDateAndTime(`sorry`) -> Need to work on milliseconds
            .verifySignature('sorry')
            .verifyMessageAvatar('sorry')
        
        WebPage.closeChatbot()
        
    })
})