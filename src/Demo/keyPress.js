const data = [
  { tab: "local", content: "local news" },
  { tab: "sports", content: "sports news" },
  { tab: "politics", content: "politic news" }
];

Presstab(data);
function Presstab(data) {
  let container = document.querySelector(".app");
  container.innerHTML = ``;

  data.map((item) => {
    let nav = document.createElement("div");
    let button = document.createElement("button");
    nav.setAttribute("class", "navCotainer");
    let getNav = document.getElementsByClassName("navContainer");
    button.innerHTML = item.tab;
    nav.appendChild(button);
    container.appendChild(nav);

    button.addEventListener("click", (e) => {
      let showInfo = document.createElement("div");
      showInfo.innerHTML = item.content;

      // if(e.code === 9){
      //     for(let i = 0; i<3;i++){
      //         let selectBtn = document.getElementsByClassName("firsBtn")
      //         selectBtn[i].focus()
      //     }
      //     let showInfo = document.createElement("div")
      //     return showInfo.innerHTML = item.content
      //    }
      container.appendChild(showInfo);
    });
  });
}
