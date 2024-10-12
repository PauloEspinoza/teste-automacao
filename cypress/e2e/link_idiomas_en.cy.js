/// <reference types="cypress" />


describe('Tela de Login', () => {

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

    })

    it('[EN] Realizar login com sucesso', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.fillMandatoryLoginFields(enviaLogin)
      cy.contains('.btn','Log in').click('center')
      cy.get('.logo-default').should('be.visible')
      
    });

    it('[EN] Falha no login - empresa inválida', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidCompanyDataAndSubmit(enviaLogin)
      //cy.contains('.btn','Iniciar sesión').click('center')
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

    });

    it('[EN] Falha no login - usuário inválido', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidUserDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')
      
    })

    it('[EN] Falha no login - senha inválida', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.invalidPasswordDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

    })

    it('[EN] Falha no login - empresa em branco', () => {
      
      cy.get('.language-icon[title="English"]').click('center')
      cy.emptyCompanyFieldAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Login failure !')

    })

    it('[EN] Falha no login - senha somente um espaço inserido', () => {
        
       cy.get('.language-icon[title="English"]').click('center')
       cy.blankSpacePasswordAndSubmit(enviaLogin)
       cy.get('h2').should('be.visible').should('have.text', 'For mis not valid.Please, check and correct erros.')

    })

});

