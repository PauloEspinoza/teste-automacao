/// <reference types="cypress" />

    describe('Tela de Login', () => {

      const enviaLogin = {}
        

      beforeEach(function() {
          cy.visit('{baseUrl}')

          enviaLogin.empresa = 'SUPERA'
          enviaLogin.usuario = '94781273220'
          enviaLogin.senha   = '123qwe'

    })
        it('Realizar login com sucesso', () => {
          
          cy.fillMandatoryLoginFieldsAndSubmit(enviaLogin)
          cy.url().should('eq', 'https://portalrdvqa.azurewebsites.net/#/tenant/dashboard')
          
          cy.screenshot('Login com sucesso')
        });

        it('Falha no login - empresa inválida', () => {
          
          cy.invalidCompanyDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')

          cy.screenshot('Falha no Login - empresa inválida')

        });

        it('Falha no login - usuário inválido', () => {
          
          cy.invalidUserDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')

          cy.screenshot('Falha no Login - usuário inválido')
          
        })

        it('Falha no login - senha inválida', () => {
          
          cy.invalidPasswordDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')

          cy.screenshot('Falha no login - senha inválida')

        })

        it('Falha no login - empresa em branco', () => {
            
            cy.emptyCompanyFieldAndSubmit(enviaLogin)
            cy.get('h2').should('be.visible').should('have.text', 'Falha no login!')

            cy.screenshot('Falha no login - empresa em branco')

        })

        it('Falha no login - senha somente um espaço inserido', () => {
            
            cy.blankSpacePasswordAndSubmit(enviaLogin)
            cy.get('h2').should('be.visible').should('have.text', 'Formulário não é válido. Por favor, verifique e corrija os erros.')

            cy.screenshot('Falha no Login - "espaço" como senha')

        })
    });

