# Semillero de talento template para estudiantes

## Pasos previos

- Tener correo electronico.
- Foto profesional en formato png.
- Tener curriculum vitae en formato pdf.

## Como utilizar este template:

1. Clickear en "Fork".

2. Clickear "Crear fork".

3. Presionar enter cuando le pregunte algo.

4. Una vez en el repositorio clickear la tecla "." en el teclado.

5. Renombrar la foto a foto.png dependiendo del formato actual

6. Renombrar el documento de tu curriculum a cv.pdf

7. En otra pestaña pegar este prompt en chat gpt y volver a este documento una vez termines.

```
Eres un estudiante de ingeniería de tics, haciendo fork de un template para una pagina personal, Hazme preguntas, una por una hasta completar los siguientes campos, en caso de las listas, si el usuario solo te da uno, síguele preguntándo hasta que termine.

{
  "personalInfo": {
    "firstName": "Brayan",
    "lastName": "Montaño",
    "about": "Soy un desarrollador de software especializado en javascript y react.",
    "birthDate": "1999-08-29",
    "email": "brayanmbeltre@gmail.com",
    "github": "https://github.com/brayanMBeltre"
  },
  "skills": [
    "Javascript",
    "React",
    "Graphql"
  ],
  "experiences": [
    {
      "dates": "2021",
      "role": "Frontend Developer",
      "company": "OGTIC",
      "description": "Trabajé en proyectos como Becas.gob.do, Gob.do, 311, entre otros, realizando tareas de desarrollo frontend.",
      "logo": "https://ogtic.gob.do/_next/image?url=https%3A%2F%2Fwp.ogtic.gob.do%2Fwp-content%2Fuploads%2F2024%2F01%2Flogo.png&w=3840&q=75"
    }
  ],
  "projects": [
    {
      "name": "Dynamic portfolio creation",
      "description": "Crear un portafolio genérico a partir de un JSON para estudiantes del proyecto 'Semillero Digital' impartido en la OGTIC.",
      "image": "https://ogtic.gob.do/_next/image?url=https%3A%2F%2Fwp.ogtic.gob.do%2Fwp-content%2Fuploads%2F2024%2F01%2Flogo.png&w=3840&q=75",
      "url": "ogtic.gob.do"
    }
  ]
}

Asegurándote de retornarme al final de las preguntas, ese json en el mismo formato dado, simplemente que con mi información, siempre hablame en español, pero retorna los resultados en ingles, tammbien me gustaria que las preguntas sean simples y en caso de que puedas abundar un poco mas en mis respuestas lo hagas como por ejemplo en el about.
```

7. pegar el resultado en el archivo llamado CONFIG.json.

8. clickear la version de controles en el panel izquierdo.

9. colocar un mensaje y presionar subir cambios.

## Hacer despliegue en Vercel

1. En google ir a https://vercel.comj

2. Click en "Start deploying"

3. iniciar session con github y aceptar los mensajes que aparezcan.

4. Luego presionar instalar y aceptar los mensajes que aparezcan.

5. Seleccionar el projecto creado anteriormente y presionar realizar despligue.

6. Presionar el boton que dice "Deploy" y esperar a que termine el proceso.

7. Ir a la url recientemente creada.

### inspired on https://github.com/ccbikai/astro-aria
