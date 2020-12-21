# Examen IIC2513 sección 1 2020/2
> **Forma 3**
>
> **Plazo de entrega: 15 de diciembre de 2020 hasta las 02:00 hrs**

## Contexto

En Chile estamos en temporada de eclipses. Si aún no lo sabes, hoy 14 de diciembre ¡tendremos un eclipse solar en el país! Si bien este evento astronómico podrá ser apreciado en la mayor parte del territorio de forma parcial, en las regiones de La Araucanía y Los Ríos será un eclipse solar total, es decir, la luna cubrirá completamente el sol, haciéndose de noche a eso de las 13:00 hrs por un período corto de tiempo (30 segundos a 2 minutos, dependiendo del lugar). Puedes ver las comunas y sectores en las que se vivirá la totalidad del eclipse en el siguiente esquema

![Araucanía eclipse](https://araucaniaeclipse.com/wp-content/uploads/2020/10/mapa2020.svg)

Fuente: [Araucanía eclipse](https://araucaniaeclipse.com/wp-content/uploads/2020/10/mapa2020.svg)

En preparación para este evento, las autoridades de las regiones de La Araucanía y Los Ríos te han encomendado la tarea de crear una pequeña plataforma web que permita manejar información respecto al eclipse en la zona. Si bien la totalidad se verá en varias comunas, la duración será diferente según la latitud en la que el observador se encuentre. No es lo mismo estar en el extremo norte o sur de la zona de umbra (donde puede llegar a durar tan solo unos pocos segundos) a estar en la zona cero (donde alcanzará 2 minutos y 9 segundos).

Preocupados de brindar a los interesados toda la información pertinente a la duración de la totalidad por comuna (y otros aspectos relevantes), de manera que se puedan planificar, las autoridades te han encargado la parte de la plataforma que se hace cargo de la actualización de esta información. Tendrás que implementar una pequeña interfaz web en React que consuma una API REST, y que permita visualizar la información de horarios del eclipse, en cada comuna que estará en la zona de la totalidad.

Un punto importante que debes considerar es que esta aplicación no estará disponible para el público, sino que será sólo de uso interno de las autoridades. Por lo tanto, incluirá manejo de sesión para que sólo usuarios registrados puedan modificar la información pertinente.

Para realizar tu trabajo, seguirás un approach progresivo, donde primero crearás la interfaz en los lenguajes que entiende el browser (HTML y CSS), luego implementarás algunos endpoints de una API existente, y finalmente conectarás la interfaz con la API utilizando React en el cliente. 

Tendrás que clonar y modificar dos proyectos cuyos links se encuentran a continuación:

- [examen-frontend](https://github.com/IIC2513-2020-2/examen-frontend)
- [examen-backend](https://github.com/IIC2513-2020-2/examen-backend)

En cada uno de los repositorios encontrarás instrucciones para ejecutarlos. Parte de estos proyectos es lo que deberás subir para entregar tu examen.

## Parte I: HTML + CSS (2.0 pts)

En esta primera parte tendrás que implementar dos documentos HTML **estáticos**. Para esto tendrás disponibles wireframes en los cuales te debes basar para el estilo y disposición de elementos. Las páginas a implementar son dos: login de usuario y contenido principal.

### Login de usuario

El primer documento HTML corresponde al login de usuario. Como fue mencionado, la aplicación será de uso interno de las autoridades, por lo que requiere que los usuarios inicien sesión antes de poder realizar alguna acción.

El wireframe en el que te debes basar es el siguiente:

![Wireframes Examen Login](./assets/Wireframes-Examen-Login.jpg)

Para esta parte utilizarás el proyecto `examen-frontend`. Debes asegurarte de clonarlo y ejecutarlo como indican las instrucciones del repositorio.

El archivo que debes modificar con el código HTML ya existe y se encuentra en la ruta `src/static/login.html`. Este archivo ya tiene una estructura base y referencias a archivos CSS existentes. Puedes modificar esas hojas de estilo o agregar una nueva que puedas referenciar desde el HTML. Para visualizar tu resultado basta con que abras este archivo directamente en el browser (pues es estático).

Debes tener en cuenta las siguientes consideraciones y restricciones:

- El formulario debe estar centrado **tanto horizontal como verticalmente**, pero para tamaños menores a 501px debe ocupar todo el ancho de la pantalla (puedes incluir un pequeño padding o margin si gustas)
- No importa hacia dónde haga submit el formulario. Podrías incluso omitir el atributo que especifca esto
- **DEBES** utilizar el archivo existente. No se aceptarán respuestas en otros archivos diferentes a `login.html`

#### Solución "Login de usuario"

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css" />
    <link rel="stylesheet" href="../App.css" />
    <title>Login Examen</title>
  </head>
  <body>
    <div class="app">
      <!-- Your code here -->
      <div class="login-wrapper">
        <div class="login-container">
          <h1>Login Examen</h1>
          <form>
            <div class="field">
              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" />
            </div>
            <div class="field">
              <label for="password">Contraseña</label>
              <input type="password" id="password" name="password" />
            </div>
            <div class="actions">
              <button>Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
</html>
```

```css
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #444;
  padding: 0 10px;
}

.login-container {
  background-color: white;
  padding: 70px 50px;
  width: 100%;
  box-sizing: border-box;
}

.field, .actions {
  padding: 10px 0;
}

.field input, .field select {
  width: 100%;
  margin-top: 10px;
  line-height: 2;
  box-sizing: border-box;
}

.field select {
  padding: 10px 0;
}

.actions {
  text-align: center;
  padding-top: 30px;
}

.actions button {
  padding: 5px 20px;
  font-size: 1rem;
  border-radius: 0.25rem;
  padding: 15px 50px;
  border: none;
  background-color: #333;
  color: white;
  line-height: 1.5;
  cursor: pointer;
  text-decoration: none;
}

@media screen and (min-width: 501px) {
  .login-wrapper {
    padding: 0;
  }

  .login-container {
    width: 80%;
  }
}

@media screen and (min-width: 764px) {
  .login-container {
    width: 50%;
  }
}
```

#### Puntajes "Login de usuario" (1.0 pt en total)

- **[0.1 pts]** Utilizar contenedor para contenido (`<div>` u otro similar)
- **[0.3 pts]** Utilizar elementos HTML apropiados (0.1 pts cada sub-item)
  - Elemento form como contenedor
  - Elementos input para e-mail (`text` o `email`) y password (`password`)
  - Input con type `submit` o `<button>`
- **[0.05 pts]** Centrar formulario horizontalmente
- **[0.05 pts]** Centrar formulario verticalmente
- **[0.05 pts]** Labels alineados a la izquierda
- **[0.05 pts]** Inputs utilizan todo el ancho
- **[0.1 pts]** Formulario tiene un padding y borde (o se diferencia del fondo con otro color)
- **[0.1 pts]** Botón `Ingresar` está centrado
- **[0.1 pts]** Formulario ocupa todo el ancho de la pantalla en tamaños menores a `501px`
- **[0.1 pts]** Cumple con similitud general entre implementación y wireframe (títulos, elementos visuales, etc)

### Contenido principal

El segundo documento HTML a implementar corresponde al contenido principal, que en este caso es la visualización y actualización de horarios del eclipse por comunas.

El layout consta de dos columnas, una para visualizar información por comuna y otra para actualizar información de los horarios del eclipse en una comuna en particular. El wireframe en el que te debes basar es el siguiente:

![Wireframes Examen EclipseInfo](./assets/Wireframes-Examen-EclipseInfo.jpg)

Para esta parte también utilizarás el proyecto `examen-frontend`. El archivo que debes modificar con el código HTML ya existe y se encuentra en la ruta `src/static/content.html`. Este archivo ya tiene una estructura base (que incluye el header) y referencias a archivos CSS existentes. Del mismo modo que para la página anterior, puedes modificar esas hojas de estilo o agregar una nueva y referenciarla desde el HTML.

Debes tener en cuenta las siguientes consideraciones y restricciones:

- El wireframe muestra unas pocas comunas para cada región. Puedes ingresar esas comunas tal cual aparecen en el wireframe o agregar nuevas si quieres probar tu implementación con más datos. Ten en consideración, eso sí, que agregar más datos no debe significar cambios en el CSS (es decir, deberíamos poder agregar arbitrariamente más comunas y que el estilo siga respetándose)
- La lista de información dentro de cada comuna en el wireframe tiene 5 entradas con datos. Siempre se mostrarán esas 5 opciones
- Para el selector de comuna del formulario, puedes incluir sólo las 4 comunas que aparecen en el wireframe. Considera que cada opción debe tener algún tipo de identificador en el atributo `name` (elige el que quieras)
- Los campos de horas (inicio eclipse, totalidad y fin eclipse) son campos de texto (a pesar de ser horas, no nos preocuparemos mayormente del ingreso de datos en estos campos)
- El input duración de la totalidad debe ser numérico y estar en un rango entre 1 y 130 (está expresado en segundos y sabemos que este eclipse no durará más que eso)
- El layout del wireframe considera 2 columnas. Para tamaños de pantalla menores a 501px, debe desplegarse como una sola columna, y debe mostrar primero el formulario y luego la visualización de comunas
- Como el alto de la columna con la lista de comunas muy probablemente sea más grande que el del formulario, se generará un scroll. No importa que al hacer scroll el formulario quede "arriba" y no visible
- **DEBES** utilizar el archivo existente. No se aceptarán respuestas en otros archivos diferentes a `content.html`

#### Solución "Contenido principal"

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../index.css" />
    <link rel="stylesheet" href="../App.css" />
    <title>Content Examen</title>
  </head>
  <body>
    <div class="app">
      <header class="app-header">
        <div class="brand">
          <img src="../assets/solar-eclipse.jpg" />
          <h1>Examen IIC2513 2020-2</h1>
        </div>
        <ul>
          <li>Username</li>
          <li><button>Salir</button></li>
        </ul>
      </header>
      <!-- Your code here -->
      <main class="content">
        <section>
          <h1>Información eclipse</h1>
          <section>
            <h2>Región de la Araucanía</h2>
            <div class="district">
              <h3>Puerto Saavedra</h3>
              <ul>
                <li>Inicio eclipse: 11:24</li>
                <li>Inicio totalidad: 13:00:02</li>
                <li>Fin eclipse: 14:28</li>
                <li>Duración: 1 minuto 2 seg</li>
                <li>Altura sol: 71.7º</li>
              </ul>
            </div>
            <div class="district">
              <h3>Pucón</h3>
              <ul>
                <li>Inicio eclipse: 11:23</li>
                <li>Inicio totalidad: 13:03:20</li>
                <li>Fin eclipse: 14:32</li>
                <li>Duración: 2 minutos 8 seg</li>
                <li>Altura sol: 72.0º</li>
              </ul>
            </div>
            <div class="district">
              <h3>Curarrehue</h3>
              <ul>
                <li>Inicio eclipse: 11:24</li>
                <li>Inicio totalidad: 13:04:13</li>
                <li>Fin eclipse: 14:32</li>
                <li>Duración: 2 minutos 7 seg</li>
                <li>Altura sol: 72.2º</li>
              </ul>
            </div>
          </section>
          <section>
            <h2>Región de Los Ríos</h2>
            <div class="district">
              <h3>Panguipulli</h3>
              <ul>
                <li>Inicio eclipse: 11:23</li>
                <li>Inicio totalidad: 13:03:42</li>
                <li>Fin eclipse: 14:31</li>
                <li>Duración: 41 seg</li>
                <li>Altura sol: 71.5º</li>
              </ul>
            </div>
          </section>
        </section>
        <section class="form-container">
          <h2>Actualizar información</h2>
          <form>
            <div class="field">
              <label for="district">Comuna</label>
              <select id="district" name="districtId">
                <option value="1">Puerto Saavedra</option>
                <option value="2">Pucón</option>
                <option value="3">Curarrehue</option>
                <option value="4">Panguipulli</option>
              </select>
            </div>
            <div class="field">
              <label for="startTime">Hora inicio eclipse</label>
              <input type="text" id="startTime" name="startTime" value="11:24" />
            </div>
            <div class="field">
              <label for="totalityTime">Hora totalidad eclipse</label>
              <input type="text" id="totalityTime" name="totalityTime" value="13:00:02" />
            </div>
            <div class="field">
              <label for="endTime">Hora fin eclipse</label>
              <input type="text" id="endTime" name="endTime" value="14:28" />
            </div>
            <div class="field">
              <label for="duration">Duración totalidad (segundos)</label>
              <input type="number" id="duration" name="duration" min="1" max="130" value="62" />
            </div>
            <div class="field">
              <label for="altitude">Altura del sol en totalidad (grados)</label>
              <input type="text" id="altitude" name="altitude" value="71.7" />
            </div>
            <div class="actions">
              <button>Actualizar</button>
            </div>
          </form>
        </section>
      </main>
    </div>    
  </body>
</html>
```

```css
main.content {
  display: flex;
  flex-direction: column;
}

main.content h1 {
  font-size: 2rem;
  margin: 0;
  padding: 20px 0;
}

main.content h2 {
  margin: 0;
  padding: 20px 0;
}

main.content > section {
  padding: 20px;
}

main.content .form-container {
  order: -1;
}

main.content .form-container .actions {
  text-align: right;
}

main.content ul {
  columns: 2;
}

.district {
  padding-bottom: 30px;
}

@media screen and (min-width: 501px) {
  main.content {
    flex-direction: row;
  }

  main.content > section {
    width: 50%;
    padding: 20px 40px;
  }

  main.content .form-container {
    order: 0;
    padding: 98px 40px 20px;
  }
}
```

#### Puntajes "Contenido principal" (1.0 pt en total)

- **[0.2 pts]** Layout con dos columnas (implementado en Flexbox, Grid o float)
- **[0.1 pts]** Layout en pantallas menores a `501px` es una sola columna, con el formulario primero y luego la información de las comunas
  - Asignar **0.05 pts** si el formulario va al final
- **[0.1 pts]** Columna de comunas acepta `n` comunas respetando estilo (copiar y pegar varias etiquetas de comunas para probar esto)
- **[0.15 pts]** Correcto uso de listas para información del eclipse por comuna (`<ul><li></li></ul>`) (0.075 pts cada sub-item)
  - Sintaxis correcta
  - List items coherentes (no colocar cualquier cosa dentro)
- **[0.35 pts]** Columna formulario
  - [0.1 pts] Selector de comunas
    - Opciones incluyen al menos las 4 comunas del wireframe
    - Cada `<option>` tiene un `value` asociado
  - [0.05 pts] Inputs tienen un `name` asociado y son del `type` correcto
  - [0.05 pts] Input de duración totalidad tiene atributos `min` y `max` con valores `1` y `130` respectivamente
  - [0.05 pts] Inputs utilizan todo el ancho
  - [0.05 pts] Labels alineados a la izquierda
  - [0.05 pts] Botón `Actualizar` está alineado a la derecha
- **[0.1 pts]** Cumple con similitud general entre implementación y wireframe (títulos, elementos visuales, etc)

### Consideraciones generales para ambas páginas

- Debes escribir estilos en CSS. **NO DEBES** escribir estilos inline (atributo `style`). Se aplicará un descuento si el documento HTML incluye este tipo de atributos
- Haz un buen uso de clases en CSS para poder reutilizar estilos
- Los tamaños específicos de letra y márgenes quedan a criterio tuyo, sin embargo, el resultado final debe verse similar al wireframe (no debes, por ejemplo, centrar el título "Login Examen" si es que no aparece así en el wireframe)
- En cuanto a layout, puedes utilizar Flexbox, Grid o float. Queda a criterio tuyo, pero recuerda que floats está algo "obsoleto"
- Puedes elegir colores y tipografías a gusto si lo deseas, pero no será evaluado. Sin embargo, si incluyes estos elementos al nivel de definir una paleta de colores y tipografía coherentes, tendrás un **bonus por proactividad de 0.1 puntos**.

#### Puntajes consideraciones

- **[-0.5 pts]** Descuento estilos inline
- **[-0.3, -0.1 pts]** Descuento por mal uso de etiquetas HTML (entre 0.1 y 0.3 pts dependiendo de la "falta"). Por ejemplo, `<br>` para generar espacios o no utilizar `<form>` en el contexto de un formulario
- **[+0.1 pts]** Bonus proactividad paletas de colores y tipografía

## Parte II: API (2.0 pts)

En esta parte del examen tendrás que implementar algunos endpoints de la API asociada a información del eclipse por comuna y/o sector dentro de la zona de totalidad del eclipse solar.

Utilizarás el proyecto `examen-backend`. Debes asegurarte de clonarlo y ejecutarlo como indican las instrucciones del repositorio (incluyendo la ejecución de seeds).

A continuación encontrarás los endpoints que incluye la API y también algunos que debes implementar.

### Autenticación usuarios

La API requiere que los usuarios inicien sesión antes de poder realizar alguna acción. El endpoint asociado a esto **ya está implementado**, mediante JSON Web Tokens (JWT), por lo que no debes modificar nada. Eso sí, es aconsejable que lo pruebes haciendo el request correspondiente. La especificación del endpoint es:

- Method: `POST`
- Path: `/api/auth`
- Content-Type: `application/json`
- Body parameters:
  ```json
  {
    "email": "user_email",
    "password": "user_password"
  }
  ```

- Response
    - Status code: `201`
    - Content-Type: `application/json`
    - Body:
        ```json
        {
          "id", // User ID
          "name", // User name
          "token" // JWT token
        }
        ```

- **IMPORTANTE**: no olvides agregar la variable de ambiente `JWT_SECRET` para que la generación del token funcione

[**UPDATE**] En las seeds del proyecto podrás encontrar usuarios ya registrados. Uno de esos usuarios tiene las siguientes credenciales:

```
E-email: user@example.org
Password: hola.123
```

### Listado de comunas e información del eclipse

Este endpoint entrega la información de las comunas y sectores dentro de la zona de totalidad del eclipse solar y, para cada una, información sobre el eclipse mismo (horarios en su mayoría). El endpoint está parcialmente implementado. De hecho, puedes hacer un request y obtendrás una respuesta. Sin embargo, esto no debería ser así pues no debiese ser de acceso público. Recuerda que esta API sólo será accedida por usuarios autenticados.

Tu tarea en esta parte del examen será "proteger" el endpoint para que sólo pueda ser accedido por usuarios que hayan iniciado sesión. Todo usuario que haya iniciado sesión tendrá disponible un JWT token (que se puede obtener del endpoint descrito en la sección anterior). Este endpoint requiere que se envíe el token de alguna forma al servidor como medida de seguridad. Se espera que utilices un middleware para proteger este endpoint.

La especificación del endpoint es:

- Method: `GET`
- Path: `/api/districts/eclipse-info`
- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body:
      ```json
      [
        {
          "id", // District ID
          "name", // District name
          "region" // District region name
          "EclipseInfo": {
            "startTime", // Start time of the eclipse
            "totalityTime", // Start time of totality of the eclipse
            "endTime", // End time of the eclipse
            "duration", // Duration of the eclipse in seconds
            "altitude", // Sun altitude (in º)
          }
        },
        // Array with more objects like the above
      ]
      ```

En caso de no incluir información de autenticación o que esta sea inválida, el endpoint debe retornar un status code `401` (unauthorized). No es necesario que devuelvas un body específico.

#### Solución "Listado de comunas e información del eclipse"

```javascript
// src/routes/api/index.js

const jwt = require('koa-jwt');

/* ... */
router.use(jwt({ secret: process.env.JWT_SECRET, key: 'jwtDecoded' })); // Before districts routes

router.use('/districts', districts.routes());
```

#### Puntajes "Listado de comunas e información del eclipse" (0.25 pts en total)

- **[0.25 pts]** Uso de middleware para proteger recurso (con `koa-jwt`)
  - Algún otro método que haga lo mismo es válido también
  - En caso de no recibir JWT token o que este sea inválido, debe retornar status code 401
- **[-0.15 pts]** En caso de modificar la especificación del endpoint (por ejemplo, cambiar el método HTTP de `GET` a `POST`, o cambiar el path), habrá un descuento de 0.15 pts

### Actualizar información del eclipse de una comuna

El último endpoint, que sí tendrás que **implementar desde cero**, es el que permite actualizar la información del eclipse para una comuna en particular. Este endpoint también debe ser accesible sólo para usuarios autenticados (de hecho, la protección tiene especial énfasis en este caso, pues por medio de este endpoint ya es posible alterar la base de datos). Se espera que también lo hagas a través de un middleware (como el anterior).

Como es un endpoint que recibe información del eclipse para una comuna, debes entregar esta en formato JSON y además **validar** que todos los campos especificados en los body parameters no sean blancos, vacíos o nulos. Considera que podría suceder que sólo se quiera actualizar un campo solamente (no siempre todos a la vez).

La especificación del endpoint es:

- Method: `PATCH`
- Path: `/api/districts/:id/eclipse-info` (donde `:id` corresponde al ID de una comuna)
- Content-Type: `application/json`
- Body parameters:
  ```json
  {
    "startTime", // Start time of the eclipse
    "totalityTime", // Start time of totality of the eclipse
    "endTime", // End time of the eclipse
    "duration", // Duration of the eclipse in seconds
    "altitude", // Sun altitude (in º)
  }
  ```

- Response
    - Status code: `200`
    - Content-Type: `application/json`
    - Body:
        ```json
        {
          "id", // Eclipse info ID
          "startTime", // Start time of the eclipse
          "totalityTime", // Start time of totality of the eclipse
          "endTime", // End time of the eclipse
          "duration", // Duration of the eclipse in seconds
          "altitude", // Sun altitude (in º)
          "districtId", // District ID
        }
        ```

Para casos especiales en que el request no sea válido:

- Si autenticación falla, retornar status code `401` (el body no es relevante)
- Si request falla por validación, retornar status code `422` (el body no es relevante)
- No es necesario validar alguna lógica para que horarios tengan sentido (serán sólo texto), pero sí debes validar que la duración sea positiva y esté en el rango entre 1 y 130. Además debes exigir que los campos en el request body sean no vacíos

#### Solución "Actualizar información del eclipse de una comuna"

```javascript
// src/models/eclipseinfo.js

EclipseInfo.init({
  startTime: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  totalityTime: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  endTime: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      min: 1,
      max: 130,
    },
  },
  altitude: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  districtId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
}, {
  sequelize,
  modelName: 'EclipseInfo',
});
```

```javascript
// src/routes/api/districts.js

const PERMITTED_ECLIPSE_INFO_FIELDS = [
  'startTime',
  'totalityTime',
  'endTime',
  'duration',
  'altitude',
  'districtId',
];

router.param('id', async (id, ctx, next) => {
  const district = await ctx.orm.District.findByPk(id);
  if (!district) ctx.throw(404);
  ctx.state.district = district;
  return next();
});

/* ... */

router.patch('districts-eclipse-info-update', '/:id/eclipse-info', async (ctx) => {
  const { district } = ctx.state;
  const eclipseInfo = await district.getEclipseInfo();
  const params = ctx.request.body;
  try {
    await eclipseInfo.update(params, { fields: PERMITTED_ECLIPSE_INFO_FIELDS });
    ctx.status = 200;
    ctx.body = eclipseInfo;
  } catch (error) {
    ctx.throw(422);
  }
});
```

#### Puntajes "Actualizar información del eclipse de una comuna" (1.75 pts en total)

- **[0.25 pts]** Uso de middleware para proteger recurso (con `koa-jwt` o algún otro método equivalente)
  - En caso de no recibir JWT token o que este sea inválido, debe retornar status code `401`
- **[0.2 pts]** Definición ruta `PATCH` (`router.patch`) con parámetro `:id`
- **[0.2 pts]** Uso de parámetro de URL `:id` para encontrar una instancia de modelo `District`
- **[0.25 pts]** Obtención de instancia de modelo `EclipseInfo` asociada a district
- **[0.25 pts]** Actualización de instancia de modelo `EclipseInfo` con body parameters
- **[0.2 pts]** Retornar instancia actualizada y status code `200` si la operación fue exitosa
- **[0.15 pts]** Validación presencia de campos `startTime`, `totalityTime`, `endTime`, `duration`, `altitude`, `districtId` (0.025 pts cada campo)
  - En caso de `districtId`, aunque siempre debería venir en la URL, debe validarse a nivel de modelo
- **[0.1 pts]** Validación `duration` con valores entre 1 y 130
- **[0.15 pts]** Retorno de status code `422` en caso de error de validación

## Parte III: Componente en React e integración con API (2.0 pts)

Hasta este punto, ya debieses tener los endpoints necesarios de la API funcionando y, además, documentos HTML estáticos con estilos incorporados. Sólo faltaría integrar estas partes en una single-page application construida en React.

Para esta parte utilizarás el proyecto `examen-frontend` nuevamente. Debes asegurarte de que puedas acceder sin problemas al ingresar a [http://localhost:3001](http://localhost:3001) (que será la URL de tu SPA). Recuerda que debes ver una página con un header estático y el resto en blanco.

Debes implementar un componente raíz (que a su vez **debe** incorporar componentes hijos) que sigan cierta lógica descrita en las siguientes secciones.

### Login de usuario

Ya ha sido mencionado en varias oportunidades que la aplicación sólo podrá ser accedida por usuarios registrados (las autoridades de las comunas). Lo primero que deberás hacer es evaluar si el usuario inició sesión o no. Si no ha iniciado sesión, debes mostrar un formulario de login para el usuario.

Aquí es donde debes comenzar a interactuar con la API. Debes tenerla corriendo y, por lo tanto, disponible en [http://localhost:3000](http://localhost:3000) (puedes suponer que siempre utilizarás esa URL base).

Al hacer submit del formulario de login con las credenciales de usuario, debes enviar un request al endpoint de autenticación de la API . Aquí pueden suceder dos cosas dependiendo del response:

- Request fallido: mostrar un pequeño mensaje arriba del formulario con un error (queda a criterio tuyo el mensaje, pero intenta que sea genérico)
- Request exitoso: debes mostrar el contenido principal de la aplicación, explicado en la siguiente sección

En este punto es que debes utilizar el documento HTML estático con nombre `login.html` de la Parte I. Deberás "traducirlo" a un componente en React (incluyendo los estilos que ya habías agregado).

Debes tener en cuenta las siguientes consideraciones:

- El resultado de la Parte I debe ser igual a lo desplegado en este componente
- Debes guardar la información del response del endpoint de autenticación, pues tendrás que utilizarla en la siguiente sección. No es necesario que esta información quede persistida en el browser (está bien si refrescas la página y se pierde la sesión), por lo que basta con que utilices un state de componente.

#### Solución "Login de usuario"

- Backend
  ```javascript
  // src/app.js

  app.use(koaCors());
  ```

- Frontend
  - Para esta parte revisar solución final completa en siguiente sección

#### Puntajes "Login de usuario" (0.5 pts en total)

- **[0.1 pts]** Incluir `koaCors` como middleware en `examen-backend` para habilitar el uso de CORS
- **[0.05 pts]** Definir un `state` para manejar información del usuario (`token` y `userName`)
- Guardar información del response de login en state del componente (`token` y `userName`)
- **[0.15 pts]** Desplegar formulario de login si `token` no existe como state del componente
  - La lógica podría variar levemente, y será válida siempre que el criterio para mostrar o no el formulario de login varíe al hacer login. Por ejemplo, podría ser un flag en vez del token mismo
  - Aquí se evalúa también el guardar información de inputs de formulario (probablemente en state)
- **[0.05 pts]** Request login fallido: mostrar mensaje arriba del formulario (no es necesario que esté estilado)
- **[0.05 pts]** Request login exitoso: Mostrar contenido principal
  - Si el contenido principal no fue implementado, mostrar al menos header original
- **[0.1 pts]** Respetar layout Parte I al implementar componente de login (o lógica de login si fue hecho en el mismo componente padre)

### Contenido principal

Luego de iniciar sesión, ya es posible mostrar el contenido principal de la aplicación. Para esto debes utilizar el documento HTML estático con nombre `content.html` de la Parte I. Deberás "traducirlo" a varios componentes en React (incluyendo los estilos que ya habías agregado).

Naturalmente no dispones de la información necesaria (más que lo que implementaste en la versión estática), pero sí dispones de endpoints en la API para obtener esta información.

Lo primero que debes mostrar es el nombre del usuario en el header ya implementado. El texto que decía "Username" debe ser reemplazado por este nombre de usuario. Considera que deberías tener disponible esta información luego de haber llamado al endpoint de autenticación.

Además, debes implementar la lógica de logout al presionar el botón "Salir". Para esto, puedes utilizar el mismo criterio que te permitió decidir si mostrar o no el contenido principal en base a si el usuario había iniciado sesión (probablemente algún tipo de dato presente o ausente). Luego de presionar el botón, entonces, debe volver a mostrarse el formulario de login.

En segundo lugar, debes obtener la información de las comunas y sus respectivos horarios del eclipse utilizando el endpoint descrito en la Parte II. Como los requests toman un tiempo en responder, mientras la información se esté cargando debes mostrar un "loading" de alguna manera (puede ser sólo texto o algo más elaborado como un spinner, queda a criterio tuyo).

Recuerda además que este endpoint requiere autenticación, por lo que necesitas adjuntar el JWT token de alguna manera.

Una vez cargada la información, será posible remover el loading y desplegar todo el contenido siguiendo el formato del wireframe y documento estático que ya implementaste. La única restricción aquí es que debes mostrar la duración en el formato "X minutos Y seg" (si es menos de 1 minuto, sólo debes mostrar los segundos).

Por último debes implementar la lógica del formulario de actualización de información. En este caso, debes tener las siguientes consideraciones:

- El select de comuna debe incluir la lista de comunas que ya conseguiste con el último endpoint que llamaste
- Al seleccionar una comuna, debes pre-llenar todos los campos con la información del eclipse correspondiente a esa comuna
- Al hacer submit del formulario, debes llamar al tercer endpoint especificado en la Parte II (con método PATCH y la información actualizada)
- El usuario debe poder actualizar sólo parte de la información, y para esto dejará en blanco los campos que quiera mantener sin cambios. En ese caso, antes de enviar el request al endpoint, **debes asegurarte de no incluir los campos que estén en blanco**
- Mientras el request al endpoint esté cargando, debes deshabilitar el botón de submit del formulario. Luego de obtener una respuesta, debes volver a habilitarlo
- Si el request retorna un error (por ejemplo, de validación), debes mostrar un pequeño mensaje arriba del formulario que indique esto (nuevamente, puedes elegir un mensaje pertinente)
- Si el request es existoso, entonces debes actualizar la lista inicial de comunas (columna de la izquierda) con este nuevo dato. En particular, debes reemplazar la información del eclipse de la comuna especificada. La estrategia para lograr este resultado queda a criterio tuyo
- Finalmente, si el request es exitoso, debes actualizar (y si es necesario, pre-llenar) el formulario con la nueva información (pues la comuna seguirá seleccionada)
- Al igual que para el login, el resultado de la Parte I debe ser igual a lo desplegado en los componentes del contenido principal

#### Puntajes "Contenido principal" (1.5 pts en total)

- **[0.05 pts]** Mostrar nombre de usuario en header
- **[0.05 pts]** Lógica logout al presionar botón "Salir" ("limpiar" información de usuario y/o flag obtenidos luego de hacer login)
- **[0.05 pts]** Definir state para manejar información de comunas y loading asociado
- **[0.1 pts]** Cargar información de comunas al disponer de token llamando al endpoint `GET /api/districts/eclipse-info` (incluyendo autenticación con header `Authorization: Bearer :token`)
- **[0.05 pts]** Mostrar loading mientras request anterior se está ejecutando (no es necesario que esté estilado)
- **[0.05 pts]** Al finalizar el request, remover "loading"
- **[0.1 pts]** Agrupar comunas por región
  - Puede ser con una estructura del estilo `{ regionName: [/* Districts array */], regionName: [/* Districts array */] }` o alguna similar
- **[0.05 pts]** Desplegar regiones y comunas como títulos
- **[0.1 pts]** Desplegar información del eclipse por comuna en una lista no ordenada (0.05 pts cada sub-item)
  - Construir lista utilizando campos `EclipseInfo`
  - Mostrar duración en formato `X minutos Y seg` (no importa singular o plural)
- **[0.1 pts]** Desplegar formulario para ingresar nueva cantidad de personas (aunque sea estático)
- **[0.1 pts]** Select de comunas debe incluir lista de comunas obtenidas al llamar a endpoint "anterior"
- **[0.1 pts]** Guardar información de inputs de formulario (probablemente en state)
  - Al iniciar el formulario, los valores del select pueden ser vacíos (pero mostrarse seleccionados visualmente). Si se rellenan sólo los otros inputs y se hace submit, el valor del select será vacío. Manejar el caso en que se selecciona automáticamente no será evaluado, por lo que para corregir, es probable que tengan que seleccionar explícitamente un valor en este select.
- **[0.1 pts]** Al seleccionar comuna, deben pre-llenarse los campos con la información del eclipse correspondiente a esa comuna
- **[0.15 pts]** Ingresar nueva cantidad llamando al endpoint `POST /api/districts/:id/influxes` (incluyendo body y autenticación con header `Authorization: Bearer :token`)
- **[0.05 pts]** No incluir los campos que estén en blanco en el request de actualización
- **[0.05 pts]** Mientras request esté cargando, deshabilitar botón submit del formulario (se debe poder visualizar)
- **[0.05 pts]** Request fallido: mostrar mensaje arriba del formulario (no es necesario que esté estilado)
- **[0.1 pts]** Request exitoso: Actualizar lista inicial de comunas con nueva información del eclipse
  - Debe actualizarse la lista asociada a la comuna a la que corresponde la información del eclipse
- **[0.05 pts]** Actualizar el formulario con la nueva información en caso de ser un request exitoso (incluso si campos se borraron del formulario para no actualizarlos deberían volver a poblarse)
- **[0.05 pts]** Respetar layout Parte I al implementar componente principal

#### Solución "Login de usuario + Contenido principal"

```jsx
// src/components/Login.jsx

import { useState } from 'react';

function Login({ error, onLogin }) {
  const [payload, setPayload] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setPayload((payload) => ({
      ...payload,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(payload);
  }

  return (
    <div className="login-wrapper">
      <div className="login-container">
        {error && (
          <div className="error">{error}</div>
        )}
        <h1>Login Examen</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={payload.email}
            />
          </div>
          <div className="field">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              value={payload.password}
            />
          </div>
          <div className="actions">
            <button>Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
```

```jsx
// src/components/Header.jsx

import logo from '../assets/solar-eclipse.jpg'

function Header({ onLogout, userName }) {
  return (
    <header className="app-header">
      <div className="brand">
        <img src={logo} />
        <h1>Examen IIC2513 2020-2</h1>
      </div>
      <ul>
        <li>{userName}</li>
        <li>
          <button onClick={onLogout}>
            Salir
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
```

```jsx
// src/components/Forma3/DistrictEclipseInfos.jsx

function formatDuration(duration) {
  const seconds = duration % 60;
  const minutes = Math.floor(duration / 60);
  return `${minutes > 0 ? `${minutes} minutos ` : ''}${seconds} seg`;
}

function DistrictsEclipseInfos({ districtsByRegion }) {
  return (
    Object.keys(districtsByRegion).map((regionName) => (
      <section key={regionName}>
        <h2>Región de {regionName}</h2>
        {districtsByRegion[regionName].map((district) => (
          <div key={district.id} className="district">
            <h3>{district.name}</h3>
            <ul>
              <li>Inicio eclipse: {district.EclipseInfo.startTime}</li>
              <li>Inicio totalidad: {district.EclipseInfo.totalityTime}</li>
              <li>Fin eclipse: {district.EclipseInfo.endTime}</li>
              <li>Duración: {formatDuration(district.EclipseInfo.duration)}</li>
              <li>Altura sol: {district.EclipseInfo.altitude}</li>
            </ul>
          </div>
        ))}
      </section>
    ))
  )
}

export default DistrictsEclipseInfos;
```

```jsx
// src/components/Forma3/DistrictForm.jsx

import { useEffect, useState } from 'react';

function DistrictForm({ districts, loading, onSubmit }) {
  const [payload, setPayload] = useState({
    startTime: '',
    totalityTime: '',
    endTime: '',
    duration: '',
    altitude: '',
    districtId: '',
  });

  useEffect(() => {
    if (districts.length) {
      const districtId = payload.districtId || districts[0].id;
      setPayload((payload) => ({
        ...payload,
        districtId,
      }));
    }
  }, [districts, payload.districtId, setPayload]);

  useEffect(() => {
    if (districts.length && payload.districtId) {
      const {
        EclipseInfo: { startTime, totalityTime, endTime, duration, altitude },
      } = districts.find((district) => district.id === Number(payload.districtId));
      setPayload((payload) => ({
        ...payload,
        startTime,
        totalityTime,
        endTime,
        duration,
        altitude,
      }));
    }
  }, [districts, payload.districtId, setPayload]);

  const handleChange = (event) => {
    setPayload((payload) => ({
      ...payload,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="district">Comuna</label>
        <select id="districtId" name="districtId" onChange={handleChange} value={payload.districtId}>
          {districts.map((district) => (
            <option
              key={district.id}
              value={district.id}
            >
              {district.name}
            </option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="startTime">Hora inicio eclipse</label>
        <input
          type="text"
          id="startTime"
          name="startTime"
          onChange={handleChange}
          value={payload.startTime}
        />
      </div>
      <div className="field">
        <label htmlFor="totalityTime">Hora totalidad eclipse</label>
        <input
          type="text"
          id="totalityTime"
          name="totalityTime"
          onChange={handleChange}
          value={payload.totalityTime}
        />
      </div>
      <div className="field">
        <label htmlFor="endTime">Hora fin eclipse</label>
        <input
          type="text"
          id="endTime"
          name="endTime"
          onChange={handleChange}
          value={payload.endTime}
        />
      </div>
      <div className="field">
        <label htmlFor="duration">Duración totalidad (segundos)</label>
        <input
          type="number"
          id="duration"
          name="duration"
          min="1"
          max="130"
          onChange={handleChange}
          value={payload.duration}
        />
      </div>
      <div className="field">
        <label htmlFor="altitude">Altura del sol en totalidad (grados)</label>
        <input
          type="text"
          id="altitude"
          name="altitude"
          onChange={handleChange}
          value={payload.altitude}
        />
      </div>
      <div className="actions">
        <button disabled={loading}>Actualizar</button>
      </div>
    </form>
  );
}

export default DistrictForm;
```

```jsx
// src/components/Forma3/index.jsx

import { useEffect, useMemo, useState } from 'react';
import '../../App.css';
import Header from '../Header';
import Login from '../Login';
import DistrictEclipseInfos from './DistrictEclipseInfos';
import DistrictForm from './DistrictForm';

const API_BASE_URL = 'http://localhost:3000';
const LOGIN_ERROR_MSG = 'Hubo un error con el inicio de sesión';
const INFO_ERROR_MSG = 'Hubo un error al actualizar la información del eclipse';

function fetchLogin(payload) {
  return fetch(`${API_BASE_URL}/api/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })
}

function fetchDistricts(token) {
  return fetch(`${API_BASE_URL}/api/districts/eclipse-info`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  });
}

function updateDistrictEclipseInfo(payload, token) {
  const { districtId, ...rest } = payload;
  return fetch(`${API_BASE_URL}/api/districts/${districtId}/eclipse-info`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(rest),
  });
}

