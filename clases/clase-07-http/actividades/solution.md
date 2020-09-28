# Solución Actividad HTTP

> [Código en RunKit](https://runkit.com/sivicencio/5f723514e22595001ac01a56)

## Creando un cliente HTTP

Para la actividad asociada a la clase de HTTP, vamos a interactuar con la función `fetch` que poseen los browsers modernos. En particular, tendrás que construir un pequeño cliente HTTP, que consistirá en un objeto que incluya funciones para realizar requests con cada uno de los métodos HTTP disponibles.

Vamos a utilizar un sitio que permite realizar requests HTTP de recursos en formato JSON. El cliente que construirás **sólo procesará requests/responses en formato JSON**. Para realizar este ejercicio, tendrás que [revisar la documentación correspondiente](http://jsonplaceholder.typicode.com/guide). Sin embargo, el recurso con el que trabajaremos será `users` (no `posts` como aparece en la guía).

Verás que en la guía recién indicada se incluyen ejemplos de uso con `fetch`. Puedes basarte enteramente en aquellos ejemplos para construir el cliente. Si tienes dudas, puedes [revisar la documentación de fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch). Lo importante es que tu cliente sea un objeto que tenga la siguiente forma:

```javascript
// You can modify this code as you want
// The object needs to include the initial properties though

async function fetchResource(url, options = {}) {
  const hasJSONBody = !!options.body;
  const expandedOptions = {
    ...options,
    headers: {
      'Content-Type': 'application/json'
    },
  };
  if (hasJSONBody) {
    expandedOptions.body =  JSON.stringify(expandedOptions.body);
  }

  const response = await fetch(url, expandedOptions);
  const headers = {};
  new Map(response.headers.entries()).forEach((value, key) => headers[key] = value);
  return response.json()
    .then(body => ({
      status: response.status,
      headers,
      body,
    }));
}

const httpClient = {
  get: function(url) {
    return fetchResource(url, {
      method: 'GET',
    });
  },
  post: function(url, payload) {
    return fetchResource(url, {
      body: payload,
      method: 'POST',
    });
  },
  put: function(url, payload) {
    return fetchResource(url, {
      body: payload,
      method: 'PUT',
    });
  },
  patch: function(url, payload) {
    return fetchResource(url, {
      body: payload,
      method: 'PATCH',
    });
  },
  delete: function(url) {
    return fetchResource(url, {
      method: 'DELETE',
    });
  },
};
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
httpClient.get('https://jsonplaceholder.typicode.com/users/1').then(console.log);
```

Por supuesto, tendrás que probar tu implementación con cada uno de los métodos HTTP del cliente, e incluso utilizando otros recursos si gustas.

```javascript
// Write code to test each HTTP method
function displayResponse(title, response) {
  console.log(title);
  console.log(response);
  console.log('***************************');
}

httpClient.get('https://jsonplaceholder.typicode.com/users')
  .then((users) => displayResponse('GET /users', users));

httpClient.post('https://jsonplaceholder.typicode.com/users', {
  name: 'New user',
  username: 'new_user',
  email: 'new@user.com',
}).then((user) => displayResponse('POST /users', user));

httpClient.put('https://jsonplaceholder.typicode.com/users/1', {
  name: 'Updated user',
  username: 'updated_user',
  email: 'updated@user.com',
}).then((user) => displayResponse('PUT /users/1', user));

httpClient.patch('https://jsonplaceholder.typicode.com/users/1', {
  name: 'Updated user',
  username: 'updated_user',
  email: 'updated@user.com',
}).then((user) => displayResponse('PATCH /users/1', user));

httpClient.delete('https://jsonplaceholder.typicode.com/users/1')
  .then((user) => displayResponse('DELETE /users/1', user));
```

## Resumen de temas cubiertos

- Uso de `fetch`
- Requests: url, headers y body
- Responses: status, headers y body
