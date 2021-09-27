Array.prototype.myFlat = function (depth) {
  let flatten = function (arr, depth) {
    if (depth < 1) {
      return arr.slice();
    }
    return arr.reduce((acc, curr) => {
      return acc.concat(Array.isArray(curr) ? flatten(curr, depth - 1) : curr);
    }, []);
  };
  return flatten(this, depth);
};

let arr = [1, 2, 3, [[4, 5]]];
console.log(arr.myFlat(1));
