Array.prototype.myPush = function () {
  for (let i = 0; i < arguments.length; i++) {
    this[this.length] = arguments[i];
  }

  return this.length;
};

let arr = [1, 2];
let arr1 = arr.myPush(3, 4);
// console.log(arr)
