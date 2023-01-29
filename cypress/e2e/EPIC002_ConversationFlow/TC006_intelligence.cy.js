import { it } from "node:test"
import { clickButtonByValue } from "../../support/Helpers/buttons"
import { conversationPage } from "../../support/PageObjects/conversationFlowElements"
import { webPage } from "../../support/PageObjects/webPageElements"

describe('Verify the chatbot intelligence',() => {
    
    beforeEach(() => {
        cy.log('launch webrowser to the URL')        
        cy.visit('/')
    })

    it('Verify if the chatbot is able to remember the user name during conversation', () => {
        const WebPage = new webPage()
        const ConversationPage = new conversationPage()

        WebPage
            .clickOnChatbot()
            .verifyDuplicateChatbot()
        
        fillInInputValue('Ida')
        clickButtonByValue('send')
        clickButtonByValue('Yes')
        clickButtonByValue('Costs')
        clickButtonByValue('Not applicable')
        clickButtonByValue('Yes')

        ConversationPage
            .verifyMessage(`Ida, you'd like to contact`,`So, Ida, you'd like to contact SnatchBot. Right?   📩`)
            //.verifyDateAndTime(`Ida, you'd like to contact`) -> Need to work on milliseconds
            .verifySignature(`Ida, you'd like to contact`)
            .verifyMessageAvatar(`Ida, you'd like to contact`)
    })

    // it('Verify the email id is stored correctly in database', () => {
        //1. Continue conversation until it asks for email id
        //2. Send email id through input field
        //3. Connect to DB
        //4. Query with email id of user based on time
    // })

    // it('Verify the chatbot to human handover ', () => {
        
    // })

    // it('Verify the number of customer queries a chatbot can handle', () => {

    // })


})