function Forma3() {
  const [token, setToken] = useState();
  const [userName, setUserName] = useState();
  const [loginError, setLoginError] = useState();
  const [districts, setDistricts] = useState([]);
  const [loadingDistricts, setLoadingDistricts] = useState(true);
  const [loadingInfoUpdate, setLoadingInfoUpdate] = useState(false);
  const [eclipseInfoError, setEclipseInfoError] = useState();

  useEffect(() => {
    if (token) {
      setLoadingDistricts(true);
      fetchDistricts(token)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          return false;
        })
        .then((body) => {
          setLoadingDistricts(false);
          if (body) setDistricts(body);
        })
    }
  }, [token]);

  const districtsByRegion = useMemo(() => {
    const data = districts.reduce((acc, district) => {
      return {
        ...acc,
        [district.region]: [...(acc[district.region] || []), district],
      }
    }, {});
    return data;
  }, [districts]);

  const login = async (payload) => {
    try {
      const response = await fetchLogin(payload);
      if (response.status === 201) {
        const { name, token } = await response.json();
        setToken(token);
        setUserName(name);
      } else {
        setLoginError(LOGIN_ERROR_MSG);
      }
    } catch (e) {
      setLoginError(LOGIN_ERROR_MSG);
    }
  };

  const logout = () => {
    setToken();
    setUserName();
    setLoginError();
  };

  const updateEclipseInfo = async (payload) => {
    try {
      setLoadingInfoUpdate(true);
      const cleanPayload = Object.keys(payload).reduce((acc, key) => {
        if (!payload[key]) return acc;
        return {
          ...acc,
          [key]: payload[key],
        }
      }, {});
      const response = await updateDistrictEclipseInfo(cleanPayload, token);
      let success = false;
      if (response.status === 200) {
        const body = await response.json();
        const districtIndex = districts.findIndex((district) => district.id === body.districtId);
        setDistricts((districts) => {
          const newDistricts = [...districts];
          newDistricts[districtIndex] = {
            ...newDistricts[districtIndex],
            EclipseInfo: body,
          }
          return newDistricts;
        });
        setEclipseInfoError();
        success = true;
      } else {
        setEclipseInfoError(INFO_ERROR_MSG);
      }
      setLoadingInfoUpdate(false);
      return success;
    } catch (e) {
      setEclipseInfoError(INFO_ERROR_MSG);
      setLoadingInfoUpdate(false);
      return false;
    }
  };

  if (!token) return (
    <Login
      onLogin={login}
      error={loginError}
    />
  );

  return (
    <div className="app">
      <Header
        onLogout={logout}
        userName={userName}
      />
      {loadingDistricts && <div className="loading">Cargando...</div>}
      {!loadingDistricts && (
        <main className="content">
          <section>
            <h1>Información eclipse</h1>
            <DistrictEclipseInfos districtsByRegion={districtsByRegion} />
          </section>
          <section className="form-container">
            <h2>Actualizar información</h2>
            {eclipseInfoError && (
              <div className="error">{eclipseInfoError}</div>
            )}
            <DistrictForm
              districts={districts}
              loading={loadingInfoUpdate}
              onSubmit={updateEclipseInfo}
            />
          </section>
        </main>
      )}
    </div>
  );
}

