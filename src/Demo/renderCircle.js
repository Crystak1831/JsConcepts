// css:
// body {
//   font-family: sans-serif;
// }
// #radius-display {
//   display: flex;
// }
// .circle-shape {
//   border: 1px black solid;
//   border-radius: 50%;
// }

// html:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Parcel Sandbox</title>
//     <meta charset="UTF-8" />
//   </head>

//   <body>
//     <h4>Here are the radius of all circles</h4>
//     <div id="radius-display"></div>
//     <script src="src/index.js"></script>
//   </body>
// </html>

let container = document.getElementById("radius-display");
const nums = [10, 20, 24, 32, 8];
const render = () => {
  container.innerHTML = "";
  let frag = document.createDocumentFragment();
  nums.forEach((item, index) => {
    let circle = document.createElement("div");
    circle.style.width = `${item * 2 - 2}px`;
    circle.style.height = `${item * 2 - 2}px`;
    circle.setAttribute("class", "circle-shape");
    circle.dataset.id = index;
    frag.appendChild(circle);
  });
  container.appendChild(frag);
};
container.addEventListener("click", (e) => {
  let index = Number(e.target.dataset.id);
  if (index !== undefined) {
    for (let i = 0; i < nums.length; i++) {
      if (i > index) {
        break;
      } else {
        nums[i] += 1;
      }
    }
  }
  render();
});
render();
