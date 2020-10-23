function Person(name, age, city, isStudent = false) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.isStudent = isStudent;
}

Person.prototype.talk = function() {
  console.log('My name is ' + this.name + '. I live in ' + this.city);
};

const person1 = new Person('John', 26, 'New York');
const person2 = new Person('Helen', 32, 'Berlin', true);

console.log(person1.__proto__);
console.log(Person.prototype);

const person3 = Object.create(person1);

console.log(person3.__proto__ === person1);

function Teacher(name, age, city, subject) {
  Person.call(this, name, age, city, false);
  this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.talk = function() {
  console.log('My name is ' + this.name + '. I teach the ' + this.subject + ' subject');
};

const teacher1 = new Teacher('Sebastián Vicencio', 32, 'Santiago', 'IIC2513');
const teacher2 = new Teacher('Sebastián Vicencio', 32, 'Santiago', 'IIC2513');

console.log(teacher1.__proto__ === teacher2.__proto__);

console.log(Teacher.prototype.constructor);
console.log(teacher1.talk());
console.log(teacher1);

class ClassyPerson {
  constructor(name, age, city, isStudent = false) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.isStudent = isStudent;
  }

  talk() {
    console.log('My name is ' + this.name + '. I live in ' + this.city);
  }
}

const classyPerson1 = new ClassyPerson('John', 26, 'New York');

console.log(classyPerson1);
console.log(classyPerson1.constructor);

class ClassyTeacher extends ClassyPerson {
  constructor(name, age, city, subject) {
    super(name, age, city, false);
    this.subject = subject;
  }

  talk() {
    console.log('My name is ' + this.name + '. I teach the ' + this.subject + ' subject');
  }
}

const classyTeacher1 = new ClassyTeacher('Sebastián Vicencio', 32, 'Santiago', 'IIC2513');
console.log(classyTeacher1);