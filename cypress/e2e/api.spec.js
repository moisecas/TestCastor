describe('TodoApp API Tests', () => {
    const apiUrl = 'http://localhost:3000'; // URL local
  
    it('Crear Tarea', () => {
      cy.request('POST', `${apiUrl}/tasks`, {
        title: 'Buy groceries',
        completed: false
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('title', 'Buy groceries');
      });
    });
  
    it('Listar Tareas', () => {
      cy.request('GET', `${apiUrl}/tasks`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
      });
    });
  
    it('Actualizar Tarea', () => {
      cy.request('POST', `${apiUrl}/tasks`, {
        title: 'Buy groceries',
        completed: false
      }).then((postResponse) => {
        const taskId = postResponse.body.id;
        cy.request('PUT', `${apiUrl}/tasks/${taskId}`, {
          title: 'Buy groceries and cook',
          completed: false
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('title', 'Buy groceries and cook');
        });
      });
    });
  
    it('Eliminar Tarea', () => {
      cy.request('POST', `${apiUrl}/tasks`, {
        title: 'Buy groceries',
        completed: false
      }).then((postResponse) => {
        const taskId = postResponse.body.id;
        cy.request('DELETE', `${apiUrl}/tasks/${taskId}`).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    });
  
    it('Validación de Datos', () => {
      cy.request({
        method: 'POST',
        url: `${apiUrl}/tasks`,
        failOnStatusCode: false, // No falla en caso de un código de estado 4xx/5xx
        body: {}
      }).then((response) => {
        expect(response.status).to.eq(400);
        expect(response.body).to.have.property('error', 'Invalid data');
      });
    });
  });
  