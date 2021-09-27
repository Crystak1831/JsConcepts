//css
// body {
//   font-family: sans-serif;
// }
// .header {
//   border: 1px solid black;
// }

// .hidden {
//   display: none;
// }

import "./styles.css";

const container = document.querySelector("#app");
const data = [
  {
    header: "1",
    detail: "detail - 1"
  },
  {
    header: "2",
    detail: "detail - 2"
  },
  {
    header: "3",
    detail: "detail - 3"
  },
  {
    header: "4",
    detail: "detail - 4"
  }
];

function render() {
  container.innerHTML = "";
  const frag = document.createDocumentFragment();

  data.forEach((item, idx) => {
    const unit = document.createElement("div");
    unit.innerHTML = `
      <div class="header" id=${idx}>${item.header}</div>
      <div class="detail hidden">${item.detail}</div>
    `;
    frag.appendChild(unit);
  });
  container.appendChild(frag);
}

container.addEventListener("click", (e) => {
  const id = e.target.id;
  if (id !== undefined) {
    const containerArr = Array.from(container.children);
    const detail = containerArr[id]?.children[1];
    if (detail?.classList.contains("hidden")) {
      detail?.classList.remove("hidden");
    } else {
      detail?.classList.add("hidden");
    }
  }
});

render();
