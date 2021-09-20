// when use const, we can change the element, but we can't reassign
// const arr = [1, 2, 3];
// arr[2] = 66;
// arr = [1,2, 66]
// console.log(arr);

// why ES6 use block scope?
// 考点: 异步+var：以为里面是一个异步函数所以for 和 setTimeout是
// 分开执行的， 并且var is global, so setTimeout and for scope can share i
// for(var i = 0; i < 3;i++){
//   setTimeout(() =>{
//     console.log(i)
//   },1000+i)
// }
// solve： 1. closure + IIFE ES5
// for(var i = 0; i < 3;i++){

//    (function(i){
//      setTimeout(function(){
//       console.log(i)
//    },1000+i)
//   })(i)
// }
// solve:ES6: let i = 0
// for(let i = 0; i < 3;i++){
//     setTimeout(function(){
//      console.log(i)
//   })
// }
