const imgPath = "https://image.tmdb.org/t/p/w500";
const imgUrl = "https://image.tmdb.org/t/p/w2180";
const URL = "https://api.themoviedb.org/3/movie/popular?";
const API_KEY = "api_key=78c4f0cca11879ce9cfe190a4f456cd1";
const LANG = "&language=en-US";
const detailUrl = "https://api.themoviedb.org/3/movie/";

// let apiUrl = URL + API_KEY + LANG + "&page=" + 1;
let apiUrl = `${URL}${API_KEY}${LANG}&page=1`;
let page = 1;

// const section = document.getElementById("section");
const nextBtn = document.getElementById("next-btn");
const preBtn = document.getElementById("previous-btn");
let url = "";
let image;
let detailId;

showMovies(page);
function showMovies(pageNumber) {
  url = `${URL}${API_KEY}${LANG}`;
  console.log(url);
  let container = document.querySelector(".container");
  container.innerHTML = ``;
  fetch(url + "&page=" + pageNumber)
    .then((res) => res.json())
    .then(function (data) {
      data.results.forEach((element, index) => {
        // console.log(index);
        const el = document.createElement("div");

        image = document.createElement("img");
        image.setAttribute("class", "myImg");
        const text = document.createElement("h2");

        image.src = imgPath + element.poster_path;
        el.appendChild(image);
        container.appendChild(el);

        let modal = document.createElement("div");
        // let selectImg = document.getElementsByClassName("myImg")
        let innerImg = document.createElement("img");
        let modalContent = document.createElement("div");
        let closeButton = document.createElement("span");
        let detailContent = document.createElement("div");
        let titleContent = document.createElement("div");
        // let labelContent = document.createElement("div")
        // let newLabel = document.createElement("label")
        closeButton.innerHTML = "&times;";

        modal.className = "modal";
        modalContent.className = "modal_content";
        closeButton.setAttribute("class", "closeBtn");
        innerImg.setAttribute("class", "innerImg");
        detailContent.setAttribute("class", "detail_content");
        titleContent.setAttribute("class", "title-content");
        // newLabel.setAttribute("class","newlabel")
        // labelContent.setAttribute("class","label_content")

        let openModal = document.getElementsByClassName("modal");
        let openModalContent = document.getElementsByClassName("modal_content");
        let modalClose = document.getElementsByClassName("closeBtn");
        let newLaberContent = document.getElementsByClassName("newlabel");
        let titleHeader = document.getElementsByClassName("title-content");

        image.addEventListener("click", () => {
          detailId = data.results[index].id;
          // console.log('====================');
          // console.log(detailId)
          // console.log(`https://api.themoviedb.org/3/movie/${detailId}?api_key=9d3badb0c8d83a0bce6bf3cf96e3cc60&language=en-US`);
          // console.log(`${detailUrl}${detailId}?${API_KEY}${LANG}`);
          console.log(detailId);

          fetch(`${detailUrl}${detailId}?${API_KEY}${LANG}`)
            .then((res) => res.json())
            .then((data) => {
              for (let i = 0; i < openModal.length; i++) {
                if (i == index) {
                  openModal[i].style.display = "block";
                  openModalContent[
                    i
                  ].style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.poster_path})`;
                  modalClose[i].onclick = function () {
                    openModal[i].style.display = "none";
                  };
                }
              }

              let genresContent = data.genres;
              // let names = '';

              if (detailContent.childNodes.length == 1) {
                genresContent.map((item, id) => {
                  var newLabel = document.createElement("div");
                  newLabel.setAttribute("class", "newlabel");
                  let colorLabel = document.getElementsByClassName("newlabel");
                  item = genresContent[id].name;
                  console.log(item);
                  newLabel.innerText = item;
                  const randomColor = Math.floor(
                    Math.random() * 16777215
                  ).toString(16);
                  newLabel.style.backgroundColor = "#" + randomColor;
                  detailContent.appendChild(newLabel);
                });
              }

              innerImg.src = `https://image.tmdb.org/t/p/w200/${data.poster_path}`;
              let detailHeader = data.original_title;
              titleContent.innerHTML = detailHeader;
            });
        });
        modal.appendChild(closeButton);
        modal.appendChild(modalContent);
        modalContent.appendChild(detailContent);
        modalContent.appendChild(innerImg);
        detailContent.appendChild(titleContent);

        el.appendChild(modal);
        console.log(el);
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function handleNext() {
  showMovies(page + 1);
  page++;
}

function handlePrevs() {
  showMovies(page - 1);
  page--;
}
