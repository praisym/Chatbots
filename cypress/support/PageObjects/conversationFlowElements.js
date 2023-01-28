import { captureDateAndTime } from "../Helpers/dates";

export const conversationSelectors = {

}

export class conversationPage {
    verifyMessage(relevantText, expectedText) {
        cy.getIframe()
          .find('.message__body')
          .contains(relevantText)
          .then(message => {
            cy.log(message.text())
            expect(message.text()).to.contain(expectedText)
          })
  
    return this;
          
    }

    verifySignature(text) {
       cy.getIframe()
         .find('[data-test="message-text"]')
         .contains(text)
         .then(message => {
            cy.wrap(message).parentsUntil('.message__signature')
               .should('be.visible')
               .and('contain.text','SnatchBot')
               .and('have.css','color','rgb(33, 37, 41)') 
         })
        
        return this;
    }

    verifyMessageAvatar(text) {
        cy.getIframe()
         .find('[data-test="message-text"]')
         .contains(text)
         .then(avatar => {
            cy.wrap(avatar)
              .parentsUntil('.message__avatar')
              .should('be.visible')
              .then(img => {
                cy.wrap(img)
                  .invoke('attr','style')
                  .then(src => {
                    cy.request(src)
                      .its('status')
                      .should('eql',200)
                  })
               })
         })
        
        return this;
    }

    verifyDateAndTime(text) {
        cy.getIframe()
         .find('[data-test="message-text"]')
         .contains(text)
         .then(date => {
            cy.wrap(date)
            .parent()
            .parent()
            .siblings('.message__date')
            .then(dateAndTime => {
                expect(dateAndTime.text()).to.contain(captureDateAndTime()) 
            })
           
         })
        
        return this;
    }


}
