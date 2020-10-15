console.log('---------- Rest parameters ----------');

function getRestParams(firstArg, ...rest) {
  console.log(rest);
}

getRestParams(1, 'test', true, 20);

const numbers = [1, 4, 5, 2];

console.log(Math.max(...numbers));

// Create new arrays
const clonedArray = [...numbers];

const newArray = [...numbers, 10, 13];

console.log(newArray);

console.log('----------- Destructuring -----------');

const person = { name: 'Student', age: 22 };

const [firstNumber, secondNumber, ...restNumbers] = numbers;
const { name, age } = person;

console.log('Destructured array:', firstNumber, secondNumber, restNumbers);
console.log('Destructured object:', name, age);


console.log('------------- Prototype -------------');

const emptyArray = [];

console.log('Array length', emptyArray.length);
console.log('Array map', emptyArray.map);
console.log('Array reduce', emptyArray.reduce);

function Person(name, age, city, isStudent = false) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.isStudent = isStudent;
  this.talk = function() {
    console.log('My name is ' + this.name + '. I live in ' + this.city);
  }
}

const person1 = new Person('John', 26, 'New York');
const person2 = new Person('Helen', 32, 'Berlin', true);

console.log(person1);
console.log(person2);

console.log('person1.__proto__ ->', person1.__proto__);
console.log('Object.getPrototypeOf(person1) ->', Object.getPrototypeOf(person1));

console.log('Object.getPrototypeOf(person1) === Person.prototype ->', Object.getPrototypeOf(person1) === Person.prototype);
console.log('Object.getPrototypeOf(person2) === Person.prototype ->', Object.getPrototypeOf(person2) === Person.prototype);

Person.prototype.introduce = function() {
  console.log(`I am ${this.isStudent ? '' : 'not '}a student`)
}

person1.introduce();
person2.introduce();
