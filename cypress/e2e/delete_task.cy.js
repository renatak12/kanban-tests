describe("Excluir tarefa", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("tasks").as("tasks");
    cy.addTask("To Do", this.tasks.newTask);
  });

  it("Deve excluir tarefa existente", function () {
    cy.deleteTask(this.tasks.newTask);
    cy.contains(this.tasks.newTask).should("not.exist");
  });
});
