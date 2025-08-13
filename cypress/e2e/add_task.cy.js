describe("Adicionar tarefa", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.fixture("tasks").as("tasks");
  });

  it("Deve adicionar nova tarefa na coluna 'To Do'", function () {
    cy.addTask("To Do", this.tasks.newTask);
    cy.contains(this.tasks.newTask).should("exist");
  });
});
