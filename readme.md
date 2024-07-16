# Cypress TodoApp Test Suite

Este proyecto contiene un conjunto de pruebas automatizadas para una aplicación web ficticia llamada TodoApp utilizando Cypress. El proyecto está configurado para realizar pruebas tanto de la interfaz de usuario como de la API de la aplicación.

## Estructura del Proyecto

- **cypress/downloads/**: Carpeta donde se almacenan las descargas realizadas durante las pruebas.
- **cypress/e2e/**: Carpeta que contiene los archivos de prueba de Cypress (`todoApp.cy.js` para pruebas web y `api.spec.js` para pruebas de API).
- **cypress/fixtures/**: Carpeta para datos de prueba estáticos.
- **cypress/reports/**: Carpeta donde se generarán los reportes de las pruebas.
- **cypress/support/**: Carpeta para comandos personalizados y configuraciones adicionales de Cypress.
- **cypress.config.js**: Archivo de configuración de Cypress.

## Pruebas Web

El archivo `todoApp.cy.js` contiene pruebas para verificar la funcionalidad de la aplicación TodoApp.

## Pruebas de API

El archivo `api.spec.js` contiene pruebas para verificar la funcionalidad de la API de la aplicación TodoApp, incluyendo crear, listar, actualizar y eliminar tareas, así como validación de datos.

## Configuración del Entorno

### Prerequisitos

- Node.js (v12 o superior)
- npm (v6 o superior) o yarn
- Google Chrome o cualquier otro navegador compatible con Cypress

### Instalación

1. Clona el repositorio:

   
   git clone <url-del-repositorio>
   cd <nombre-del-directorio>

2. Instala las dependencias:
npm install

3. Ejecutar pruebas 
npx cypress open
npx cypress run


## Pruebas de API
Para ejecutar las pruebas de API, asegurarse de que el servidor de pruebas (por ejemplo, json-server) esté ejecutándose. Puedes iniciar el servidor utilizando el siguiente comando (asegúrate de que json-server esté instalado globalmente):

json-server --watch db.json --port 3000


## Generación de Reportes
Después de ejecutar las pruebas, puedes generar un reporte combinado utilizando mochawesome.

Instala las dependencias necesarias:
npm install mochawesome-merge mochawesome-report-generator --save-dev

Une los archivos JSON generados por Cypress:
npx mochawesome-merge cypress/reports/*.json > cypress/reports/merged-report.json

Genera el reporte HTML:
npx marge cypress/reports/merged-report.json -o cypress/reports
