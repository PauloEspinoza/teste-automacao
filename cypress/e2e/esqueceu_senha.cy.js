/// <reference types="cypress" />


describe('Tela de Login - esqueceu a senha', () => {

  const enviaLogin = {}
    

  beforeEach(function() {
      cy.visit('{baseUrl}')

      enviaLogin.empresa = 'SUPERA'
      enviaLogin.usuario = '94781273220'
      enviaLogin.senha   = '123qwe'

})
    it('Esqueceu a senha - todos os campos vazios', () => {
      
      cy.emptyAllMandatoryFieldsAndSubmit(enviaLogin)
      cy.get('#forget-passwordlink').should('be.visible').click()
      cy.get('.sweet-alert > p').should('be.visible').should('have.text', 'Informe empresa.')
      cy.get('.confirm').should('be.visible').click('center')

      cy.screenshot('Esqueceu a senha - todos os campos vazios')

    })

    it('Esqueceu a senha - campo senha vazio', () => {
      
      cy.emptyPasswordFieldAndSubmit(enviaLogin)
      cy.get('#forget-passwordlink').should('be.visible').click()
      cy.get('h2').should('be.visible').should('have.text','Email enviado')
      cy.get('.confirm').should('be.visible').click('center')

      cy.screenshot('Esqueceu a senha - campo Senha vazio')

    })

    it('Esqueceu a senha - campos empresa e senha vazios', () => {
      
      cy.emptyCompanyAndPasswordFieldsAndSubmit(enviaLogin)
      cy.get('#forget-passwordlink').should('be.visible').click()
      cy.get('.sweet-alert > p').should('be.visible').should('have.text', 'Informe empresa.')
      cy.get('.confirm').should('be.visible').click('center')

      cy.screenshot('Esqueceu a senha - campos Empresa e Senha vazios')

    })

    it('Esqueceu a senha - campos usuário e senha vazios', () => {
      
      cy.emptyUserAndPasswordFieldsAndSubmit(enviaLogin)
      cy.get('#forget-passwordlink').should('be.visible').click()
      cy.get('.sweet-alert > p').should('be.visible').should('have.text', 'Informe usuário.')
      cy.get('.confirm').should('be.visible').click('center')

      cy.screenshot('Esqueceu a senha - campos Usuário e Senha vazios')

    })


});

