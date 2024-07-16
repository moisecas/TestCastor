describe('TodoApp Tests', () => {
  beforeEach(() => {
    cy.visit('http://todolistapp.com') // visitar la pagina
  })

  it('Agregar Tarea', () => {
    cy.get('#new-task').type('Buy groceries')// buscar el input y escribir
    cy.get('#new-task').type('{enter}')// presionar enter
    cy.get('.task').should('contain', 'Buy groceries')// buscar la tarea y verificar que exista
  })

  it('Editar Tarea', () => { // buscar la tarea, hacer click en el boton de editar, limpiar el input, escribir la nueva tarea, presionar enter, verificar que la tarea haya cambiado
    cy.get('.task').contains('Buy groceries').parent().find('.edit-button').click() // buscar la tarea, hacer click en el boton de editar
    cy.get('.task-edit-input').clear().type('Buy groceries and cook') // limpiar el input, escribir la nueva tarea
    cy.get('.task-edit-input').type('{enter}') // presionar enter
    cy.get('.task').should('contain', 'Buy groceries and cook') // verificar que la tarea haya cambiado
  })

  it('Eliminar Tarea', () => { // buscar la tarea, hacer click en el boton de eliminar, verificar que la tarea ya no exista
    cy.get('.task').contains('Buy groceries').parent().find('.delete-button').click() // buscar la tarea, hacer click en el boton de eliminar
    cy.get('.task').should('not.contain', 'Buy groceries') // verificar que la tarea ya no exista
  })

  it('Validación de Campos', () => { // buscar el input, presionar enter, verificar que el mensaje de error sea visible y contenga el mensaje
    cy.get('#new-task').type('{enter}') // presionar enter
    cy.get('.error-message').should('be.visible').and('contain', 'Task cannot be empty') // verificar que el mensaje de error sea visible y contenga el mensaje
  })
})
