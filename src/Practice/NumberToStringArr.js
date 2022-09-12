// Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
  console.log(arr);
  return arr.join("");
}

let result = stringConcat([1, 2, 3]);
console.log(result); // "123"
console.log(typeof result);
