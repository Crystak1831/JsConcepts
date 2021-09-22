// Map demo:
let myMap = new Map();
myMap.set({}, "hello");
myMap.get({}); //udefined 取不出值，因为用obj的话,reference不一样
// console.log(myMap.get({}))

//改正：定义一个obj，是的{}指向obj
let myMap1 = new Map();
let objKey = {};
//function也是一样的：
let funcKey = function () {};
myMap1.set(objKey, "Hello:objKey");
myMap1.set(funcKey, "Hello:Funckey");
// console.log(myMap1.get(objKey))
// console.log(myMap1.get(funcKey))

// for ...of: in an array
// for(let item of arr){

// }

//for ...in:object
// for(let key in obj ){

// }

//  loop a map:只能用for of
//loop key:
for (let key of myMap1.keys()) {
  console.log(key, "key");
}
//loop value:
for (let value of myMap1.values()) {
  console.log(value, "values");
}

//loop entries
for (let [key, value] of myMap1.entries()) {
  console.log(key, value, "pair");
}
