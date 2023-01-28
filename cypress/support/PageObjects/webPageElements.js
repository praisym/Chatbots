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
        cy.get(webPageSelectors.snatchbot).click()
        cy.wait(4000)
        cy.getIframe().find('.chat__bot-name').should('be.visible').and('contain.text','SnatchBot')

        return this;
    }

   
}