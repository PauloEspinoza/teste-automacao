/// <reference types="cypress" />


describe('Tela de Login - INGLÊS', () => {

  const enviaLogin = {}
    

  beforeEach(function() {
      cy.visit('{baseUrl}')

      enviaLogin.empresa = 'SUPERA'
      enviaLogin.usuario = '94781273220'
      enviaLogin.senha   = '123qwe'

})
     
    it('Ícone idiomas - inglês', () => {

      cy.get('.language-icon[title="English"]').click('center')
      cy.get('input[placeholder="Company"]').should('be.visible')
      cy.get('input[placeholder="User"]').should('be.visible')
      cy.get('input[placeholder="Password"]').should('be.visible')

      cy.get('.btn').should('be.visible').should('have.text','Log in')
      cy.get('#forget-passwordlink').should('be.visible').should('have.text','Forgot password?')
      //cy.get('.rememberme check').should('be.visible').should('have.text','Remember me')

      cy.screenshot('Teste idioma - Página em INGLÊS')

    })

    it('[EN] Realizar login com sucesso', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.fillMandatoryLoginFields(enviaLogin)
      cy.contains('.btn','Log in').click('center')
      cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')

      cy.screenshot('Login com sucesso - Página em INGLÊS')
      
    });

    it('[EN] Falha no login - empresa inválida', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidCompanyDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

      cy.screenshot('Falha no Login - empresa inválida [INGLÊS]')

    });

    it('[EN] Falha no login - usuário inválido', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidUserDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

      cy.screenshot('Falha no Login - usuário inválido [INGLÊS]')
      
    })

    it('[EN] Falha no login - senha inválida', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidPasswordDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

      cy.screenshot('Falha no login - senha inválida [INGLÊS]')

    })

    it('[EN] Falha no login - empresa em branco', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.emptyCompanyFieldAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

      cy.screenshot('Falha no login - empresa em branco [INGLÊS]')

    })

    it('[EN] Falha no login - senha somente um espaço inserido', () => {
        
       cy.get('.language-icon[title="English"]').click('center')
       cy.blankSpacePasswordAndSubmit(enviaLogin)
       cy.get('h2').should('be.visible').should('have.text', 'For mis not valid.Please, check and correct erros.')

       cy.screenshot('Falha no Login - "espaço" como senha [INGLÊS]')

    })

});

