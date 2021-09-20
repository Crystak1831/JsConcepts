// 左右两边结构必须一样
// 右边必须是个东西
//声明和赋值不能分开

// ES5：
// let arr1 = [1,2,3]

// let a = arr1[0]
// let b = arr1[1]
// let c = arr1[2]
// console.log(a,b,c)

// es6:
// let arr2 = [1,2,3]
// let [e,f,j] = arr2
// console.log(e,f,j)

// ex2:
let obj = {
  a: 1,
  b: 2,
  c: 3
};
// 左右两边结构必须一样
let { a, b, c } = obj;
console.log(a, b, c);

// 右边是一个东西

// ex3:
let arrInfo = [{ name: "ming", age: 20 }, [1, 2, 3], "es6", 1];

let [obj2, arr, str, number] = arrInfo;
console.log([obj2, arr, str, number]);
