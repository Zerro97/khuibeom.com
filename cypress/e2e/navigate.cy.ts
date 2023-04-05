describe('navigate', () => {
  it('should navigate between pages', () => {
    cy.visit('/')
    cy.get('[data-cy="link-about"]').click()
    cy.location('pathname').should('eq', '/about')
    cy.get('[data-cy="link-blog"]').click()
    cy.location('pathname').should('eq', '/blog')
    cy.get('[data-cy="link-docs"]').click()
    cy.location('pathname').should('eq', '/docs/introduction')
    cy.get('[data-cy="link-project"]').click()
    cy.location('pathname').should('eq', '/project')
    cy.get('[data-cy="link-home"]').click()
    cy.location('pathname').should('eq', '/')
  })

  it('should navigate by browser history', () => {
    cy.visit('/')

    cy.get('[data-cy="link-about"]').click()
    cy.location('pathname').should('eq', '/about')
    cy.go('back')
    cy.location('pathname').should('eq', '/')

    cy.get('[data-cy="link-blog"]').click()
    cy.location('pathname').should('eq', '/blog')
    cy.go('back')
    cy.location('pathname').should('eq', '/')

    cy.get('[data-cy="link-docs"]').click()
    cy.location('pathname').should('eq', '/docs/introduction')
    cy.go('back')
    cy.location('pathname').should('eq', '/')

    cy.get('[data-cy="link-project"]').click()
    cy.location('pathname').should('eq', '/project')
    cy.go('back')
    cy.location('pathname').should('eq', '/')
  })
})
