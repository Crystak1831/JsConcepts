// Array.prototype.myFilter = function (cb, context) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb.call(context, this[i], i)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// let arr = [1, 2, 5, 6, 8, 9];
// let res = arr.myFilter((item) => {
//   return item > 3;
// });
// console.log(res);
