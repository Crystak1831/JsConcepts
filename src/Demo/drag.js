import "./styles.css";

const container = document.getElementById("app");
const cardContainer = document.getElementById("app1");
let movies = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" }
];

Array.prototype.swap = function (x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("input type should be number");
  }
  if (x < 0 || y < 0) {
    throw new Error("index cannot be smaller than 0");
  }
  if (x > this.length - 1 || y > this.length - 1) {
    throw new Error("index cannot be greater than arr max index");
  }
  if (x === y) {
    return this;
  }
  [this[x], this[y]] = [this[y], this[x]];
  return this;
};

let start,
  end = null;

function render() {
  container.innerHTML = "";
  cardContainer.innerHTML = "";
  let frag = document.createDocumentFragment();
  let frag1 = document.createDocumentFragment();
  movies.forEach((item) => {
    let movie = document.createElement("p");
    movie.innerText = item.name;
    movie.setAttribute("draggable", true);
    movie.classList.add("movie-item");
    frag.appendChild(movie);

    let movieCard = document.createElement("div");
    movieCard.innerText = item.name;
    movieCard.classList.add("movie-card");
    frag1.appendChild(movieCard);
  });
  container.appendChild(frag);
  cardContainer.appendChild(frag1);
}
render();

function getPosition() {
  let children = Array.from(container.children);
  for (let item of children) {
    let pos = item.getBoundingClientRect();
    console.log(pos);
  }
}
getPosition();
function findIndex(name) {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].name === name) return i;
  }
  return -1;
}

container.addEventListener("dragstart", (e) => {
  // console.log(e);
  start = findIndex(e.toElement.innerText);
});
container.addEventListener("dragover", (e) => {
  e.preventDefault();
});
container.addEventListener("drop", (e) => {
  // console.log(e);
  e.preventDefault();
  end = findIndex(e.toElement.innerText);
  if (end >= 0) {
    movies.swap(start, end);
    render();
    start = null;
    end = null;
  } else return;
});

let data1 = null;

// function fetchData() {
//   const url = `https://api.themoviedb.org/3/movie/436969?api_key=9d3badb0c8d83a0bce6bf3cf96e3cc60&language=en-US`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // sync operation
//       data1 = { ...data };
//     })
//     .catch((err) => console.log(err));
// }

async function asyncFetch() {
  const url = `https://api.themoviedb.org/3/movie/436969?api_key=9d3badb0c8d83a0bce6bf3cf96e3cc60&language=en-US`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    data1 = data;
  } catch (err) {
    console.log(err);
  }
}

asyncFetch();
console.log(data1);
