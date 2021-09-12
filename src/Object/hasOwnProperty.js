// is a method to check the obeject specified property as its own property . This method returns a boolean.

function Person(lastName, age) {
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.showInfo = function () {
  return this.age;
};

let zeng = new Person("zeng", 18, "Amy");
let zhang = new Person("zhang", 30, "Jenny");

// set the specified property showCity to zhang
zhang.showCity = function () {
  return this.city;
};

console.log(zhang.hasOwnProperty("showCity"));
console.log(zeng.hasOwnProperty("showCity"));
