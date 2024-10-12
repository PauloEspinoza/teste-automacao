
const selectorsList = {
    companyNameField:           '#tenancyname',
    userNameField:              '#usuario',
    passwordLoginField:         '#passwordLogin'

}


Cypress.Commands.add('fillMandatoryLoginFields', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
})


Cypress.Commands.add('fillMandatoryLoginFieldsAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('invalidCompanyDataAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type('EMPRESA INVALIDA')
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('invalidUserDataAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type('invalid user data')
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('invalidPasswordDataAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type('invalidPassword')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyCompanyFieldAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible')
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyUserFieldAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible')
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(enviaLogin.senha, { delay: 35 })
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyPasswordFieldAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyCompanyAndPasswordFieldsAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible')
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyUserAndPasswordFieldsAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible')
    cy.get(selectorsList.passwordLoginField).should('be.visible')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('emptyAllMandatoryFieldsAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible')
    cy.get(selectorsList.userNameField).should('be.visible')
    cy.get(selectorsList.passwordLoginField).should('be.visible')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})

Cypress.Commands.add('blankSpacePasswordAndSubmit', enviaLogin => {
    cy.get(selectorsList.companyNameField).should('be.visible').type(enviaLogin.empresa, { delay: 35 })
    cy.get(selectorsList.userNameField).should('be.visible').type(enviaLogin.usuario, { delay: 35 })
    cy.get(selectorsList.passwordLoginField).should('be.visible').type(' ')
    cy.get('button[type="submit"]').click('center') //clica no botão ENTRAR em qualquer idioma aplicado na página
})