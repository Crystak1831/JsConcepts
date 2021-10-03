let boxNum = 50;
const container = document.querySelector(".container");
function init(num) {
  let i = num;
  container.innerHTML = "";
  let frag = document.createDocumentFragment();
  while (i > 0) {
    let box = document.createElement("div");
    box.classList.add("box");
    frag.appendChild(box);
    i--;
  }
  container.appendChild(frag);
}

init(boxNum);

const boxes = document.querySelectorAll(".box");
const cover = document.createElement("div");
container.appendChild(cover);
let X, Y;
function isCovered(cover, box) {
  // console.log(cover, box);
  if (cover.right < box.left) return false;
  if (cover.left > box.right) return false;
  if (cover.top > box.bottom) return false;
  if (cover.bottom < box.top) return false;
  return true;
}
container.addEventListener("mousedown", (e) => {
  // start points coordinates
  X = e.clientX;
  Y = e.clientY;
  console.log(X, Y);
  cover.className = "selector";
  const moveHandler = (e) => {
    // move points coordinates
    let moveX = e.clientX;
    let moveY = e.clientY;
    // smallest one define the position
    cover.style.left = `${Math.min(X, moveX)}px`;
    cover.style.top = `${Math.min(Y, moveY)}px`;
    // calc the dimensions
    cover.style.width = `${Math.abs(moveX - X)}px`;
    cover.style.height = `${Math.abs(moveY - Y)}px`;
    for (let box of boxes) {
      if (
        // getBoundingClientRect will return an object about el position based on the current screen
        isCovered(cover.getBoundingClientRect(), box.getBoundingClientRect())
      ) {
        box.classList.add("covered");
      } else {
        box.classList.remove("covered");
      }
    }
  };
  const endMove = () => {
    container.removeEventListener("mousemove", moveHandler);
    cover.style.left = ``;
    cover.style.top = ``;
    cover.style.width = ``;
    cover.style.height = ``;
    cover.classList.remove("selector");
  };
  container.addEventListener("mousemove", moveHandler);
  container.addEventListener("mouseup", endMove);
});

//html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//   </head>

//   <body>
//     <!-- https://imgur.com/a/eLeU2 -->
//     <div class="container"></div>

//     <script src="src/index.js"></script>
//   </body>
// </html>

//css:
// body {
//   font-family: sans-serif;
//   margin: 0;
// }
// .container {
//   display: flex;
//   flex-wrap: wrap;
// }
// .box {
//   width: 100px;
//   height: 100px;
//   border: 5px solid steelblue;
//   display: inline-block;
//   margin: 5px;
// }
// .selector {
//   border: 1px solid blue;
//   background: rgba(0, 0, 0, 0.5);
//   position: absolute;
// }

// .box.covered {
//   background-color: lightblue;
// }
