const arr = [
  { obj: 1, name: "test1" },
  { obj: 2, name: "test2" },
  { obj: 3, name: "test3" },
  { obj: 3, name: "test3" },
  { obj: 4, name: "test4" },
  { obj: 4, name: "test4" },
  { obj: 5, name: "test5" }
];
function RemoveDuplicateObjArr(arr) {
  const newArr = [];

  const result = arr.filter((ele) => {
    // return newArr.push(ele.obj);
    const isDuplicate = newArr.includes(ele.obj);
    if (!isDuplicate) {
      newArr.push(ele.obj);
      // console.log("hello", newArr.push(ele.obj));
      return true;
    }
    return false;
  });
  return result;
}
console.log(RemoveDuplicateObjArr(arr));
