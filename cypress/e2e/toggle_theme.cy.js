describe("Alternar tema", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve alternar entre modo escuro e claro", () => {
    cy.toggleTheme();
  });
});
