export const fillInInputValue = (value) => {
    cy.getIframe()
      .find('#chat_input')
      .should('be.visible')
      .type(value)
}