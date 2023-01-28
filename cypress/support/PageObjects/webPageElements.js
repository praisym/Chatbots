import { clickButtonByValue } from "../Helpers/buttons";

export const webPageSelectors = {
    header: '.main__header--left',
    snatchbot: '#sntch_button',
    html: 'html',
    chatbox: '.chat.light',
    close: '#sntch_close',
    chatTitle: '.chat__title'
}

export const webPageTexts = {

}

export class webPage {
    verifyUrl() {
        cy.url().should('eq', 'https://snatchbot.me/');
        cy.get(webPageSelectors.header).should('contain.text','chatbots')
        cy.log('url works')

        return this;
    }

    verifyResponsiveness() {
        const screenSizes = [
            { width: 320, height: 480 },
            { width: 1024, height: 768 },
            { width: 1920, height: 1080 },
        ];
    
        screenSizes.forEach(({ width, height }) => {
    
              cy.viewport(width, height);
              cy.get(webPageSelectors.snatchbot).should('be.visible');      
              cy.log('Chatbot is visible on the screen')
        });

        return this;
    }

    verifyLanguageSetting() {
        cy.get(webPageSelectors.html).should('have.attr', 'lang', 'en');
        cy.log('language is english');

        return this;
    }

    clickOnChatbot() {
        cy.get(webPageSelectors.snatchbot)
          .should('exist')
          .click()
        cy.wait(4000)
        cy.getIframe()
          .find('.chat__bot-name')
          .should('be.visible')
          .and('contain.text','SnatchBot')

        return this;
    }

    closeChatbot() {
        cy
          .get('#sntch_close')
          .should('exist')
          .click({force:true})
        
        return this;
    }

    verifyHeaders() {
        cy.getIframe()
          .find('.chat__channel')
          .each(button => {
            cy.wrap(button)
                  .invoke('attr','style')
                  .then(src => {
                    cy.request(src)
                      .its('status')
                      .should('eql',200)
                  })
            })
        
        return this;
    }

    verifyChatShare() {
        cy.getIframe()
          .find('.chat__share')
          .should('exist')
          .and('have.css','color','rgb(0, 121, 254)')

        return this;
    }

    verifyAvatar() {
        cy.getIframe()
          .find('.chat__avatar')
          .then(image => {
            cy.wrap(image)
              .invoke('attr','style')
              .then(src => {
                cy.request(src)
                  .its('status')
                  .should('eql',200)
              })
          })

        return this;
    }

    verifyChatBody() {
        cy.getIframe()
          .find('.chat__body')
          .should('exist')

        return this;
    }

    verifyChatForms() {
        cy.getIframe()
          .find('.chat__body')
          .should('exist')
          .and('have.css','color','rgb(0, 121, 254)') 
        
        cy.getIframe()
          .find('.mat-button-wrapper')
          .should('exist')
        
        cy.getIframe()
          .find('.chat__input')
          .should('exist')

        return this;
    }
   
    verifyDuplicateChatbot() {
      cy.getIframe()
        .then(modal => {
          if(modal.find('[data-test="chat_modal_duplicated_conversation"]').length > 0) {
            clickButtonByValue(' Yes, start new ')
            cy.reload()
          }
        })
      
      return this;
    }
}