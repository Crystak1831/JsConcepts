// Ajax
// 1.手动编写一个AJAX

// 初始化AJAX
// var xhr = new XMLHttpRequest();

//链接地址，准备数据
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// //接收出发的条件

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const response = JSON.parse(xhr.responseText)
//     console.log(response);
//     const namelist = document.querySelector(".nameList")
//       response.forEach((item)=>{
//         const newList = document.createElement("li")
//         newList.innerHTML = item.title
//         namelist.appendChild(newList)
//       })
//   }
// };
// xhr.send()

// -----------------------------------------------------------
// IE版本低用ActiveXObject

// 初始化
// var xhr = XMLHttpRequest? new XMLHttpRequest(): new window.ActiveXObject()

// // 链接地址
// xhr.open("GET","https://jsonplaceholder.typicode.com/todos/")

// // 接收出发条件
// xhr.onreadystatechange = function(){
//   if(xhr.readyState === 4 && xhr.status ===200){
//     alert(xhr.responseText)
//   }
// }

// xhr.send()

// ---------------------框架-----------------------

//create XMLHttpRequest
var xhr = new XMLHttpRequest();

//connect to the api
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/");

//get the condition of AJAX call
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
  }
};

// send AJAX call
xhr.send();
