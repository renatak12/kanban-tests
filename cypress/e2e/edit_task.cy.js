describe("Editar tarefa", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("tasks").as("tasks");
    cy.addTask("To Do", this.tasks.newTask);
  });

  it("Deve editar nome da tarefa", function () {
    cy.editTask(this.tasks.newTask, this.tasks.editedTask);
    cy.contains(this.tasks.editedTask).should("exist");
  });
});
