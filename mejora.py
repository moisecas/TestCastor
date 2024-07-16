#importacion de librerias necesarias para la ejecucion del script
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Configuración de ChromeOptions
options = webdriver.ChromeOptions()

# Inicialización del driver con ChromeDriverManager
driver=webdriver.Chrome()

try: # Manejo de excepciones
    driver.get("https://todomvc.com/examples/react/")  # URL de la página como ejemplo para la prueba

    # Añadir una nueva tarea
    task_input = WebDriverWait(driver, 10).until( # Esperar a que el elemento esté presente
        EC.presence_of_element_located((By.CLASS_NAME, "new-todo"))
    )
    task_input.send_keys("task") # Ingresar la tarea
    task_input.send_keys(Keys.RETURN) # Presionar Enter

    # Verificar si la tarea fue añadida
    tasks = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, "todo-list")) # Esperar a que el elemento esté presente para verificar si la tarea fue añadida
    )
    assert any(task.text == "task" for task in tasks) # Verificar si la tarea fue añadida

finally:
    driver.quit()
