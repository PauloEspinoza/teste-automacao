/// <reference types="cypress" />


describe('Tela de Login - ESPANHOL', () => {

  const enviaLogin = {}
    

  beforeEach(function() {
      cy.visit('{baseUrl}')

      enviaLogin.empresa = 'SUPERA'
      enviaLogin.usuario = '94781273220'
      enviaLogin.senha   = '123qwe'

})
      it('Ícone idiomas - espanhol', () => {

      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.get('input[placeholder="Empresa"]').should('be.visible')
      cy.get('input[placeholder="Usuario"]').should('be.visible')
      cy.get('input[placeholder="Contraseña"]').should('be.visible')

      cy.get('.btn').should('be.visible').should('have.text','Iniciar sesión')
      cy.get('#forget-passwordlink').should('be.visible').should('have.text','Ha olvidado su contraseña?')
      //cy.get('.rememberme check').should('be.visible').should('have.text','Recuerdame')

      cy.screenshot('Teste idioma - Página em ESPANHOL')

    })


    it('[ES] Realizar login com sucesso', () => {
      
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.fillMandatoryLoginFields(enviaLogin)
      cy.contains('.btn','Iniciar sesión').click('center')
      cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')

      cy.screenshot('Login com sucesso - Página em ESPANHOL')
      
    });

    it('[ES] Falha no login - empresa inválida', () => {
      
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.invalidCompanyDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Inicio de sesión fallido!')

      cy.screenshot('Falha no Login - empresa inválida [ESPANHOL]')

    });

    it('[ES] Falha no login - usuário inválido', () => {
      
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.invalidUserDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Inicio de sesión fallido!')

      cy.screenshot('Falha no Login - usuário inválido [ESPANHOL]')
      
    })

    it('[ES] Falha no login - senha inválida', () => {
      
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.invalidPasswordDataAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Inicio de sesión fallido!')

      cy.screenshot('Falha no login - senha inválida [ESPANHOL]')

    })

    it('[ES] Falha no login - empresa em branco', () => {
        
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.emptyCompanyFieldAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'Inicio de sesión fallido!')

      cy.screenshot('Falha no login - empresa em branco [ESPANHOL]')

    })

    it('[ES] Falha no login - senha somente um espaço inserido', () => {
        
      cy.get('.language-icon[title="Espanhol"]').click('center')
      cy.blankSpacePasswordAndSubmit(enviaLogin)
      cy.get('h2').should('be.visible').should('have.text', 'El formulario no es válido. Por favor verifique y corrija los errores.')

      cy.screenshot('Falha no Login - "espaço" como senha [ESPANHOL]')

    })

});

