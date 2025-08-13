describe("Mover tarefa", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("tasks").as("tasks");
    cy.addTask("To Do", this.tasks.newTask);
  });

  it("Deve mover tarefa para coluna 'In Progress'", function () {
    cy.moveTask(this.tasks.newTask, "In Progress");
    cy.contains("In Progress").parent().contains(this.tasks.newTask).should("exist");
  });
});
