# Interrogación 1 IIC2513 sección 1 2020/2
> Forma 3
>
> **Plazo de entrega: 01 de octubre de 2020 hasta las 23:59 hrs**

La prueba consiste en 3 preguntas prácticas que deberás desarrollar en un proyecto Node.js base al que puedes acceder [desde aquí](https://github.com/IIC2513-2020-2/interrogation-one). En el README encontrarás las instrucciones para correr el proyecto. En particular, tú sólo deberás modificar archivos dentro de la carpeta `src`.

Cuando termines tu prueba, debes comprimir esta carpeta en un zip, y subirla al [formulario publicado](https://forms.gle/TNBd4C6nMDW9mD587).

**OJO: No se aceptarán otras formas de entrega.**

## Pregunta 1 (2 pts)

En esta primera parte, utilizarás datos publicados por el [Data Observatory](https://github.com/Data-Observatory/covid19-API) sobre los fallecidos acumulados por COVID por región de 5 días recientes. Para evitar requests HTTP, los datos fueron descargados y levemente procesados para que los uses inmediatamente. Sin embargo, si tienes curiosidad puedes ver la consulta original [aquí](http://covid19.dataobservatory.net:85/query?db=covid19&q=SELECT%20*%20FROM%20%22Fallecidos_cumulativo_regional%22%20ORDER%20BY%20time%20DESC%20LIMIT%2085) (aunque seguramente los resultados van a variar según pasen los días).

Puedes ver el detalle de los datos utilizando el objeto `covid` que fue puesto en `index.js` para tu comodidad. Tendrás que analizar su estructura para resolver esta pregunta. Además, encontrarás en este mismo archivo unas líneas comentadas con un ejemplo para probar tu solución (por supuesto, debes utilizar un path correspondiente a tu forma). El objeto que utilizarás en este caso es `covid.deaths`.

### Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los datos incluyen arreglos según días. Puedes suponer que están ordenados desde más reciente a más antiguo
- Puedes suponer además que los datos no serán nunca vacíos (siempre tendremos información aunque sea de un día)

### Implementación

Debes **implementar 4 funciones** que se encuentran dentro del archivo `src/forma3/pregunta1.js`. Todas reciben el parámetro `rawData` que corresponde a un objeto con la estructura de `covid.deaths`.

1. `getTotalDeaths(rawData)`
    - Función que **retorna un arreglo de arreglos** con información de los fallecidos totales en el país en los 5 días que cubre el dataset. (**UPDATE**) En otras palabras, es el mismo arreglo "original" de la fuente de datos, pero con menos elementos.
    - Tendrás que mirar la estructura de los datos en bruto para encontrar una forma de identificar los fallecidos totales
    - Puedes utilizar igualdad de strings para encontrar los datos de los fallecidos totales
2. `transformDeathsByRegion(rawData)`
    - **Retorna un arreglo de objetos**, donde cada objeto tiene la forma `{ time, Muertos, Region }`. (**UPDATE**) El arreglo resultante tendrá el mismo largo que el mismo arreglo "original" de la fuente de datos, sólo que cada elemento pasará a ser un objeto en vez de un arreglo
    - Para las keys de los objetos, debes utilizar la propiedad `columns` y no escribirlas "a mano"
3. `getRegionWithMostDeaths(rawData)`
    - **Retorna un objeto** con la estructura `{ time, Muertos, Region }`, correspondiente a la región con más fallecidos (así sabremos cuándo, dónde y cuántos fallecidos hubo)
    - Puedes utilizar la función escrita en la parte anterior si se te hace más fácil encontrar el valor así. Si no, igual puedes obtenerlo procesando `rawData` directamente
    - **UPDATE: DEBES** excluir los elementos `"Total"` para obtener este dato (de lo contrario, siempre obtendrías el total nacional, no la región)
4. `getStaticticsByRegion(rawData)`
    - A partir de los datos en bruto (`rawData`), esta función **retorna un objeto** cuyas keys son las regiones y, para cada una, el value es otro objeto con la estructura `{ maxDeaths, worrying }`, donde:
      - `maxDeaths`: máximo número de fallecidos en los 5 días (debiese ser el más reciente, pues el dato es acumulado)
      - `worrying`: boolean que es `true` si es que se superaron 500 fallecidos en esos 5 días. De lo contrario, `false`

## Pregunta 2 (2 pts)

En esta pregunta trabajarás con datos de Star Wars. Una vez más, los datos son "reales" y fueron obtenidos de [https://swapi.dev/](https://swapi.dev/). Similarmente, fueron descargados y levemente procesados para hacerlos más aptos para este problema.

Trabajarás con el archivo `src/forma3/pregunta2.js`. Dentro de este, verás que tienes a tu disposición dos funciones:

- `getCharacters`: retorna una promesa que resuelve a una lista de personajes de Star Wars, donde cada elemento de la lista es un objeto con información del personaje y su planeta natal. Esta promesa siempre resuelve exitosamente.
- `getPlanet(id)`: retorna una promesa que resuelve a un objeto con información de un planeta en particular, en base al parámetro `id`. **Un punto importante** es que esta promesa es rechazada cuando recibe un `id` de un planeta que no existe en la fuente de datos

El objetivo de esta pregunta es implementar la función `buildCharactersInfo()` para que **retorne una promesa** que resuelva a un array con información de todos los personajes de Star Wars (al menos de esta fuente de datos).

Cada elemento del array corresponderá a un personaje, y tendrá la siguiente estructura:
```javascript
{
  name, // Nombre del personaje
  height, // Altura del personaje
  mass, // Peso del personaje
  birth_year, // Año de nacimiento del personaje
  gender, // Género del personaje
  planet_name, // Nombre del planeta natal del personaje
  planet_terrain, // Terreno del planeta natal del personaje
}
```

## Consideraciones
- Los primeros 5 atributos (`name`, `height`, `mass`, `birth_year`, `gender`) son del personaje en sí
- Los dos últimos atributos (`planet_name`, `planet_terrain`) son de un planeta específico. No vienen incluidos en el retorno de `getCharacters`, sino que deberás llamar a `getPlanet` para obtenerlos
- De forma intencional **NO TODOS** los planetas que se obtienen de `getCharacters` tienen información detallada luego de llamar a `getPlanet`. En otras palabras, al llamar a `getPlanet` con algunos de los planetas, **la promesa será rechazada**.
- La función `buildCharactersInfo()` **DEBE** retornar una promesa que **SIEMPRE** resuelva al array descrito. **NO DEBE** ser rechazada
- En base a lo anterior, en los casos en que `getPlanet` sea rechazada, debes omitir las propiedades `planet_name` y `planet_terrain` en el objeto resultante
- Verás que la función `buildCharactersInfo` está marcada como async. Siéntete libre de quitarle esto si prefieres retornar la promesa tú mism@, pero **DEBE** retornar una promesa

## Pregunta 3 (2 pts)

En esta última parte de la interrogación, deberás utilizar información correspondiente a HTTP responses para armar un template HTML (utilizando EJS, sí, como en el proyecto).

No deberás realizar ningún request HTTP, sino que tendrás a tu disposición el objeto `postsResponses`, que es un array en el que cada elemento tiene la estructura `{ status, headers, body }`, correspondiente a información de una lista de responses. El objeto se obtuvo luego de hacer un request a [esta URL](https://jsonplaceholder.typicode.com/posts), pero fue procesado para utilizarlo directamente en esta pregunta. Dentro de cada elemento del array, encontrarás la propiedad `body` que contiene un objeto que representa un post.

Dentro del archivo `src/forma3/pregunta3.js`, encontrarás una función llamada `renderHttpResponse`, que al final hace una llamada a una función `render`, la cual recibe un objeto. Esta función `render` es la encargada de generar una vista HTML, utilizando la información recibida en el parámetro (similar a `ctx.render` en el proyecto). Inicialmente recibe un objeto vacío, pero **debes modificarlo** para que reciba lo que estimes conveniente pasarle a la vista. Fíjate además en el output de la variable `codes` que también tienes disponible. Puede servirte para lo que viene.

Para implementar la vista, debes modificar el archivo `src/templates/index.html.ejs`. Verás que ya viene con una estructura HTML definida y tú sólo debes modificar lo que está dentro de `<div class="centered"></div>`.

El HTML generado debe incluir lo siguiente:
- Título principal: `Responses HTTP`
- Lista de responses con la siguiente estructura:
  - Título secundario: `Status text (status code)`
    - `status code` tiene que tener *énfasis* (piénsalo en contexto HTML)
  - Título secundario: `Headers`
  - Lista de los siguientes headers (debes reemplazar `:value` por el valor correspondiente del header):
    - `Content-encoding: :value`
    - `Expect-ct: :value`
  - Título secundario: `Body`
  - Bloque con información del post:
    - Título del post (resaltar de manera adecuada)
    - Párrafo o etiqueta similar con body del post

Debe verse algo así como lo siguiente:
```
Responses HTTP

OK (200)

Headers
  - Content-encoding: gzip
  - Expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"

Body

sunt aut facere repellat provident occaecati excepturi optio reprehenderit

quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto

Not Modified (304)

Headers
  - Content-encoding: gzip
  - Expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"

Body

qui est esse

est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla

...More posts
```

## Consideraciones
- Puedes probar tu solución en `index.js`, importando la función desde `src/forma3/pregunta3.js` y llamándola. Al hacerlo, se generará un archivo `output.html` en la raíz del proyecto. Puedes abrir este archivo en el browser para verificar tu implementación.
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro) y EJS. **NO PUEDES** agregar más dependencias

---

### ¡Éxito en la Interrogación!
