import "./styles.css";
let myModal = document.querySelector(".myModal");
let linkBtn = document.querySelector("#openModal");
myModal.innerHTML = "";

Modal();
function Modal() {
  let modalContent = document.createElement("div");
  let tag = document.createElement("p");
  let closeModal = document.createElement("span");

  modalContent.setAttribute("id", "modal-content");
  closeModal.setAttribute("class", "close");
  tag.innerText = "Modal";
  closeModal.innerText = "x";
  modalContent.appendChild(tag);
  modalContent.appendChild(closeModal);
  myModal.appendChild(modalContent);
  linkBtn.addEventListener("click", () => {
    myModal.style.display = "block";
  });
  closeModal.addEventListener("click", () => {
    myModal.style.display = "none";
  });
}

// css
// body {
//   font-family: sans-serif;
// }

// .myModal {
//   display: none;
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   background-color: rgba(0, 0, 0, 0.4);
// }

// #modal-content {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: (-50%, -50%);
//   background-color: #fefefe;
//   margin: auto;
//   padding: 10px;
//   border: 1px solid #888;
//   width: 200px;
// }

// .close {
//   display: inline;
// }
