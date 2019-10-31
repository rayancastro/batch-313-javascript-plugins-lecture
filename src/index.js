// imports
import { fetchMovies, movieSearch } from './movie'
import { initSortable } from './plugins/init_sortable'
import { initMarkdown } from './plugins/init_markdown'
import { initSelect2 } from './plugins/init_select2'

//
initSortable();
initMarkdown();
initSelect2();

//
fetchMovies("harry potter");

//
const form = document.querySelector('#search-movies');
form.addEventListener('submit', movieSearch);
