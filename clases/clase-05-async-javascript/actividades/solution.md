# Solución Actividad Async JavaScript

> [Código en RunKit](https://runkit.com/sivicencio/5f721976a41546001bb26df7)

## Callbacks

Vamos a trabajar en primer lugar con una serie de funciones que retornan **información sobre un curso de forma asíncrona**, tomando como input la sigla asociada. Cada una de estas funciones recibe además una función callback, que se ejecuta una vez que la información respectiva del curso es obtenida, recibiendo como parámetro el valor en cada caso. Las funciones son:

- `getCourseNameWithCallback(id, callback)`: callback recibe parámetro correspondiente al nombre del curso
- `getCourseTeacherWithCallback(id, callback)`: callback recibe parámetro correspondiente al profesor del curso
- `getCourseStudentsWithCallback(id, callback)`: callback recibe parámetro correspondiente a la cantidad de personas inscritas en el curso

Para pruebas, tendrás disponible 3 siglas por las cuales podrás consultar: `IIC2143`, `IIC2413` e `IIC2513`. Ten en cuenta que cada función **podría demorar hasta 5 segundos** en ejecutar el callback. Por ejemplo, si queremos obtener el nombre del curso con sigla `IIC2513` e imprimirlo en consola, podemos ejecutar lo siguiente:

```javascript
getCourseNameWithCallback('IIC2513', (name) => console.log('With callback: ' + name));
```

Tu tarea será implementar la función `getCourseInfoWithCallback`, que recibe una sigla como parámetro, e imprime en consola un objeto con la siguiente estructura:

```javascript
{
  id: 'IIC2513',
  name: 'Tecnologías y Aplicaciones Web',
  students: 83,
  teacher: 'Sebastián Vicencio'
}
```

La función tiene una base ya implementada, por lo que tu trabajo será completar lo faltante:

```javascript
function getCourseInfoWithCallback(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  getCourseNameWithCallback(id, (name) => {
    courseInfo.name = name;
    getCourseTeacherWithCallback(id, (teacher) => {
      courseInfo.teacher = teacher;
      getCourseStudentsWithCallback(id, (students) => {
        courseInfo.students = students;
        console.log(courseInfo);
      });
    });
  });
}
```

Puedes probar tu función con la siguiente línea de código. Intenta cambiar la sigla por los otros valores para corroborar que se imprime el objeto correctamente:

```javascript
// Descomenta la siguiente línea
getCourseInfoWithCallback('IIC2513');
```

Ahora que tu función ya está implementada, descomenta las siguientes líneas y ve qué sucede:

```javascript
console.log('First');
getCourseInfoWithCallback('IIC2413');
console.log('Last');
```

¿Por qué vemos en consola el output en un determinado orden? ¿Recuerdas el *evento loop* que vimos en clases? Si no entiendes por qué sucede, es recomendable que revises lo visto en clases e investigues más por tu cuenta si es necesario. Es gracias al *event loop* que es posible ejecutar código de forma asíncrona en JavaScript, y es algo que estaremos utilizando extensamente durante el curso.

## Promesas

En clases vimos que existe una forma "moderna" de tratar código asíncrono en JavaScript, mediante el uso de promesas. Las promesas son objetos que representan un estado intermedio de una operación que se resolverá eventualmente. Es decir, en algún momento obtendremos el valor al cual la promesa hace referencia, pero el tiempo que pase hasta que eso suceda es incierto. Por lo tanto, debemos darle un tratamiento especial.

Contamos con una versión implementada con promesas de las funciones que vimos anteriormente, para obtener información sobre un curso de forma asíncrona. En este caso, cada una de estas funciones recibe la sigla de un curso, y retorna una promesa del valor correspondiente. Las funciones son:

- `getCourseNameWithPromise(id)`: retorna una promesa que se resolverá con el nombre del curso, dada una sigla válida
- `getCourseTeacherWithPromise(id)`: retorna una promesa que se resolverá con el profesor del curso, dada una sigla válida
- `getCourseStudentsWithPromise(id)`: retorna una promesa que se resolverá la cantidad de personas inscritas en el curso, dada una sigla válida

Para obtener, por ejemplo, el nombre del curso, podríamos ejecutar la siguiente línea:
```javascript
getCourseNameWithPromise('IIC2513').then((name) => console.log('With promise: ' + name));
```

Tu tarea será implementar una función similar a la del caso de los callbacks, pero ahora utilizando la versión "promisificada" de las funciones. Cuentas con el siguiente código inicial, el cual debes completar:

```javascript
function getCourseInfoWithPromise(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  getCourseNameWithPromise(id)
    .then(name => {
      courseInfo.name = name;
      return getCourseTeacherWithPromise(id);
    })
    .then(teacher => {
      courseInfo.teacher = teacher;
      return getCourseStudentsWithPromise(id);
    })
    .then(students => {
      courseInfo.students = students;
      console.log(courseInfo);
    })
}

// Descomenta la siguiente línea para probar tu solución
getCourseInfoWithPromise('IIC2513');
```

Nuevamente, ahora que tu función ya está implementada, descomenta las siguientes líneas y ve qué sucede:

```javascript
console.log('First');
getCourseInfoWithPromise('IIC2413');
console.log('Last');
```

Las promesas son código asíncrono como cualquier otro. Por lo tanto, el *event loop* entra en acción de la misma forma.

### Manejando errores en promesas

¿Qué pasa si intentas ejecutar la función anterior con una sigla que no sea cualquiera de las 3 ya mencionadas? Probablemente veas un error que incluya algo como `UnhandledPromiseRejectionWarning`. Tal como el nombre sugiere, la promesa fue "rejected", sin embargo, ese rechazo no fue manejado.

Además del método `then` de toda promesa, también existe el método `catch`, que nos permite precisamente manejar estos casos de promesas rechazadas. Su uso es prácticamente igual que `then`, y el valor que recibe el callback que uno le proporciona suele ser un mensaje (string) con la razón del rechazo.

Implementa nuevamente la función, agregándole al final de la cadena de `then`s, un `catch` para imprimir en consola la razón del error.

```javascript
function getCourseInfoWithPromiseError(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  getCourseNameWithPromise(id)
    .then(name => {
      courseInfo.name = name;
      return getCourseTeacherWithPromise(id);
    })
    .then(teacher => {
      courseInfo.teacher = teacher;
      return getCourseStudentsWithPromise(id);
    })
    .then(students => {
      courseInfo.students = students;
      console.log(courseInfo);
    })
    .catch(console.log)
}

// Descomenta la siguiente línea para probar tu solución
getCourseInfoWithPromiseError('ICS3213');
```

### Manejando múltiples promesas juntas e independientes entre sí

Cada una de las funciones ya utilizadas no depende realmente una de otra (el resultado de una no es requisito para ejecutar la siguiente), por lo que no es realmente necesario encadenarlas una luego de la otra. Existe un método llamado `Promise.all`, que recibe un array de promesas, y retorna una promesa que se resolverá con un array de los valores asociados a cada una de las promesas iniciales ya resueltas.

En el siguiente ejercicio, tendrás que re-implementar la función que imprime información de un curso, esta vez utilizando `Promise.all`. En esta parte tendrás que investigar su uso por tu cuenta. [Puedes ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)

```javascript
function getCourseInfoWithPromiseAll(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  const coursePromises = [
    getCourseNameWithPromise(id),
    getCourseTeacherWithPromise(id),
    getCourseStudentsWithPromise(id),
  ];
  Promise.all(coursePromises)
   .then(([name, teacher, students]) => {
     courseInfo.name = name;
     courseInfo.teacher = teacher;
     courseInfo.students = students;
     console.log(courseInfo);
   });
}

// Descomenta la siguiente línea para probar tu solución
getCourseInfoWithPromiseAll('IIC2143');
```


## `async/await`

La última feature asociada a código asíncrono que ha sido lanzada es `async/await`. Son dos nuevos keywords que nos permiten manejar código asíncrono con las "facilidades" del código síncrono. Funcionan de la siguiente manera:
- Toda función que sea marcada con el keywork `async` (antes de la definición de esta), retornará una promesa que se resolverá con el valor que retorna la función
- Podemos anteponer el keyword `await` a una promesa, y la ejecución se "detendrá" a esperar la resolución de la promesa. Luego de esto, se reanudará el flujo normal

Vamos a utilizar las mismas funciones ya definidas, que retornan promesas de la información de un curso. El uso de `async/await` no requiere cambiar las promesas, sino que nos sirven para manejar las promesas de una forma diferente. Sin embargo, sí requieren que el uso de `await` esté dentro de una función marcada como `async`.

Por ejemplo, si queremos obtener el nombre del curso, podemos ejecutar lo siguiente:

```javascript
async function executeAsync() {
  const courseName = await getCourseNameWithPromise('IIC2143');
  console.log('With await: ' + courseName);
}
executeAsync();
```

Tu tarea será implementar una función similar a la anterior, que recibe un `id` con la sigla del curso, pero esta vez es una función marcada como `async`, y que debe retornar el objeto con la información del curso (en vez de imprimirlo en consola). Vamos a imprimir el valor finalmente, pero utilizando el valor retornado por una promesa.

```javascript
async function getCourseInfoAsync(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  const coursePromises = [
    getCourseNameWithPromise(id),
    getCourseTeacherWithPromise(id),
    getCourseStudentsWithPromise(id),
  ];
  const [name, teacher, students] = await Promise.all(coursePromises);
  courseInfo.name = name;
  courseInfo.teacher = teacher;
  courseInfo.students = students;

  // The object is returned at the end
  return courseInfo;
}
getCourseInfoAsync('IIC2513').then(courseInfo => console.log(courseInfo));
```

Como última parte del ejercicio, también es posible manejar errores con `async/await`, utilizando los conocidos `try/catch`, tal como si fuese código síncrono.

Tu tarea será implementar la función "envolviendo" las llamadas que usen `await` dentro de un bloque `try`, y luego utilizar `catch` en caso de que ocurra un error. Dentro del bloque `catch`, puedes simplemente imprimir en consola el mensaje de error. Si necesitas información sobre los bloques `try/catch`, [puedes ver la documentación aquí](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

```javascript
async function getCourseInfoAsyncWithError(id) {
  const courseInfo = {};

  // Write your solution here
  courseInfo.id = id;
  const coursePromises = [
    getCourseNameWithPromise(id),
    getCourseTeacherWithPromise(id),
    getCourseStudentsWithPromise(id),
  ];
  try {
    const [name, teacher, students] = await Promise.all(coursePromises);
    courseInfo.name = name;
    courseInfo.teacher = teacher;
    courseInfo.students = students;
  } catch (error) {
    console.log(`Async error: ${error}`);
  }    

  return courseInfo;
}
getCourseInfoAsyncWithError('ICS3213');
```

## Resumen de temas cubiertos

- Callbacks
- Promesas
- Manejo de errores con promesas
- `Promise.all`
- `async/await`
- Manejo de errores con `async/await`
