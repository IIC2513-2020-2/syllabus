# Scope

> [Código en RunKit](https://runkit.com/sivicencio/5f406118788c2f00132d4ccb)

Comenzaremos viendo el uso del scope en JavaScript. Vimos en clases que existen dos tipos de scopes: global y local. Para las siguientes líneas de código, encontrarás algunas que están comentadas. **Intenta llegar al resultado primero**, y luego descoméntalas para ver si estabas en lo correcto.

## Scope global

Cuando comenzamos a escribir un programa en JavaScript, estamos en el scope global. Todas las variables definidas aquí serán accesibles en cualquier lugar de nuestro programa (o sea, si defino bloques o funciones, y funciones dentro de funciones). Por esta razón se conocen como **variables globales**.

```javascript
var petName = 'Milo';

function introduceMyPet() {
  console.log(petName);
}

// console.log(petName);
// introduceMyPet();
```

## Scope local

Ciertos bloques de código generan un nuevo scope, y aquí podemos encontrar dos grandes tipos: scope de función y scope de bloque

### Scope de función

Toda función siempre genera un nuevo scope. Esto quiere decir que las variables definidas dentro de una función sólo podrán ser accedidas dentro de esta función. Fuera de ella no existen.

```javascript
function introduceMyPetFn() {
  var petName = 'Milo';
  console.log(petName);
}

// introduceMyPet();
// console.log(petName);
```

El llamado final arroja un error, pues `petName` no es visible fuera de la función `introduceMyPetFn`.

Ahora hagamos una pequeña modificación. Definamos la variable `petName` antes de la función.

```javascript
var petName = 'Salem';

function introduceMyPetReloaded() {
  var petName = 'Milo';
  console.log(petName);
}

// introduceMyPetReloaded();
// console.log(petName);
```

Lo anterior nos permite tener variables con el mismo nombre, sin que existan colisiones (sobreescribir una variable de forma no intencional).

### Scope de bloque

¿Qué pasa si aplicamos lo mismo a otros tipos de bloques diferentes a funciones? Probemos con un bloque `if`.

```javascript
if (true) {
  var name = 'John';
  // console.log('Hi, my name is', name);
}

// console.log(name);
```

A pesar de que la variable `name` fue definida dentro de un bloque `if`, es posible accederla fuera de este. Esto sucede porque variables declaradas con el keyword `var` **no tienen scope de bloque**, sino que sólo de función. Lo que sucede por debajo es que la variable `name` es "hoisted" o levantada hacia el comienzo. Es equivalente a este código:

```javascript
var name;
if (true) {
  name = 'John';
  // console.log('Hi, my name is', name);
}

// console.log(name);
```

Incluso no es necesario que la condición del bloque `if` evalúe a `true`. La variable es hoisted de igual manera:
```javascript
if (false) {
  var name = 'John';
  console.log('Hi, my name is', name);
}

// console.log(name);
```

El código anterior devuelve `undefined` precisamente porque la variable fue hoisted. Escribir `var name;` es equivalente a escribir `var name = undefined;`.

Dicho sea de paso, si no utilizamos el keyword `var`, y asignamos directamente la variable a un nombre (en otras palabras, sin haberla declarado), entonces la variable corresponde a una global (siempre que la asignación sea ejecutada).

```javascript
function someFn() {
  var anotherFn = function() {
    if (true) {
      anotherName = 'Sharon';
    }
  }
  anotherFn();
}

someFn();
// console.log(anotherName);
```

### Uso de `let` y `const`

Hasta ahora hemos visto el uso del scope en variables definidas con el keyword `var`. ¿Qué pasa si utilizamos `let` y `const`?

```javascript
if (true) {
  let firstName = 'John';
  const surName = 'Connor';
  console.log('Hi, my name is', firstName, surName);
}

// console.log(firstName);
// console.log(surName);
```

Oops, `"ReferenceError: firstName is not defined"`. Puedes alternar los `console.log` anteriores para ver que con `surName` pasa lo mismo. Esto es porque las variables definidas con estos keywords **sí tienen scope de bloque**, al igual que scope de función.

## Ejemplos más complejos

Por ahora los ejemplos han servido para ilustrar la visibilidad de las variables, pero tal vez no han agregado mucha complejidad. Veamos algunos casos en que el uso del scope puede comenzar a notarse más.

```javascript
var countLimit = 1000;

function countToOneThousand() {
  for (let i = 0; i < countLimit; i += 1) {
    if (i > 10) {
      var countLimit = 15;
    }
    console.log(i);
  }
}

// countToOneThousand();
```

¿No vemos nada? Tal vez esperabas que la función contara de `0` a `14`. Recuerda que `var` tiene scope de función solamente, entonces en este caso la declaración dentro del bloque `if` fue hoisted al comienzo de la función (como si hubiésemos escrito `var countLimit;` que es `undefined`), y entonces al evaluar condición para entrar al `for`, tenemos `0 < undefined`, que evalúa a `false`. Si utilizamos `let`, en cambio:

```javascript
let countLimitAgain = 1000;

function countToOneThousandAgain() {
  for (let i = 0; i < countLimitAgain; i += 1) {
    if (i > 10) {
      countLimitAgain = 15;
    }
    console.log(i);
  }
}

// countToOneThousandAgain();
```

Ahora sí la función cuenta de `0` a `14`.

Por último, veamos un ejemplo que tenga mayor uso de `let` y `const`.

```javascript
function getApprovedPeople() {
  const results = [5.6, 3.9, 4.0, 6.1, 3.5, 6.6];
  var approvedPeople;
  const filter = function(results) {
    const approvedPeople = [];
    results.forEach(function(result) {
      if (result >= 4.0) {
        approved = result;
        approvedPeople.push(approved);
      }
    })
    return approvedPeople;
  }
  approvedPeople = filter(results);
  return approvedPeople;
}

const results = getApprovedPeople();
// console.log(results);
// console.log(approved);
```

El ejemplo anterior ejecuta una función, que toma una lista de notas de un curso y filtra a los que aprobaron. ¿Ves el uso de variables como `results` y `approvedPeople` en diferentes scopes? Como son distintos bloques (funciones en este caso), puede utilizarse el mismo nombre sin que haya colisiones.

¿Y qué pasó con la variable `approved`? ¿Por qué existe al final si fue definida en un lugar bastante específico y "profundo"?

## Recomendación final

**Siempre utilizar `let` o `const`**.
