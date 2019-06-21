/// <reference types="Cypress" />
context('Actions', () => {
  // beforeEach(() => {
  //   cy.visit('https://www.instagram.com/accounts/login/?source=auth_switcher')
  // })

  it('.type() - type into a DOM element', () => {
    cy.visit('https://www.instagram.com/accounts/login/?source=auth_switcher')

    cy.get('input[name="username"]')
      .type('moeeantonio', { delay: 100 }).should('have.value', 'moeeantonio')
    // cy.wait(2000)
    cy.get('input[name="password"]')
    .type('Ggaj1901227!', { delay: 200 }).should('have.value', 'Ggaj1901227!')
    // cy.wait(2000)

    //click on login
    cy.get('.L3NKy').click()
    cy.wait(1000)
    // select not send notifications
    cy.get('.HoLwm').click()

  })

  it('.type() - type on search bar user name to search', () => {
    cy.get('.XTCLo')
      .type('raf4.q0').should('have.value', 'raf4.q0')

    cy.wait(1000)
    cy.get('.z556c').click()
    cy.wait(1000)
    cy.get('.FyNDV').click('topLeft')

      // .FyNDV articl class
  })

  // it('.type() - type on first ', () => {
  //   cy.get('.Ypffh')
  //     .type('que lo que rafa posteqndo desde saipres hill').should('have.value', 'que lo que rafa posteqndo desde saipres hill')

  // })

  // it('.uncheck() - uncheck a checkbox element', () => {
  //   // https://on.cypress.io/uncheck

  //   // By default, .uncheck() will uncheck all matching
  //   // checkbox elements in succession, one after another
  //   cy.get('.tlZCJ [type="checkbox"]')
  //     .not('[disabled]')
  //     .uncheck().should('not.be.checked')
  // })

  // it('.click() - click on a DOM element', () => {
  //   cy.get('.L3NKy').click()
  // })

})