var arr1 = [
  { uuid: 2, name: "lang" },
  { uuid: 3, name: "age" },
  { uuid: 4, name: "he" },
  { uuid: 5, name: "wes" }
];
var arr2 = [
  { uuid: 1, role: "contributor" },
  { uuid: 2, role: "javascript" },
  { uuid: 3, role: "contributor" },
  { uuid: 4, role: "javascript" }
];

function test(first, second) {
  const len = Math.max(first.length, second.length);
  const result = [];
  const map1 = new Map();
  const map2 = new Map();
  let newLength = 0;

  for (let i = 0; i < len; i++) {
    map1.set(first[i].uuid, first[i].name);
    map2.set(second[i].uuid, second[i].role);
  }

  map1.forEach((val, key) => {
    if (map2.has(key)) {
      newLength += 1;
    } else {
      newLength += 2;
    }
  });

  let cur = {};
  for (let i = 1; i <= newLength; i++) {
    if (map1.has(i) && map2.has(i)) {
      // console.log(map1)
      cur.uuid = i;
      cur.name = map1.get(i);
      cur.role = map2.get(i);
    } else if (map1.has(i) && !map2.has(i)) {
      cur.uuid = i;
      cur.name = map1.get(i);
      cur.role = null;
    } else if (!map1.has(i) && map2.has(i)) {
      cur.uuid = i;
      cur.name = null;
      cur.role = map2.get(i);
    }
    result.push(cur);
    //   console.log(cur)
  }
  console.log(result);
}
test(arr1, arr2);
