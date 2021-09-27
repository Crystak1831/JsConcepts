let fetchData = function (url, method) {
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr);
      } else {
        reject({
          error: {
            status: xhr.status,
            errorText: "fail fetch"
          }
        });
      }
    };
    xhr.open(method || "GET", url, true);
    xhr.send();
  });
};

let convertJSON = function (res) {
  return new Promise((resolve, reject) => {
    if (res !== null) {
      resolve(JSON.parse(res));
    } else {
      reject("no data here");
    }
  });
};

let url = "https://jsonplaceholder.typicode.com/users";
fetchData(url)
  .then((res) => convertJSON(res))
  .then((res) => {
    console.log(res);
  });
