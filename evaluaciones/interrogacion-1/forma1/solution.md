# Interrogación 1 IIC2513 sección 1 2020/2
> Forma 1
>
> **Plazo de entrega: 01 de octubre de 2020 hasta las 23:59 hrs**

La prueba consiste en 3 preguntas prácticas que deberás desarrollar en un proyecto Node.js base al que puedes acceder [desde aquí](https://github.com/IIC2513-2020-2/interrogation-one). En el README encontrarás las instrucciones para correr el proyecto. En particular, tú sólo deberás modificar archivos dentro de la carpeta `src`.

Cuando termines tu prueba, debes comprimir esta carpeta en un zip, y subirla al [formulario publicado](https://forms.gle/TNBd4C6nMDW9mD587).

**OJO: No se aceptarán otras formas de entrega.**

## Pregunta 1 (2 pts)

En esta primera parte, utilizarás datos publicados por el [Data Observatory](https://github.com/Data-Observatory/covid19-API) sobre los casos acumulados de COVID por región de 5 días recientes. Para evitar requests HTTP, los datos fueron descargados y levemente procesados para que los uses inmediatamente. Sin embargo, si tienes curiosidad puedes ver la consulta original [aquí](http://covid19.dataobservatory.net:85/query?db=covid19&q=SELECT%20*%20FROM%20%22Casos_acumulados_regional%22%20ORDER%20BY%20time%20DESC%20LIMIT%2085) (aunque seguramente los resultados van a variar según pasen los días).

Puedes ver el detalle de los datos utilizando el objeto `covid` que fue puesto en `index.js` para tu comodidad. Tendrás que analizar su estructura para resolver esta pregunta. Además, encontrarás en este mismo archivo unas líneas comentadas con un ejemplo para probar tu solución (por supuesto, debes utilizar un path correspondiente a tu forma).

### Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los datos incluyen arreglos según días. Puedes suponer que están ordenados desde más reciente a más antiguo
- Puedes suponer además que los datos no serán nunca vacíos (siempre tendremos información aunque sea de un día)

### Implementación

Debes **implementar 4 funciones** que se encuentran dentro del archivo `src/forma1/pregunta1.js`. Todas reciben el parámetro `rawData` que corresponde a un objeto con la estructura de `covid.cases`.

1. `getMostRecentCases(rawData)`
    - Función que **retorna un arreglo de arreglos** con información de todas las regiones correspondientes al día más reciente según los datos. (**UPDATE**) En otras palabras, es el mismo arreglo "original" de la fuente de datos, pero con menos elementos
    - Recuerda que los datos están ordenados. Te puede ayudar a obtener el día más reciente
    - Considerando que la fecha es un string, puedes utilizar igualdad de strings para encontrar los datos del día más reciente
2. `transformCasesByRegion(rawData)`
    - **Retorna un arreglo de objetos**, donde cada objeto tiene la forma `{ time, Casos_acumulados, Region }`. (**UPDATE**) El arreglo resultante tendrá el mismo largo que el mismo arreglo "original" de la fuente de datos, sólo que cada elemento pasará a ser un objeto en vez de un arreglo
    - Para las keys de los objetos, debes utilizar la propiedad `columns` y no escribirlas "a mano"
3. `getRegionWithMostCases(rawData)`
    - **Retorna un objeto** con la estructura `{ time, Casos_acumulados, Region }`, correspondiente a la región con más casos (así sabremos cuándo, dónde y cuántos casos hubo)
    - Puedes utilizar la función escrita en la parte anterior si se te hace más fácil encontrar el valor así. Si no, igual puedes obtenerlo procesando `rawData` directamente
    - **UPDATE: DEBES** excluir los elementos `"Total"` para obtener este dato (de lo contrario, siempre obtendrías el total nacional, no la región)
4. `getStaticticsByRegion(rawData)`
    - A partir de los datos en bruto (`rawData`), esta función **retorna un objeto** cuyas keys son las regiones y, para cada una, el value es otro objeto con la estructura `{ avgCases, maxCases }`, donde:
      - `avgCases`: número de casos promedio en los 5 días
      - `maxCases`: máximo número de casos en los 5 días

### Solución

**Nota**: hay un typo en `getStaticticsByRegion` (debiese ser `getStatisticsByRegion`), pero como la prueba fue publicada así, se corregirá tal cual estaba

```javascript
function getMostRecentCases(rawData) {
  /* Write your solution here */
  const mostRecentDay = rawData.values[0][0];
  return rawData.values.filter((singleCase) => singleCase[0] === mostRecentDay);
}

function transformCasesByRegion(rawData) {
  /* Write your solution here */
  return rawData.values.map((singleCase) => singleCase
    .reduce((acc, attr, index) => ({
      ...acc,
      [rawData.columns[index]]: attr,
    }), {})
  );
  
}

function getRegionWithMostCases(rawData) {
  /* Write your solution here */
  const transformedCases = transformCasesByRegion(rawData);
  let [maxCase] = transformedCases;
  transformedCases.forEach((singleCase) => {
    if (singleCase['Region'] !== '"Total"' && singleCase['Casos_acumulados'] > maxCase['Casos_acumulados']) {
      maxCase = singleCase;
    }
  });
  return maxCase;
}

function getStaticticsByRegion(rawData) {
  /* Write your solution here */
  const transformedCases = transformCasesByRegion(rawData);
  const transformedCasesByRegion = transformedCases.reduce((acc, singleCase) => ({
    ...acc,
    [singleCase['Region']]: [
      ...(acc[singleCase['Region']] || []),
      singleCase,
    ],
  }), {});

  let statisticsObj = {};
  Object.keys(transformedCasesByRegion).forEach((key) => {
    const sum = transformedCasesByRegion[key].reduce((acc, item) => acc + item['Casos_acumulados'], 0);
    const avgCases = sum / transformedCasesByRegion[key].length;
    let maxCases = transformedCasesByRegion[key][0]['Casos_acumulados'];
    transformedCasesByRegion[key].forEach((singleCase) => {
      if (singleCase['Casos_acumulados'] > maxCases) {
        maxCases = singleCase['Casos_acumulados'];
      }
    });
    statisticsObj[key] = { avgCases, maxCases };
  });

  return statisticsObj;
}
```

### Puntajes

1. `getMostRecentCases` **(0.5pts)**
    - Función corre sin problemas (no se cae) (0.1 pts)
    - Output es el esperado (0.2 pts)
      - Si está hardcoded, no asignar puntaje
      - Queda a criterio del corrector asignar parte del puntaje si hay leves diferencias en output
    - Se usa como criterio para filtrar el día más reciente (0.1 pts)
    - Se filtra el array original (0.1 pts)
2. `transformCasesByRegion` **(0.5pts)**
    - Función corre sin problemas (no se cae) (0.1 pts)
    - Output es el esperado (0.2 pts)
      - Si está hardcoded, no asignar puntaje
      - Queda a criterio del corrector asignar parte del puntaje si hay leves diferencias en output
    - Se hace una conversión de elementos del arreglo original de arreglo a objeto (0.1 pts)
    - Para la construcción de las keys del objeto, se utiliza la key `columns` de `rawData` (y no se escriben las keys como strings a mano) (0.1 pts)
3. `getRegionWithMostCases` **(0.5pts)**
    - Función corre sin problemas (no se cae) (0.1 pts)
    - Output es el esperado (0.2 pts)
      - Si está hardcoded, no asignar puntaje
      - Queda a criterio del corrector asignar parte del puntaje si hay leves diferencias en output
    - El cálculo se hace sin considerar la "región" `"Total"` (que corresponde al total nacional, no a una región) (0.2 pts)
4. `getStaticticsByRegion` **(0.5pts)**
    - Función corre sin problemas (no se cae) (0.1 pts)
    - Output es el esperado (0.2 pts)
      - Si está hardcoded, no asignar puntaje
      - Queda a criterio del corrector asignar parte del puntaje si hay leves diferencias en output
    - Construcción de objeto con regiones como keys (aunque no tengan values correctos) (0.1 pts)
    - Cálculo de `avgCases` (0.05 pts)
    - Cálculo de `maxCases` (0.05 pts)

## Pregunta 2 (2 pts)

En esta pregunta trabajarás con datos de los últimos premios Nobel. Una vez más, los datos son reales y fueron obtenidos de [http://api.nobelprize.org](http://api.nobelprize.org/). Similarmente, fueron descargados y levemente procesados para hacerlos más aptos para este problema.

Trabajarás con el archivo `src/forma1/pregunta2.js`. Dentro de este, verás que tienes a tu disposición dos funciones:

- `getPrizes`: retorna una promesa que resuelve a una lista de premios Nobel de los últimos 10 años, donde cada elemento de la lista es un objeto con información del premio Nobel y sus ganadores ("laureates"). Esta promesa siempre resuelve exitosamente.
- `getLaureate(id)`: retorna una promesa que resuelve a un objeto con información de un ganador en particular, en base al parámetro `id`. **Un punto importante** es que esta promesa es rechazada cuando recibe un `id` de un ganador que no existe en la fuente de datos

El objetivo de esta pregunta es implementar la función `buildLaureatesInfo()` para que **retorne una promesa** que resuelva a un array con información de todos los ganadores de los últimos 10 años.

Cada elemento del array corresponderá a un ganador, y tendrá la siguiente estructura:
```javascript
{
  year, // Año del premio
  category, // Categoría del premio
  id, // Id del ganador
  firstname, // Primer nombre del ganador
  surname, // Apellido del ganador
  motivation, // Motivación del premio
  share, // "Share" del premio
  born, // Fecha de nacimiento del ganador
  bornCountry, // País de origen del ganador
}
```

### Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los primeros dos atributos (`year`, `category`) son del premio en sí, no del ganador
- Los dos últimos atributos (`born`, `bornCountry`) son de un ganador específico. No vienen incluidos en el retorno de `getPrizes`, sino que deberás llamar a `getLaureate` para obtenerlos
- De forma intencional **NO TODOS** los ganadores que se obtienen de `getPrizes` tienen información detallada luego de llamar a `getLaureate`. En otras palabras, al llamar a `getLaureate` con algunos de los ganadores, **la promesa será rechazada**.
- La función `buildLaureatesInfo()` **DEBE** retornar una promesa que **SIEMPRE** resuelva al array descrito. **NO DEBE** ser rechazada
- En base a lo anterior, en los casos en que `getLaureate` sea rechazada, debes omitir las propiedades `born` y `bornCountry` en el objeto resultante
- Verás que la función `buildLaureatesInfo` está marcada como async. Siéntete libre de quitarle esto si prefieres retornar la promesa tú mism@, pero **DEBE** retornar una promesa

### Solución

```javascript
async function buildLaureatesInfo() {
  const { prizes } = await getPrizes();
  const prizesLaureatesArray = prizes.reduce((list, prize) => [
    ...list,
    ...prize.laureates.map((laureate) => ({
      year: prize.year,
      category: prize.category,
      ...laureate,
    })),
  ], []);

  const lauretesArrayPromises = prizesLaureatesArray.map(({ id }) => getLaureate(id).catch(() => ({})));
  const laureatesArray = await Promise.all(lauretesArrayPromises);
  const laureatesData = laureatesArray.reduce((acc, { id, born, bornCountry }) => {
    if (!id) return acc;
    return {
      ...acc,
      [id]: {
        born,
        bornCountry,
      },
    }
  }, {});

  return prizesLaureatesArray.map((laureate) => ({
    ...laureate,
    ...(laureatesData[laureate.id] || {})
  }));
}
```

### Puntajes

- Función corre sin problemas (no se cae) (0.5 pts)
- Output es el esperado (0.5 pts)
  - Si está hardcoded, no asignar puntaje
  - Queda a criterio del corrector asignar parte del puntaje si hay leves diferencias en output
- Dentro del arreglo resultante, cada objeto incluye las keys de la información original de cada ganador y del premio (0.25 pts)
- Por cada ganador, se llama a `getLaureate` (0.25 pts)
- Se maneja el caso en que la promesa a `getLaureate` es rechazada (0.25 pts)
- Luego de tener la información específica de cada ganador, se construye el arreglo final (0.25 pts)

## Pregunta 3 (2 pts)

En esta última parte de la interrogación, deberás utilizar información correspondiente a un HTTP response para armar un template HTML (utilizando EJS, sí, como en el proyecto).

No deberás realizar ningún request HTTP, sino que tendrás a tu disposición el objeto `todosResponse`, que tiene la estructura `{ status, headers, body }`, correspondiente a información del response. El objeto se obtuvo luego de hacer un request a [esta URL](https://jsonplaceholder.typicode.com/todos), pero fue procesado para utilizarlo directamente en esta pregunta. Dentro de este objeto, encontrarás la propiedad `body` que contiene una lista de objetos que representan un "todo" list.

Dentro del archivo `src/forma1/pregunta3.js`, encontrarás una función llamada `renderHttpResponse`, que al final hace una llamada a una función `render`, la cual recibe un objeto. Esta función `render` es la encargada de generar una vista HTML, utilizando la información recibida en el parámetro (similar a `ctx.render` en el proyecto). Inicialmente recibe un objeto vacío, pero **debes modificarlo** para que reciba lo que estimes conveniente pasarle a la vista. Fíjate además en el output de la variable `codes` que también tienes disponible. Puede servirte para lo que viene.

Para implementar la vista, debes modificar el archivo `src/templates/index.html.ejs`. Verás que ya viene con una estructura HTML definida y tú sólo debes modificar lo que está dentro de `<div class="centered"></div>`.

El HTML generado debe incluir lo siguiente:
- Título principal: `Status code (status text)`
  - `status text` tiene que tener *énfasis* (piénsalo en contexto HTML)
- Título secundario: `Headers`
- Lista de los siguientes headers (debes reemplazar `:value` por el valor correspondiente del header):
  - `Content-type: :value`
  - `Cache-control: :value`
- Título secundario: `Body`
- Lista con los "todos". Cada "todo" debe incluir lo siguiente:
  - Título del todo (resaltar de manera adecuada)
  - Párrafo o etiqueta similar que muestre `Completed` si está completed o, de lo contrario, `Pending`

Debe verse algo así como lo siguiente:
```
200 (OK)

Headers
  - Content-type: application/json; charset=utf-8
  - Cache-control: max-age=43200

Body

delectus aut autem
Pending

quis ut nam facilis et officia qui
Completed

...More todos
```

### Consideraciones
- Puedes probar tu solución en `index.js`, importando la función desde `src/forma1/pregunta3.js` y llamándola. Al hacerlo, se generará un archivo `output.html` en la raíz del proyecto. Puedes abrir este archivo en el browser para verificar tu implementación.
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro) y EJS. **NO PUEDES** agregar más dependencias

### Solución

```javascript
function renderHttpResponse() {
  /* Write your solution here */
  const { status, headers, body } = todosResponse;

  /* Modify the object passed to render */
  render({ status, headers, body, codes });
}
```

```html
<div class="centered">
  <!-- Your code here -->
  <h1><%= status %> (<em><%= codes[status] %></em>)</h1>
  <section class="headers">
    <h2>Headers</h2>
    <ul>
      <li><strong>Content-type</strong>: <%= headers['content-type'] %></li>
      <li><strong>Cache-control</strong>: <%= headers['cache-control'] %></li>
    </ul>
  </section>
  <section class="body">
    <h2>Body</h2>
    <ul>
      <% body.forEach((todo) => { %>
        <li class="todo">
          <h3><%= todo.title %></h3>
          <p><%= todo.completed ? 'Completed' : 'Pending' %></p>
        </li>
      <% }) %>
    </ul>
  </section>
</div>
```

### Puntajes

- Función corre sin problemas (no se cae) y genera `output.html` (0.25 pts)
- Se pasa un objeto a la función `render` para ser utilizado en la vista (0.25 pts)
- Título principal (0.3 pts)
  - Status code (0.15 pts)
  - Status text **con énfasis** (0.15 pts)
    - Sin énfasis asignar 0.05 pts
- Sección headers (0.6 pts)
  - Título secundario `Headers` (0.1 pts)
  - Lista (`<ul>`, `<ol>`) con headers, sin considerar contenido (0.1 pts)
  - Inclusión correcta de ambos headers (0.4 pts)
    - Asignar 0.2 pts por cada header
- Sección body (0.6 pts)
  - Título secundario `Body` (0.1 pts)
  - Dentro de una lista (`<ul>`, `<ol>`), iterar sobre arreglo en `todosResponse.body` (0.2 pts)
  - Por cada todo, incluir título **resaltado** (0.15 pts)
    - Si no está resaltado, asignar 0.05 pts
  - Por cada todo, incluir párrafo con completitud (0.15 pts)
    - Si no es un párrafo o etiqueta de similar propósito, asignar 0.05 pts

---

### ¡Éxito en la Interrogación!
