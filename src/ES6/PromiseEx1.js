// 写promise： 给一个图片的url,然后写一个promise去load image

let mypromise = new Promise((resolve, reject) => {
  let myImg = document.createElement("img");
  let address =
    "https://www.imagediamond.com/blog/wp-content/uploads/2020/06/cartoon-girl-limages-2.jpg";
  myImg.src = address;
  myImg.onload = function () {
    resolve(myImg);
  };
  myImg.onerror = function () {
    reject("failed to load...");
  };
});

mypromise
  .then(
    (res) => {
      console.log(`image width:  ${res.width}`);
      return res; // return promise实例 实现链式操作
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (res) => {
      document.querySelector("body").append(res);
      res.height = 150;
      return res;
    },
    (err) => {
      console.log(err);
    }
  )
  .catch((err) => {
    console.log(err);
  });
