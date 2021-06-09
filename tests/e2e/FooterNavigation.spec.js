/// <reference types="cypress" />

describe('Navigating in the footer', () => {
  it('Goes to form page', () => {
    cy.visit('/');
    cy.get('[href="/"]').click();
    cy.get('H1').contains('Add a location');
  });

  it('Moves to location list page', () => {
    cy.visit('/');
    cy.get('[href="/location-list"]').click();
    cy.get('h1').contains('Your location list');
  });

  it('Moves to map page', () => {
    cy.visit('/');
    cy.get('[href="/map"]').click();
    cy.get('h1').contains('Your map');
  });
});
