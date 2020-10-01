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
    - Función que **retorna un arreglo de objetos** con información de todas las regiones correspondientes al día más reciente según los datos
    - Recuerda que los datos están ordenados. Te puede ayudar a obtener el día más reciente
    - Considerando que la fecha es un string, puedes utilizar igualdad de strings para encontrar los datos del día más reciente
2. `transformCasesByRegion(rawData)`
    - **Retorna un arreglo de objetos**, donde cada objeto tiene la forma `{ time, Casos_acumulados, Region }`
    - Para las keys de los objetos, debes utilizar la propiedad `columns` y no escribirlas "a mano"
3. `getRegionWithMostCases(rawData)`
    - **Retorna un objeto** con la estructura `{ time, Casos_acumulados, Region }`, correspondiente a la región con más casos (así sabremos cuándo, dónde y cuántos casos hubo)
    - Puedes utilizar la función escrita en la parte anterior si se te hace más fácil encontrar el valor así. Si no, igual puedes obtenerlo procesando `rawData` directamente
4. `getStaticticsByRegion(rawData)`
    - A partir de los datos en bruto (`rawData`), esta función **retorna un objeto** cuyas keys son las regiones y, para cada una, el value es otro objeto con la estructura `{ avgCases, maxCases }`, donde:
      - `avgCases`: número de casos promedio en los 5 días
      - `maxCases`: máximo número de casos en los 5 días

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

## Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los primeros dos atributos (`year`, `category`) son del premio en sí, no del ganador
- Los dos últimos atributos (`born`, `bornCountry`) son de un ganador específico. No vienen incluidos en el retorno de `getPrizes`, sino que deberás llamar a `getLaureate` para obtenerlos
- De forma intencional **NO TODOS** los ganadores que se obtienen de `getPrizes` tienen información detallada luego de llamar a `getLaureate`. En otras palabras, al llamar a `getLaureate` con algunos de los ganadores, **la promesa será rechazada**.
- La función `buildLaureatesInfo()` **DEBE** retornar una promesa que **SIEMPRE** resuelva al array descrito. **NO DEBE** ser rechazada
- En base a lo anterior, en los casos en que `getLaureate` sea rechazada, debes omitir las propiedades `born` y `bornCountry` en el objeto resultante
- Verás que la función `buildLaureatesInfo` está marcada como async. Siéntete libre de quitarle esto si prefieres retornar la promesa tú mism@, pero **DEBE** retornar una promesa

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

## Consideraciones
- Puedes probar tu solución en `index.js`, importando la función desde `src/forma1/pregunta3.js` y llamándola. Al hacerlo, se generará un archivo `output.html` en la raíz del proyecto. Puedes abrir este archivo en el browser para verificar tu implementación.
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro) y EJS. **NO PUEDES** agregar más dependencias

---

### ¡Éxito en la Interrogación!
