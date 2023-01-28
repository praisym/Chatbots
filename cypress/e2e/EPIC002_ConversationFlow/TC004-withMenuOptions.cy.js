import { checkButtonIsActive, checkButtonIsVisible, clickButtonByValue } from "../../support/Helpers/buttons"
import { fillInInputValue } from "../../support/Helpers/inputs"
import { conversationPage } from "../../support/PageObjects/conversationFlowElements"
import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot conversation with menu options',() => {
    
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.log('launch webrowser to the URL')        
        cy.visit('/')
    })

    it('Verify the menu bar is visible and clickable', () => {
        const WebPage = new webPage()

        WebPage
            .clickOnChatbot()
            .verifyDuplicateChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('menu')
        checkButtonIsVisible(' RSS ')
        checkButtonIsVisible('New Topic')
        clickButtonByValue('New Topic')
        checkButtonIsVisible('Pricing')
        checkButtonIsVisible('Broadcast')
        checkButtonIsVisible('Text-To-Speech')

        WebPage
            .closeChatbot()

    })

    it('Verify the responses for `RSS` when selected from menu', () => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()
            .verifyDuplicateChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('menu')
        clickButtonByValue(' RSS ')

        ConversationPage
            .verifyMessage(`RSS feed`,`Below are all the posts from our RSS feed. Enjoy! 👀😀`)
            //.verifyDateAndTime(`RSS feed`) -> Need to work on milliseconds
            .verifySignature('RSS feed')
            .verifyMessageAvatar('RSS feed')

        WebPage
            .closeChatbot()
    })

    it('Verify the responses for `Pricing` when selected from menu', () => {

        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()
            .verifyDuplicateChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('menu')
        clickButtonByValue('New Topic')
        clickButtonByValue('Pricing')

        ConversationPage
            .verifyMessage(`built for you?`,`Are you looking to have one or two chatbots built for you?  🤖 🤖:`)
            //.verifyDateAndTime(`built for you?`) -> Need to work on milliseconds
            .verifySignature('built for you?')
            .verifyMessageAvatar('built for you?')
            .verifyMessage(`enterprise`,`Or are you an enterprise or an IT service wanting to build many white label chatbots?`)
            //.verifyDateAndTime(`enterprise`) -> Need to work on milliseconds
            .verifySignature('enterprise')
            .verifyMessageAvatar('enterprise')

        clickButtonByValue('Not applicable')

        ConversationPage
            .verifyMessage(`not addressed here`,`If your case is not addressed here you may ask to be contacted by one of our team and talk about it.`)
            //.verifyDateAndTime(`not addressed here`) -> Need to work on milliseconds
            .verifySignature('not addressed here')
            .verifyMessageAvatar('not addressed here')
        
        WebPage
            .closeChatbot()
    })

    it('Verify the menu is clickable when text-to-speech buttons are suggested',() => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()
            .verifyDuplicateChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('menu')
        checkButtonIsActive(' RSS ')
        clickButtonByValue(' RSS ')

        ConversationPage
            .verifyMessage(`RSS feed`,`Below are all the posts from our RSS feed. Enjoy! 👀😀`)
            //.verifyDateAndTime(`RSS feed`) -> Need to work on milliseconds
            .verifySignature('RSS feed')
            .verifyMessageAvatar('RSS feed')
            
        WebPage
            .closeChatbot()
    })

})