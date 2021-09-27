Array.prototype.mySlice = function (begin, end) {
  let arr = [];

  //not define end:
  end = typeof end !== "undefined" ? end : this.length;

  let start = begin || 0;
  start = start > 0 ? start : Math.max(0, this.length + start);

  let upTo = typeof end === "number" ? Math.min(end, this.length) : this.length;

  let size = upTo - start;
  if (size > 0) {
    for (let i = 0; i < size.length; i++) {
      arr[i] = this[start + 1];
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 5));
