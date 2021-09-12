/**
 *
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.showInfo = function () {
  return this.age;
};

function Child(city) {
  this.city = city;
}

Child.prototype = new Person("zhang", 18);
let xiaozhang = new Child("New York");

console.log(xiaozhang);
// prototype chain: child-->person-->object
console.log(xiaozhang.__proto__.__proto__.__proto__);
