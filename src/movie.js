const buildList = (data) => {
  data.Search.forEach((movie) => {
    const item = `<li class="list-inline-item">
      <img src="${movie.Poster}" height="120" />
    </li>`

    results.insertAdjacentHTML('beforeend', item)
  });
}

const fetchMovies = (query) => {
  const url = `http://www.omdbapi.com/?s=${query}&apikey=adf1f2d7`

  fetch(url)
    .then(response => response.json())
    .then(buildList);
}

const movieSearch = (event) => {
  event.preventDefault();
  const keyword = document.querySelector('#keyword').value;
  // console.log(keyword);
  results.innerHTML = "";
  fetchMovies(keyword);
}

export { fetchMovies, movieSearch };
