/* promise例子1 */
/*写promise： 给一个图片的url,然后写一个promise去load image */
// function loadImage(address) {
//   let mypromise = new Promise((resolve, reject) => {
//     let myImg = document.createElement("img");
//     myImg.src = address;
//     myImg.onload = function () {
//       resolve(myImg);
//     };
//     myImg.onerror = function () {
//       reject("failed to load...");
//     };
//   });
//   return mypromise; // mypromise就是Promise构造器的实例
// }
/* 使用promise */
// loadImage(
//   "https://images.unsplash.com/photo-1584366333253-2392b0288bda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
// )
//   .then(
//     (res) => {
//       console.log(`image width:  ${res.width}`);
//       return res; // return promise实例 实现链式操作
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then(
//     (res) => {
//       document.querySelector("body").append(res);
//       res.height = 150;
//       return res;
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .catch((err) => {
//     console.log(err);
//   });
/* 例子1的promise串联示范 */
// loadImage(
//   "https://images.unsplash.com/photo-1591827285933-08285e588df0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
// )
//   .then(
//     (res) => {
//       document.querySelector("body").append(res);
//       res.height = 150;
//       // return res //这是返回自己promise实例本身
//       // 这里实现不同的promisec实例串联：
//       return loadImage(
//         "https://images.unsplash.com/photo-1600969207004-501a76c66d1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
//       );
//     },
//     (err) => {
//       console.log(err);
//     }
//   )
//   .then((res) => {
//     res.height = 150;
//     document.querySelector("body").append(res);
//   });
/* 例子1 promise.all的使用 */
// const img1PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// const img2PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// const img3PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// Promise.all([
//   img1PromiseInstanceObj,
//   img2PromiseInstanceObj,
//   img3PromiseInstanceObj
// ]).then(
//   (res) => {
//     console.log("全都成功了");
//     console.log(res); //是个数组，数组包含了3个实例对象的信息
//     res.forEach((img) => (img.height = 150));
//     let [img1, img2, img3] = res; //解构赋值
//     let body = document.querySelector("body");
//     body.append(img1);
//     body.append(img2);
//     body.append(img3);
//   },
//   (err) => {
//     console.log("至少有一个失败了");
//   }
// );
/* 例子1的 promise.race 使用*/
// let img1PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1509719782173-841a7542cb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// let img2PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1541529229255-5762a41dfba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// let img3PromiseInstanceObj = loadImage(
//   "https://images.unsplash.com/photo-1600614691259-4b054a9119dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
// );
// Promise.race([
//   img1PromiseInstanceObj,
//   img2PromiseInstanceObj,
//   img3PromiseInstanceObj
// ]).then(
//   (res) => {
//     console.log("至少一个成功了");
//     console.log(res); // res是最先成功的那个
//     res.height = 150;
//     document.querySelector("body").append(res);
//   },
//   (err) => {
//     console.log("都失败了");
//   }
// );

/* promise例子2：Promise+Ajax
 Write codes to make a client request to 'https://jsonplaceholder.typicode.com/posts' 
 and console.log the data in JSON format*/
// function createAjaxPromise(url) {
//   let mypromise = new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", url);
//     xhr.onload = function (e) {
//       resolve(e.target.response);
//     };
//     xhr.onerror = function () {
//       console.log("something is wrong");
//     };
//     xhr.send();
//   });
//   return mypromise;
// }
// createAjaxPromise("https://jsonplaceholder.typicode.com/posts").then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
/* 例子2的Promise.all */
// let ajax1 = createAjaxPromise("https://jsonplaceholder.typicode.com/posts");
// let ajax2 = createAjaxPromise("https://jsonplaceholder.typicode.com/todos");
// let ajax3 = createAjaxPromise("https://jsonplaceholder.typicode.com/albums");
// Promise.all([ajax1, ajax2, ajax3]).then((res) => {
//   // let [ajax1DataResponse, ajax2DataResponse, ajax3DataResponse] = res;
//   console.log(res);
// });

/* promise例子3:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10.*/
// function compareToTen(num) {
//   let mypromise = new Promise((resolve, reject) => {
//     if (num >= 10) {
//       resolve(`${num} is > 10, success!`);
//     } else {
//       reject(`${num} is <10, failed`);
//     }
//   });
//   return mypromise;
// }
// compareToTen(13).then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );
// compareToTen(5).then(
//   (res) => {
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

/* Promise 例子4：
 Write two functions that use Promises that you can chain! 
 The first function, makeAllCaps(), will take in an array of words and capitalize them, 
 and then the second function, sortWords(), will sort the words in alphabetical order. 
 If the array contains anything but strings, it should throw an error.*/
// function makeAllCaps(array) {
//   let myPromise = new Promise((resolve, reject) => {
//     let afterCapsArr = array.map((item) => {
//       if (typeof item !== "string") reject("pls use string..");
//       return item.toUpperCase();
//     });
//     resolve(afterCapsArr);
//   });
//   return myPromise;
// }
// function sortWords(array) {
//   let myPromise = new Promise((resolve, reject) => {
//     array.forEach((item) => {
//       if (typeof item !== "string") reject("hum. plz use string,..");
//     });
//     resolve(array.sort());
//   });
//   return myPromise;
// }
// let arr = ["zebra", "dog", "cat", "tiger"];
// let arr2 = ["cucumber", 44, true];
// makeAllCaps(arr)
//   .then(sortWords)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// makeAllCaps(arr2)
//   .then(sortWords)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
