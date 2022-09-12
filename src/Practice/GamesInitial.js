// The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
//input "George Raymond Richard Martin", out put "GRRM"
const input = "George Raymond Richard Martin";

function FamesIntial(newInput) {
  let inputArr = newInput.split(" ");
  let initialArr = inputArr.map((ele) => {
    return ele.charAt(0);
  });

  let result = initialArr.join("");

  return result;
}

console.log(FamesIntial(input));
