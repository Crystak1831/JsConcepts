// reduce
// accu第一个相当于中间结果，item：从第二个数，index：从1开始

// const arr = [1, 5, 10, 20];

// const result = arr.reduce((accu, item, index) => {
//   return accu + item;
// });

// console.log(result);
// 第一遍： accu = 1,item = 5,index = 1
// 第二遍：accu = 1+5 = 6, item =10,index=2
// 第三遍：accu = 6+10,item = 20, index =3
// 4:     accu =36,none,none

// flatten an array
// let flattened = [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ];
// const result2 = flattened.reduce((preV, curV, index) => {
//   return preV.concat(curV);
// }, []);
// console.log(result2);
// 第一遍： preV=[1,2] curV = [3,4] index = 1
//   2:   prev = [1,2,3,4] curV = [5,6] index =2
//   3:   prev = [1,2,3,4,5,6],none,none

// map: 	一个对一个，生成新的数组，不能直接修改原数组
// ex:get the full name of person
const persons = [
  { firstname: "Malcom", lastname: "Reynolds" },
  { firstname: "Kaylee", lastname: "Frye" },
  { firstname: "Jayne", lastname: "Cobb" }
];

let fullName = persons.map((item) => {
  return [item.firstname, item.lastname].join(" ");
});
console.log(fullName);
