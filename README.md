# Aids for Aids Frontend React Test

## Como ejecutar.

- Descargar o clonar.
- Entrar a la carpeta generada
- Instalar dependencias "npm install"
- Entrar al servidor de desarrollo.

## Como usar.

Antes de comenzar, por problemas de tiempo que tuve todo se esta guaradando en local, por ende generar una recarga de la pagina podría reiniciar todo el proceso, mas adelante explicaré el por que de mis problemas en la prueba.

- Como usar.

Para cumplir con los criterios, hice que no fuera posible acceder al catalogo de libros sin antes autenticarse, para esto deberá crear un usuario, ingresando un nombre, email, y password, esto lo debería dejar entrar, y allí poder ver unos libros traidos de una API, allí podría añadir al carrito el libro que desee y removerlo del mismo si así desea.

Cuando quiera terminar su sesion, puede oprimir el boton "sign out" este lo debe de llevar a una pantalla de login, aquí, usted podría volver a acceder al catalogo solo ingresando email y password pues su usuario ya fue guardado.


## Stack usado
- React.js implementado en Vite. use vite para una rapida configuración del proyecto.
- CSS Quice usar css en su forma mas nativa para demostrar mi dominio en este lenguaje de estilos.
- Fonts - Google Fonts.
- Icons - Font Awasome.
- Routes - React Router.

## Tiempo implementado
Tarde un aproximado de 10 horas 50 minutos en realizar la prueba, esto debido a que en el día tuve que resolver las responsabilidades mi actual trabajo, implementaba el tiempo que fuera capaz en las noches. para ver las estadisticas exactas comparto un analisis generado por **Wakatime** una extención de VScode que puede monitorer el tiempo implementado. (Solo toma tiempo cuando se escribe codigo, o se navega por el editor) 👇

 ⏱ <a href="https://wakatime.com/@fa9c9bc0-0a2e-4a6d-987c-900bca5e45de/projects/vvqyohohya?start=2022-05-23&end=2022-05-29" target="_blank" >
    Tiempo exacto
  </a>

## Problemas
- No logré cumplir con uno de los requrimientos, y era hacer un sistema de autenticación mas dinamico, es decir, no logree realizar una comunicación con la API que se sugería, pues a mi conocimiento se me fue complejo entender su implementación, intenté pasarle un JSON con la data, pero me retornaba un problema de CORS, estoy seguro que era por que estaba haciendo algo mal, y ya sentía que perdía tiempo valioso, para esto hice el sistema de forma local, sacandole provecho al useContext,useReducer y React Router.


Quiero finalizar informando que si bien siento que fue poco tiempo disfrute mucho el desarrollo de esta prueba, React.js me parece que es una libreria de muy facil implementacion y usabilidad, por ende quiero agradecer esta oportunidad que se me ofreció, y espero con mucha atención un feedback para poder seguir con mi desarrollo profesional.

App desarrollada por Santaigo Lopera Naranjo
