// ES5写法：
// function Person(lastName, age) {
//   this.lastName = lastName;
//   this.age = age;
// }

// Person.prototype.showInfo = function () {
//   return this.lastName;
// };

// //child constructor
// function Child(hobby){
//   this.hobby = hobby
// }

// Child.prototype = new Person("zeng")
// let xiaozeng = new Child ("swim")

// console.log(xiaozeng)

// ES6写法：
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  showInfo(address) {
    this.address = address;
    return address;
  }
}

// inheritant class:
class Child extends Person {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
}

let person1 = new Child("Ella", 18, "1 St", "New York");
console.log(person1);
