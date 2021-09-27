Array.prototype.myReverse = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    [this[left], this[right]] = [this[right], this[left]];
    left++;
    right--;
  }

  return this;
};

let arr = [1, 2, 3];
console.log(arr.myReverse());
