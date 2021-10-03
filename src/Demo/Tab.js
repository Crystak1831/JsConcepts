import "./styles.css";
import { data } from "./data";

const tab = document.querySelector(".tabContainer");
const content = document.querySelector(".contentContainer");

const render = () => {
  renderTab();
  renderContent();
};

const renderTab = () => {
  tab.innerHTML = "";
  data.map((item, index) => {
    let span = document.createElement("span");
    span.innerHTML = `<button data-id=${index} id=${index}>${item.tab}</button>`;
    tab.appendChild(span);
  });
};

const renderContent = () => {
  tab.addEventListener("click", (e) => {
    let action = e.target.dataset.id;
    content.innerHTML = `${data[action].content}`;
    //highlight
    renderTab();
    const targetBtn = document.getElementById(`${action}`);
    targetBtn.setAttribute("id", "highlight");
  });
};

render();
