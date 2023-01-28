export const checkButtonIsDisabled = (buttonName) => {
    cy.getIframe()
      .find('button')
      .contains(buttonName)
      .parent()
      .parent()
      .should('be.disabled')
}

export const clickButtonByValue =(name) => {
    cy.getIframe()
      .find('button')
      .contains(name)
      .should('exist')
      .click()
    
    cy.wait(3000)
    return 
}

export const checkButtonIsActive = (buttonName) => {
  cy.getIframe()
    .find('button')
    .contains(buttonName)
    .should('exist')
    .parent()
    .should('not.be.disabled')
}

export const checkButtonIsVisible = (buttonName) => {
  cy.getIframe()
    .find('button')
    .contains(buttonName)
    .should('be.visible')
    .and('contain.text', buttonName)
}