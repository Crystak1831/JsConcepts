const myList = document.querySelector(".listGroup");
const myButtons = document.querySelector(".buttonsGroup");

//CONSTANT
const URL = "https://jsonplaceholder.typicode.com/todos";
let myAPIStuffs = []; //[[],[],[]]
let pageIndex = 1;
let previousButtonClick;

render();

function render() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      // myAPIStuffs = [...data];

      let tempPage = []; // [{},{}]
      for (let i = 0; i < data.length; i++) {
        if (i % 19 === 0 && i !== 0) {
          myAPIStuffs.push(tempPage);
          tempPage = [];
        }
        tempPage.push({ ...data[i] });
        console.log(tempPage);
      }

      //Initial
      addToList(myAPIStuffs[pageIndex]);
      addToButtons(myAPIStuffs.length);
      initialButtonEventLisener();
    });
}

function addToList(page) {
  myList.innerHTML = ``;
  for (let i = 0; i < page.length; i++) {
    let childListItem = document.createElement("p");
    childListItem.innerHTML = `${page[i].title}`;
    myList.appendChild(childListItem);
  }
}

function addToButtons(pagesLength) {
  let previousButton = document.createElement("button");
  previousButton.innerText = `previous`;
  myButtons.appendChild(previousButton);

  console.log(pagesLength);
  for (let i = 0; i < pagesLength; i++) {
    let pageIndex = document.createElement("button");
    pageIndex.innerText = `${i + 1}`;
    myButtons.appendChild(pageIndex);
  }

  let nextButton = document.createElement("button");
  nextButton.innerText = `next`;
  myButtons.appendChild(nextButton);
}

function initialButtonEventLisener() {
  //data-set
  myButtons.addEventListener("click", (event) => {
    let eventTrigger = event.target.innerText;
    if (eventTrigger === "next") {
      pageIndex++;
    } else if (eventTrigger === "previous") {
      pageIndex--;
    } else {
      let tempButtons = document.querySelectorAll("button");
      console.log("previ", previousButtonClick);
      if (previousButtonClick !== undefined) {
        tempButtons[previousButtonClick].classList.remove(`activeButton`);
      } else {
        // undefined
        tempButtons[pageIndex].classList.add(`activeButton`);
      }
      pageIndex = Number(eventTrigger) - 1;
      event.target.classList.add(`activeButton`);
      previousButtonClick = pageIndex;
    }
    addToList(myAPIStuffs[pageIndex]);
  });
}
