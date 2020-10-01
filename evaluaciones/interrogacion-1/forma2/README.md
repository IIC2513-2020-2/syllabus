# Interrogación 1 IIC2513 sección 1 2020/2
> Forma 2
>
> **Plazo de entrega: 01 de octubre de 2020 hasta las 23:59 hrs**

La prueba consiste en 3 preguntas prácticas que deberás desarrollar en un proyecto Node.js base al que puedes acceder [desde aquí](https://github.com/IIC2513-2020-2/interrogation-one). En el README encontrarás las instrucciones para correr el proyecto. En particular, tú sólo deberás modificar archivos dentro de la carpeta `src`.

Cuando termines tu prueba, debes comprimir esta carpeta en un zip, y subirla al [formulario publicado](https://forms.gle/TNBd4C6nMDW9mD587).

**OJO: No se aceptarán otras formas de entrega.**

## Pregunta 1 (2 pts)

En esta primera parte, utilizarás datos publicados por el [Data Observatory](https://github.com/Data-Observatory/covid19-API) sobre los PCRs acumulados por región de 5 días recientes. Para evitar requests HTTP, los datos fueron descargados y levemente procesados para que los uses inmediatamente. Sin embargo, si tienes curiosidad puedes ver la consulta original [aquí](http://covid19.dataobservatory.net:85/query?db=covid19&q=SELECT%20*%20FROM%20%22PCR_Regional%22%20ORDER%20BY%20time%20DESC%20LIMIT%2080) (aunque seguramente los resultados van a variar según pasen los días).

Puedes ver el detalle de los datos utilizando el objeto `covid` que fue puesto en `index.js` para tu comodidad. Tendrás que analizar su estructura para resolver esta pregunta. Además, encontrarás en este mismo archivo unas líneas comentadas con un ejemplo para probar tu solución (por supuesto, debes utilizar un path correspondiente a tu forma). El objeto que utilizarás en este caso es `covid.pcr`.

### Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los datos incluyen arreglos según días. Puedes suponer que están ordenados desde más reciente a más antiguo
- Puedes suponer además que los datos no serán nunca vacíos (siempre tendremos información aunque sea de un día)

### Implementación

Debes **implementar 4 funciones** que se encuentran dentro del archivo `src/forma2/pregunta1.js`. Todas reciben el parámetro `rawData` que corresponde a un objeto con la estructura de `covid.pcr`.

1. `getOldestPcrs(rawData)`
    - Función que **retorna un arreglo de objetos** con información de todas las regiones correspondientes al día más antiguo según los datos
    - Recuerda que los datos están ordenados. Te puede ayudar a obtener el día más antiguo
    - Considerando que la fecha es un string, puedes utilizar igualdad de strings para encontrar los datos del día más antiguo
2. `transformPcrsByRegion(rawData)`
    - **Retorna un arreglo de objetos**, donde cada objeto tiene la forma `{ time, Total, Region }`
    - Para las keys de los objetos, debes utilizar la propiedad `columns` y no escribirlas "a mano"
3. `getRegionWithLeastPcrs(rawData)`
    - **Retorna un objeto** con la estructura `{ time, Total, Region }`, correspondiente a la región con menos PCRs (así sabremos cuándo, dónde y cuántos se hicieron)
    - Puedes utilizar la función escrita en la parte anterior si se te hace más fácil encontrar el valor así. Si no, igual puedes obtenerlo procesando `rawData` directamente
4. `getStaticticsByRegion(rawData)`
    - A partir de los datos en bruto (`rawData`), esta función **retorna un objeto** cuyas keys son las regiones y, para cada una, el value es otro objeto con la estructura `{ avgQuantity, minQuantity }`, donde:
      - `avgQuantity`: número de PCRs promedio en los 5 días
      - `minQuantity`: mínimo número de PCRs en los 5 días

## Pregunta 2 (2 pts)

En esta pregunta trabajarás con datos de Pokémon. Los datos fueron obtenidos de [https://pokeapi.co/](https://pokeapi.co/) y [https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json](https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json). Similarmente, fueron descargados y levemente procesados para hacerlos más aptos para este problema.

Trabajarás con el archivo `src/forma2/pregunta2.js`. Dentro de este, verás que tienes a tu disposición dos funciones:

- `getKantoPokedex`: retorna una promesa que resuelve a un objeto con información de pokémons de Kanto. Dentro de este objeto, existe una key `pokemon_entries` cuyo valor es un array, donde cada elemento de este es un objeto con información de un Pokémon. Esta promesa siempre resuelve exitosamente.
- `getPokemon(name)`: retorna una promesa que resuelve a un objeto con información de un pokemon en particular, en base al parámetro `name` (puede estar en mayúsculas o minúsculas y funciona igual). **Un punto importante** es que esta promesa es rechazada cuando recibe un `name` de un pokémon que no existe en la fuente de datos

El objetivo de esta pregunta es implementar la función `buildPokedexInfo()` para que **retorne una promesa** que resuelva a un array con información de todos los pokémons de Kanto.

Cada elemento del array corresponderá a un pokémon, y tendrá la siguiente estructura:
```javascript
{
  region, // Corresponde al nombre de la región del pokémon
  name, // Nombre del pokémon
  id, // Id del pokémon
  type, // Array con los tipos del pokémon
  spawn_time, // Tiempo en que vuelve a aparecer en el mismo lugar
}
```

## Consideraciones
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro). **NO PUEDES** agregar más dependencias
- Los primeros dos atributos (`region`, `name`) son de la lista del pokedex, no del pokemon en particular
- Los tres últimos atributos (`id`, `type`, `spawn_time`) son de un pokémon específico. No vienen incluidos en el retorno de `getKantoPokedex`, sino que deberás llamar a `getPokemon` para obtenerlos
- De forma intencional **NO TODOS** los pokémons que se obtienen de `getKantoPokedex` tienen información detallada luego de llamar a `getPokemon`. En otras palabras, al llamar a `getPokemon` con algunos de los pokémons del pokedex, **la promesa será rechazada**.
- La función `buildPokedexInfo()` **DEBE** retornar una promesa que **SIEMPRE** resuelva al array descrito. **NO DEBE** ser rechazada
- En base a lo anterior, en los casos en que `getPokemon` sea rechazada, debes omitir las propiedades `id`, `type` y `spawn_time` en el objeto resultante
- Verás que la función `buildPokedexInfo` está marcada como async. Siéntete libre de quitarle esto si prefieres retornar la promesa tú mism@, pero **DEBE** retornar una promesa

## Pregunta 3 (2 pts)

En esta última parte de la interrogación, deberás utilizar información correspondiente a un HTTP response para armar un template HTML (utilizando EJS, sí, como en el proyecto).

No deberás realizar ningún request HTTP, sino que tendrás a tu disposición el objeto `photosResponse`, que tiene la estructura `{ status, headers, body }`, correspondiente a información del response. El objeto se obtuvo luego de hacer un request a [esta URL](https://jsonplaceholder.typicode.com/photos), pero fue procesado para utilizarlo directamente en esta pregunta. Dentro de este objeto, encontrarás la propiedad `body` que contiene una lista de objetos que representan una lista de fotos.

Dentro del archivo `src/forma2/pregunta3.js`, encontrarás una función llamada `renderHttpResponse`, que al final hace una llamada a una función `render`, la cual recibe un objeto. Esta función `render` es la encargada de generar una vista HTML, utilizando la información recibida en el parámetro (similar a `ctx.render` en el proyecto). Inicialmente recibe un objeto vacío, pero **debes modificarlo** para que reciba lo que estimes conveniente pasarle a la vista. Fíjate además en el output de la variable `codes` que también tienes disponible. Puede servirte para lo que viene.

Para implementar la vista, debes modificar el archivo `src/templates/index.html.ejs`. Verás que ya viene con una estructura HTML definida y tú sólo debes modificar lo que está dentro de `<div class="centered"></div>`.

El HTML generado debe incluir lo siguiente:
- Título principal: `Status text`
  - Tiene que tener *énfasis* (piénsalo en contexto HTML)
- Párrafo o etiqueta similar: Status code
- Título secundario: `Headers`
- Lista de los siguientes headers (debes reemplazar `:value` por el valor correspondiente del header):
  - `Content-length: :value`
  - `Date: :value`
- Título secundario: `Body`
- Lista con los "fotos". Cada "foto" debe incluir lo siguiente:
  - Título de la foto (resaltar de manera adecuada)
  - Foto en formato thumbnail

Debe verse algo así como lo siguiente:
```
OK
200

Headers
  - Content-length: 8503
  - Date: Thu, 01 Oct 2020 00:29:18 GMT

Body

accusamus beatae ad facilis cum similique qui sunt
<Photo>

reprehenderit est deserunt velit ipsam
<Photo>

...More photos
```

## Consideraciones
- Puedes probar tu solución en `index.js`, importando la función desde `src/forma2/pregunta3.js` y llamándola. Al hacerlo, se generará un archivo `output.html` en la raíz del proyecto. Puedes abrir este archivo en el browser para verificar tu implementación.
- **DEBES** responder sólo utilizando vanilla JavaScript (JavaScript puro) y EJS. **NO PUEDES** agregar más dependencias

---

### ¡Éxito en la Interrogación!
