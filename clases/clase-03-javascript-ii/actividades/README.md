# Actividad Introducción a JavaScript Parte II

> [Código en RunKit](https://runkit.com/sivicencio/5f4060619274cb001351aaa5)

## Scopes

Vamos a comenzar con unos ejemplos para entender el scope en JavaScript. [Podrás encontrar el detalle aquí](scope.md). Intenta no saltarte esta parte pues es importante entender el alcance de las variables que definamos en nuestros programas, antes de comenzar a agregar complejidad.

...

...

...

...

...

...

...

...

...

...

...

...

Ok, ¿terminaste? Perfecto, podemos continuar.

> **Disclaimer**: los siguientes ejercicios involucran investigación de tu parte, pues tendrás que usar métodos que no vimos explícitamente en clases. Si te surgen dudas (y ojalá sea sí) puedes [utilizar las issues](../../../../../issues), o también podemos verlo en clases 😉

## Arrays

Para los siguientes ejercicios utilizaremos el siguiente arreglo (derivado de [aquí](https://jsonplaceholder.typicode.com/users))

```javascript
const names = [
  'Leanne Graham',
  'Ervin Howell',
  'Clementine Bauch',
  'Patricia Lebsack',
  'Chelsey Dietrich',
  'Mrs. Dennis Schulist',
  'Kurtis Weissnat',
  'Nicholas Runolfsdottir V',
  'Glenna Reichert',
  'Clementina DuBuque',
];
```

### Recorriendo un arreglo con `for`

En primer lugar, debes recorrer el arreglo con `for` e imprimir cada uno de sus elementos con `console.log`. Recuerda que todo arreglo posee la propiedad `length`.

```javascript
// Arreglos: recorrer arreglo con for
// Your code here
```

### Recorriendo arreglo con `forEach`

Ahora implementa lo mismo, pero utilizando el método `forEach` de un arreglo. Puedes [ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) si tienes dudas.

```javascript
// Arreglos: recorrer arreglo con forEach
// Your code here
```

### Una lista de usuarios

Para el resto de los ejercicios, utilizaremos la siguiente lista de usuarios, implementada como un arreglo de objetos y que se encuentra asociada a la variable `users` ([fuente aquí](https://jsonplaceholder.typicode.com/users))

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

### Transformando el arreglo con `map`

Lo que debes hacer ahora es convertir esta lista de usuarios en una lista de strings, donde cada elemento tenga el siguiente formato:

```javascript
":name (:email) - Work: :companyName"
```

Por ejemplo, para el primer elemento del arreglo, debiese ser:

```javascript
'Leanne Graham (Sincere@april.biz) - Work: Romaguera-Crona'
```

Para esto debes utilizar el método `map` de un arreglo. Puedes [ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) si tienes dudas.

```javascript
// Arreglos: transformar lista de usuarios
// Your code here
```

### Filtrando resultados con `filter`

Ahora vamos a filtrar la lista de usuarios basado en el siguiente criterio: edad. En este caso nos interesa obtener sólo los usuarios que son menores a 30 años.

Para realizar lo anterior debes utilizar el método `filter` de un arreglo. Puedes [ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) si tienes dudas.

```javascript
// Arreglos: Filtrar lista de usuarios
// Your code here
```

## Objetos

### `Object.keys`

Ya comenzamos a trabajar con objetos en los ejercicios anteriores. Ahora vamos a tomar un objeto específico y le haremos algunas modificaciones.

En primer lugar, existe el método `Object.keys()`, que recibe un objeto, y nos devuelve una lista de las keys o property names. Pruébalo a continuación:

```javascript
const user = users[0];
// Descomenta la siguiente línea
// Object.keys(user)
```

Una práctica bastante utilizada es tomar las keys para iterar sobre cada valor de un objeto. En el siguiente ejercicio deberás recorrer las keys del objeto para tomar sólo los valores y guardarlos en un arreglo. Algo del código ya está implementado, pero debes completar lo solicitado.

```javascript
const userValues = [];
Object.keys(user).forEach((userKey) => {
  // Write your code here
});
```

Bien, ahora para que no tengas que hacer siempre eso, existe un método similar a `Object.keys`, pero para obtener los values: `Object.values(user)`.

### Todo list

Vamos construir un pequeño objeto que represente una todo list. Esta lista tendrá la característica de que estará ordenada por prioridades, es decir, el primer elemento será el primero que se "tomará" o se "hará", y luego se seguirá hasta que la lista quede vacía. El objeto debe tener las siguientes propiedades:

- `todoList`: arreglo de strings que contendrá la lista misma de las tareas. Puedes inicializarlo como un arreglo vacío o con datos si gustas
- `remember`: agrega un elemento al final de la lista
- `prioritize`: agrega un elemento al principio de la lista
- `getTask`: remueve el primer elemento y lo retorna
- `show`: imprime en consola la lista de tareas para ver cuántas faltan por hacer

```javascript
const todoListObj = {
  // Write your code here
}
```

Puedes probar los distintos métodos para ver si funciona tu implementación. Por ejemplo, llamar un par de veces a `remember`, algunas otras a `prioritize`, a `show` para ver el estado de tu lista, luego `getTask`, y luego nuevamente a `show` para ver si eliminió la tarea tomada recientemente.

La lista anterior sólo le serviría a una persona. ¿Y si queremos que varias personas tengan su propia lista? Necesitamos una forma de generar objetos que tengan la misma estructura. Para eso precisamente podemos utilizar los constructores (o funciones constructoras). En clases vimos que son funciones normales, pero que luego se pueden llamar con el keyword `new` para crear una instancia de un objeto. Completa el siguiente código para tener un constructor para el todo list.

```javascript
function TodoList(todoList = []) {

}
```

Si te fijas, le estamos dando un arreglo vacío como argumento predeterminado. Esto significa que podríamos crear objetos con tareas ya asignadas, o bien, si no hacemos nada, parte con una lista vacía.

Finalmente, prueba creando dos listas para ver que se comportan de la manera esperada:

```javascript
// const oneList = new TodoList();
// const anotherList = new TodoList();
```

## Aplicando todo lo anterior

> Un problema realista

*Este ejercicio será subido dentro de los próximos días*