const searchButton = document.getElementById("search-button");
const movieName = document.getElementById("movie-name");
const movieYear = document.getElementById("movie-year");
const movieListContainer = document.getElementById("movie-list");

let movieList = JSON.parse(localStorage.getItem("movieList")) ?? [];

function movieNameParameterGenerator() {
  if (movieName.value.trim() === "") {
    throw new Error("O nome do filme deve ser informado");
  }
  return movieName.value.trim().split(" ").join("+");
}

async function searchButtonClickHandler() {
  try {
    const url = `http://www.omdbapi.com/?apikey=${key}&t=${movieNameParameterGenerator()}&y=${movieYear.value.trim()}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.Error) throw new Error("Filme não encontrado");
    createModal(data);
    overlay.classList.add("open");
  } catch (error) {
    alert(error.message);
  }
}

function addToList(movieObject) {
  movieList.push(movieObject);
}

function isMovieAlreadyOnList(id) {
  return movieList.some((movie) => movie.imdbID === id);
}

function addCurrentMovieToList() {
  if (isMovieAlreadyOnList(currentMovie.imdbID)) {
    alert("Filme já está na sua lista!");
    return;
  }
  addToList(currentMovie);
  updateUI(currentMovie);
  updateLocalStorage();
  overlay.classList.remove("open");
}

function updateUI(movieObject) {
  movieListContainer.innerHTML += `
    <article id="movie-card-${movieObject.imdbID}">
      <img src="${movieObject.Poster}" alt="Poster de ${movieObject.Title}" />
      <button class="remove-button" onclick="removeFilmFromList('${movieObject.imdbID}')">
        <i class="bi bi-trash"></i>Remover
      </button>
    </article>
  `;
}

function removeFilmFromList(id) {
  movieList = movieList.filter((movie) => movie.imdbID !== id);
  document.getElementById(`movie-card-${id}`).remove();
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("movieList", JSON.stringify(movieList));
}

searchButton.addEventListener("click", searchButtonClickHandler);

movieList.forEach(updateUI);
