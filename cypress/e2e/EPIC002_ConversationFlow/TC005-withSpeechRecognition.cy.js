import { checkButtonIsActive, checkButtonIsDisabled, checkButtonIsVisible, clickButtonByValue } from "../../support/Helpers/buttons"
import { fillInInputValue } from "../../support/Helpers/inputs"
import { conversationPage } from "../../support/PageObjects/conversationFlowElements"
import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot conversation with mic',() => {
    
    beforeEach(() => {
        cy.log('launch webrowser to the URL')        
        cy.visit('/')
    })

    it('Verify the mic is visible and clickable', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()

        checkButtonIsActive('mic')

        WebPage.closeChatbot()

    })

    it('Verify the mic is disabled when text-to-speech buttons are suggested', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue('Ida')
        clickButtonByValue('send')
        checkButtonIsVisible('Yes')
        checkButtonIsDisabled('mic')

        WebPage.closeChatbot()
    })

    it('Verify the mic maximum allowance time', () => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('mic')
        cy.wait(60000)
        
        ConversationPage
            .verifyMessage(`recognize your message`,`Sorry, could not recognize your message, please try again.`)

    })

    it('Verify the response when there is no speech',() => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()

        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('mic')
        clickButtonByValue('mic', {timeout:3000})
        
        ConversationPage
            .verifyMessage(`recognize your message`,`Sorry, could not recognize your message, please try again.`)
    })

})