export default Forma3;
```

## Consideraciones generales

- Puedes incluir alguna instrucción especial que sea necesaria para ejecutar tu proyecto en un archivo llamado `instructions.md` (o txt, dependiendo de tu gusto). Revisa la sección forma de entrega para saber dónde incluir este archivo
- Puedes además realizar supuestos siempre que los dejes explícitos en el mismo archivo del punto anterior
- Si necesitas más endpoints que los descritos en el enunciado, puedes agregarlos siempre que los dejes explícitos en los supuestos
- Puedes agregar packages de npm si te facilitan el desarrollo. Debes, eso sí, **dejarlos explícitos** en el archivo de instrucciones
- Si los responses con error de la API entregan un JSON body con un mensaje de error (indicando la razón del error), entonces tendrás un **bonus por proactividad de 0.1 puntos**
- **No se evaluarán los items que no sea posible probar**, por lo que asegúrate de que tu aplicación corra sin problemas (puedes instalarla "desde cero" para asegurarte)

#### Puntajes consideraciones

- **[+0.1 pts]** Bonus proactividad errores API con JSON body

## Forma de entrega

Debes entregar un archivo zip que contenga como mínimo 2 carpetas:

- Carpeta `src` de proyecto `examen-frontend`
- Carpeta `src` de proyecto `examen-backend`

Adicionalmente y de manera opcional, puedes incluir un archivo llamado `instructions.md` o `instructions.txt` con las instrucciones de ejecución específicas de tus proyectos, los packages extras que hayas utilizado (los ayudantes los instalarán para corregir) y cualquier supuesto que hayas hecho para resolver el examen. 

Para subir tu solución, debes adjuntar este archivo zip en el formulario presente en [esta URL](https://docs.google.com/forms/d/e/1FAIpQLSebc1Y-YHRYdavKQVy5tbfhGf4TJXdSIzBlbq33mPmqwU5Ijg/viewform)

Ten especial cuidado en incluir las carpetas `src` completas y no sólo una sub-carpeta. **No se aceptarán** entregas posteriores al plazo final por falta de archivos en la entrega.
