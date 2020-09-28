# Solución Finders

> [Código en RunKit](https://runkit.com/sivicencio/5f71732f5b8d1f001ac60d0d)

Para este ejercicio utilizaremos el mismo array de usuarios de ejercicios anteriores. Partiremos definiéndolo:

```javascript
const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    age: 33,
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    age: 23,
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    age: 40,
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: "-68.6102",
        lng: "-47.0653"
      }
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    age: 52,
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: "29.4572",
        lng: "-164.2990"
      }
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services'
    }
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    age: 19,
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: "-31.8129",
        lng: "62.5342"
      }
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems'
    }
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    age: 72,
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: "-71.4197",
        lng: "71.7478"
      }
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications'
    }
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    age: 28,
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: "24.8918",
        lng: "21.8984"
      }
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers'
    }
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    age: 36,
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: "-14.3990",
        lng: "-120.7677"
      }
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers'
    }
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    age: 59,
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: "24.6463",
        lng: "-168.8889"
      }
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies'
    }
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    age: 66,
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: "-38.2386",
        lng: "57.2232"
      }
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models'
    }
  }
];
```

Algo que podría ser útil tener a nuestra disposición es una manera de buscar a un usuario particular dentro del array recién definido. ¿Cómo hacemos esto si es que es un arreglo de objetos? Una forma es buscar en base a una propiedad que tengan todos los objetos, por ejemplo, el `id` de usuario podría ser un buen candidato inicial.

Imaginemos que tenemos información de otra fuente de datos que nos entrega sólo ids de usuarios, por lo tanto, es necesario cruzar la información para obtener el detalle de cada usuario. Tu tarea será crear una función que reciba el array de datos y un `id` en particular, y retorne el objeto asociado al usuario, o `undefined` si no existe un usuario con el `id` proporcionado.

```javascript
function findUserById(users, id) {
  // Write your solution here
  let userObj;
  users.forEach(user => {
    if (user.id === id) {
      userObj = user;
      return;
    }
  });
  return userObj;
}
```

Testea tu implementación utilizando diferentes ids:
```javascript
console.log(findUserById(users, 2));
console.log(findUserById(users, 11));
```

Bien. Ahora, haremos un refactor para conseguir una estructura que sea un poco más simple de consultar. Gracias a la naturaleza key/value de los objetos en JavaScript (si intentamos a acceder a una propiedad con un cierto key y existe, devuelve el valor asociado a esa key; de lo contrario, devuelve `undefined`), podríamos convertir el arreglo en un objeto cuyas keys sean los ids, y los values sean el objeto mismo.

Tu tarea será definir tal estructura dentro de la función, de tal forma que buscar un usuario en base a id se reduzca a acceder a una propiedad dentro de este nuevo objeto, con el `id` que recibe la función como parámetro.

Hint: puedes utilizar `Object.keys` e iterar para construir el objeto deseado, o bien, puedes utilizar el método `reduce` que tiene todo array. La recomendación es utilizar `reduce` para aprender su funcionamiento. Puedes [ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

Cuentas con el siguiente código inicial:

```javascript
function findUserByIdUsingKey(users, id) {
  let usersObj = {}

  // Write your solution here
  usersObj = users.reduce((accObj, user) => ({
    ...accObj,
    [user.id]: user,
  }), {});
  
  // This is the expected return. Try not to modify it
  return usersObj[id];
}

console.log(findUserById(users, 2));
console.log(findUserById(users, 11));
```

Lo último que haremos será extender la función para que no sólo busque por `id`, sino también por algún otro campo (ojalá único para cada usuario). En este caso tendremos dos criterios de búsqueda: `id` y `username`. Para lograr esto, cambiaremos también la función de la siguiente forma:

- Debe recibir el arreglo de usuarios y el criterio de búsqueda como parámetros (el nombre de la propiedad, no el valor, o sea, el string `'id'`, el string `'username'` u otro que queramos)
- Debe **retornar una función**, que nos servirá para hacer la búsqueda real. La función debe recibir un valor y retornar el objeto, si es que existe dentro del arreglo inicial, o `undefined` si no.

Recuerda que dentro de la función que debes retornar puedes utilizar variables definidas en el scope que la rodea. Este tipo de función se conoce como **closure**. Adicionalmente, el objeto que construimos en el refactor anterior nos servirá en este caso, pues en vez de utilizar únicamente `id` como criterio de búsqueda, debiésemos utilizar el campo que viene como parámetro en la función.

```javascript
function findByField(users, field) {
  // Write your solution here
  const usersByField = users.reduce((accObj, user) => ({
    ...accObj,
    [user[field]]: user,
  }), {});
  return value => usersByField[value];
}
```

Para probar tu implementación, llamaremos a la función con dos campos diferentes, guardaremos el retorno en sus respectivas variables, y así obtendremos dos nuevas funciones, una que busque por `id` y otra que busque por `username`:

```javascript
const findById = findByField(users, 'id');
const findByUsername = findByField(users, 'username');

console.log(findById(2));
console.log(findById(11));
console.log(findByUsername('Kamren'));
```

¡Listo! Ya eres capaz de crear funciones que retornen funciones, y de buscar un objeto dentro de un arreglo de objetos, según un criterio determinado. Este tipo de operaciones se realizan bastante y por eso es bueno que las hayas puesto en práctica en estos ejercicios.