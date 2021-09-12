// JS prototype,面向对象----------------------

// 1.什么是构造器constructor:本质是function
// function Person
function Person(lastName, age) {
  this.lastName = lastName;
  this.age = age;
  // 目前我们的方法是在构造函数内部创建的，
  // 也就是没执行一次showInfo就会创建一个新的showInfo方法
  // 执行10000次就会创建10000个新的方法
  // 这是完全没有必要，完全可以使所有的对象共享同一个方法
  this.showInfo = function () {
    // let obj = {};
    // obj.name = this.lastName;
    // return obj;
    return this.age;
  };
}
/**
 * 原型(object container)
 *  我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
 *  if the function is normal function, the prototype doesn't
 * play any part in this function, if we use the constructor function to
 * call it, the object it create has a hiden property and point to the prototype object, we can use
 * __proto__ to get that property.
 *
 * prototype is like a public area， all the instence can access to this prototype
 *
 * when we access to the property of method of the object, first, it search on thier own object, if it has it's own method or perty, we can use them directly
 * if the new  object don't have it's own method or perpoty, it will go to prototype to search that method or property
 */
Person.prototype.showInfo = function () {
  return this.age;
};

// Person.prototype.address = "Mealow St";

//c创建一个person实例
let zeng = new Person("zeng", 18, "Amy");
let zhang = new Person("zhang", 30, "Jenny", "New York");
// __proto__ is an internal perproty of the object, it point to its prototype
// console.log(zeng.__proto__);

// hasOwnProperty:
// set the specified property showCity to zhang
zhang.showCity = function () {
  return this.city;
};

console.log(zhang.hasOwnProperty("showCity"));
console.log(zeng.hasOwnProperty("showCity"));

// showInfo是否相等,在constructor内的showInfo不等
// console.log(zeng.showInfo() == zhang.showInfo());

// console.log(zeng.showInfo(), zhang.showInfo());

console.log(zeng, zhang);
