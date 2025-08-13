Cypress.Commands.add("addTask", (columnName, taskName) => {
  cy.contains(columnName).parent().contains("+ Adicionar Tarefa").click();
  cy.get("input").last().type(taskName);
  cy.contains("Enviar").click();
});

Cypress.Commands.add("editTask", (oldName, newName) => {
  cy.contains(oldName).click();
  cy.get("input").first().clear().type(newName);
  cy.contains("Editar Nome da task").click();
});

Cypress.Commands.add("deleteTask", (taskName) => {
  cy.contains(taskName).click();
  cy.contains("×").click({force: true});
});

Cypress.Commands.add("moveTask", (taskName, targetColumn) => {
  cy.contains(taskName).trigger("dragstart");
  cy.contains(targetColumn).parent().trigger("drop");
});

Cypress.Commands.add("toggleTheme", () => {
  cy.get("body").then(($body) => {
    const isDark = $body.hasClass("dark");
    cy.get("button").last().click();
    if (isDark) {
      cy.get("body").should("not.have.class", "dark");
    } else {
      cy.get("body").should("have.class", "dark");
    }
  });
});
