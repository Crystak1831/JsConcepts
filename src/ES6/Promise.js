// 	1. concept:
// 	○ It is for handling the async operation, resolve the callback hell.
// 	○ it can make our code clean and dry
// 	○  It will make the async operation acting like sync operation
// 2. status：pending --- didn't resolve
// 	    fullfilled --- resolved,
// 	    reject ---reject
// 3. consumer: then --- if the promise is resolved, return a data
// 		 catch---if the promise is reject, catch the error
// 4. why promise can resolve callback hell?  we can use .then().then()….
// 接then的话上异步一定有 return

// write a simple promise
// let demo = new Promise((resolve,reject)=>{
//   const iphonePrice = 1200,
//   myMoney = 300
//   if(iphonePrice < myMoney) resolve("Get an iphone")
//   else reject(new Error("not enough money"))
// })

// //承接promis
// demo.then((res) =>{
//   console.log(res)
// }).catch((error)=>{console.log(error)})

// 2. why promise can solve the callback hell? since promise has "then"
// then can get the data from the previous .then(), although it is the
// async operation, it like sync operation
// ex2:
// let demo = new Promise((resolve,reject) =>{
//   const phonePrice = 1000, myMoney = 2000
//   if(phonePrice < myMoney) resolve("Get an iphone")
//   else reject(new Error("money is not enough"))
// })

// demo.then((res) =>{
//   let data = res+ "13"
//   return data
// })
// .then((res)=>{
//   console.log(res)
// })
// .then((res)=>{
//   // the previous is not return, so res is undefined
//   console.log(res)
// }).catch((error)=>{console.log(error)})
