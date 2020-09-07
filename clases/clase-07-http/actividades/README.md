# Actividad HTTP

> [Código en RunKit](https://runkit.com/sivicencio/5f55caa39e4e8c001a376d26)

## Creando un cliente HTTP

Para la actividad asociada a la clase de HTTP, vamos a interactuar con la función `fetch` que poseen los browsers modernos. En particular, tendrás que construir un pequeño cliente HTTP, que consistirá en un objeto que incluya funciones para realizar requests con cada uno de los métodos HTTP disponibles.

Vamos a utilizar un sitio que permite realizar requests HTTP de recursos en formato JSON. El cliente que construirás **sólo procesará requests/responses en formato JSON**. Para realizar este ejercicio, tendrás que [revisar la documentación correspondiente](http://jsonplaceholder.typicode.com/guide.html). Sin embargo, el recurso con el que trabajaremos será `users` (no `posts` como aparece en la guía).

Verás que en la guía recién indicada se incluyen ejemplos de uso con `fetch`. Puedes basarte enteramente en aquellos ejemplos para construir el cliente. Si tienes dudas, puedes [revisar la documentación de fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Lo importante es que tu cliente sea un objeto que tenga la siguiente forma:

```javascript
// You can modify this code as you want
// The object needs to include the initial properties though
const httpClient = {
  get: function(url) {},

  post: function(url, payload) {},

  put: function(url, payload) {},

  patch: function(url, payload) {},

  delete: function(url) {},
}
```

Si te fijas, todas las funciones reciben una URL, la cual debe ser utilizada para realizar el request correspondiente. Sin embargo, dependiendo del tipo de método, algunos reciben un parámetro extra llamado `payload`, el cual debe incluir la información que se quiera enviar en cada uno de esos requests. Puedes suponer que `payload` será un objeto literal JavaScript (o sea, de la forma `{ key1: value1, key2: value2, ..., keyN: valueN }`).

Ahora, los métodos no sólo deben realizar el request, sino que **todos tienen que retornar una promesa, que resuelva a un objeto** que sea de la siguiente forma:
```javascript
{
  status: responseStatus,
  headers: responseHeaders,
  body: responseBody
}
```

Puede que existan algunos responses que no contengan un `body`, en cuyo caso, puedes omitir esta propiedad en el objeto retornado. `status` y `headers` sí deben estar siempre presentes.

Para el caso de los headers, debe ser un objeto que contenga como key/value cada uno de los headers. Puede ser un desafío armar tal objeto, por lo que puedes ayudarte con la siguiente línea de código:

```javascript
const headers = {};
new Map(response.headers.entries()).forEach((value, key) => headers[key] = value);
```

Considera que `response` es el valor al que resuelve `fetch`, y que `headers` es el objeto que se construye con los headers del response.

Puedes hacer una prueba del método `get` de forma rápida con la siguiente línea:

```javascript
httpClient.get('https://jsonplaceholder.typicode.com/users/1').then(console.log)
```

Por supuesto, tendrás que probar tu implementación con cada uno de los métodos HTTP del cliente, e incluso utilizando otros recursos si gustas.

```javascript
// Write code to test each HTTP method
```

## Resumen de temas cubiertos

- Uso de `fetch`
- Requests: url, headers y body
- Responses: status, headers y body
