// callback function is a function pass an arguement to another function

// ex1:
function CountNum(callBack, arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(callBack(arr[i]));
  }
  return output;
}

function doubleNum(num) {
  return num * 2;
}

console.log(CountNum(doubleNum, [1, 2, 3]));
