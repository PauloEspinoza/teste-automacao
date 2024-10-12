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
          cy.get('.logo-default').should('be.visible')
          
        });

        it('Falha no login - empresa inválida', () => {
          
          cy.invalidCompanyDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')

        });

        it('Falha no login - usuário inválido', () => {
          
          cy.invalidUserDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')
          
        })

        it('Falha no login - senha inválida', () => {
          
          cy.invalidPasswordDataAndSubmit(enviaLogin)
          cy.get('h2').should('be.visible')

        })

        it('Falha no login - empresa em branco', () => {
            
            cy.emptyCompanyFieldAndSubmit(enviaLogin)
            cy.get('h2').should('be.visible').should('have.text', 'Falha no login!')

        })

        it('Falha no login - senha somente um espaço inserido', () => {
            
            cy.blankSpacePasswordAndSubmit(enviaLogin)
            cy.get('h2').should('be.visible').should('have.text', 'Formulário não é válido. Por favor, verifique e corrija os erros.')

        })

          /*it.only('Falha no login - campo usuario em branco', () => {
          cy.get('#tenancyname').should('be.visible').type('SUPERA')
          cy.get('#usuario').should('be.visible').
          cy.get('#passwordLogin').should('be.visible').type('123qwe')
          cy.contains('.btn','Entrar').click('center')

          cy.get('h2').should('be.visible')
        })*/

        /*it.only('Falha no login - campo senha em branco', () => {
          cy.get('#tenancyname').should('be.visible').type('SUPERA')
          cy.get('#usuario').should('be.visible').type('94781273220')
          cy.get('#passwordLogin').should('be.visible')
          cy.contains('.btn','Entrar').click('center')

          cy.get('h2').should('be.visible')
        })*/
    });

