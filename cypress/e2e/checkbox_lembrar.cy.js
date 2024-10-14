/// <reference types="cypress" />


describe('Tela de Login - checkbox LEMBRAR', () => {

  const enviaLogin = {}
    

  beforeEach(function() {
      cy.visit('{baseUrl}')

      enviaLogin.empresa = 'SUPERA'
      enviaLogin.usuario = '94781273220'
      enviaLogin.senha   = '123qwe'

})
      it('Checkbox Lembrar', () => {
  
      cy.fillMandatoryLoginFields(enviaLogin)
      cy.get('span > input').check().should('be.checked')
      cy.contains('.btn','Entrar').click('center')

      cy.screenshot('Checkbox Lembrar')

      cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')

      //cy.get('.username').should('be.visible')
      //cy.get(':nth-child(10) > a').click('href="/Account/Logout"')
      //cy.get('href="/Account/Logout"').click()

    })

});

