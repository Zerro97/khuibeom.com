describe('render', () => {
  it('should contain correct h1 tag message at home page', () => {
    cy.visit('/')
    cy.get('[data-cy="home-title"').contains('Hi, I\'m Hui Beom')
  })

  it('should contain correct h1 tag message at about page', () => {
    cy.visit('/about')
    cy.get('[data-cy="about-title"').contains('About Me')
  })

  it('should contain correct h1 tag message at blog page', () => {
    cy.visit('/blog')
    cy.get('[data-cy="blog-title"').contains('Blog')
  })

  it('should contain correct h1 tag message at docs page', () => {
    cy.visit('/docs/introduction')
    cy.get('#introduction').contains('Introduction')
  })

  it('should contain correct h1 tag message at project page', () => {
    cy.visit('/project')
    cy.get('[data-cy="project-title"').contains('Project')
  })
})
