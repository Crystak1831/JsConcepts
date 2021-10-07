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

//     function test(first,second){
//         const len = Math.max(first.length,second.length)
//         const result = new Array()
//         const map1 = new Map()
//         const map2 = new Map()
//         let length=0

//         for(let i =0;i < len;i++){
//             map1.set(first[i].uuid,first[i].name)
//             map2.set(second[i].uuid,second[i].role)

//         }

//         map1.forEach((val,key)=>{
//             if(map2.has(key)){
//                length +=1

//             }else{
//                length +=2
//             }
//         })

//         for(let i =1; i<=length;i++){
//             let cur = {}
//             if(map1.has(i) && map2.has(i)){
//                 cur.uuid = i
//                 cur.name = map1.get(i)
//                 cur.role = map2.get(i)
//             }else if(map1.has(i) && !map2.has(i)){
//                 cur.uuid = i
//                 cur.name = map1.get(i)
//                 cur.role = null
//             }else if(!map1.has(i) && map2.has(i)){
//                 cur.uuid = i
//                 cur.name = null
//                 cur.role = map2.get(i)
//             }
//             result.push(cur)
//             // console.log(cur)
//         }
//         console.log(result)
//     }
//   test(arr1,arr2)

function Combine(arr1, arr2) {
  let result = arr1.concat(arr2);
  result.sort((a, b) => a.uuid - b.uuid);

  for (let i = 0; i < result.length; i++) {
    if (result[i + 1]?.uuid && result[i].uuid === result[i + 1].uuid) {
      result[i] = Object.assign(result[i], result[i + 1]);
      result.splice(i + 1, 1);
    }

    if (result[i].name === undefined) {
      // 注意判断的名字是不是0，如果是0的话，js直接判断为false；所以要注意，可以用==/===判断
      result[i].name = null;
    }

    if (result[i].role === undefined) {
      result[i].role = null;
    }
  }
  return result;
}
console.table(Combine(arr1, arr2));
