//计算数组中每个数字出现的次数：

// let arr = [1,2,3,4,3,1]

// let result = arr.reduce((acc,curr)=>{
//   acc[`${curr}`] = acc[`${curr}`]? acc[`${curr}`] : 0
//   acc[`${curr}`]++
//   return acc
// },{})
// console.log(result)
// 注意obj的key只能是string or symbol不能是数字，用`${}`转换为数字

// polyfill: reduce:

// Array.prototype.myReduce = function (cb, init) {
//   //this 指向constructor创造出来的 instance的this，就是arr
//   if (init === undefined && !this.length) throw new Error("error");
//   let acc = init;
//   let index = 0;
//   if (init === undefined) {
//     acc = this[0];
//     index = 1;
//   }
//   for (; index < this.length; index++) {
//     //如果不绑this会出现reference的指向问题，所以要强行帮一下this
//     acc = cb.call(this, acc, this[index]);
//   }
//   return acc;
// };

// let arr = [1, 2, 3, 4, 3, 1];

// let result = arr.myReduce((acc, curr) => {
//   acc[`${curr}`] = acc[`${curr}`] ? acc[`${curr}`] : 0;
//   acc[`${curr}`]++;
//   return acc;
// }, {});
// console.log(result);
