Array.prototype.myFind = function (callback, thisArg) {
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let arr = [5, 6, 9, 20, 3, 8];
console.log(arr.myFind((el) => el > 6));
