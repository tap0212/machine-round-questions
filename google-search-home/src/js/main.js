import '../css/styles.css'

const baseSearchQueries = [
  {
    query: "How to get everything in js right?",
    id: 0
  },
  {
    query: "How become a bug?",
    id: 1
  },
  {
    query: "How can I do that?",
    id: 2
  },
  {
    query: "How can I do this?",
    id: 3
  },
  {
    query:  "How can I do what?",
    id: 4
  },
  {
    query:  "How can I do?",
    id: 5
  },
  {
    query: "How become a bug?",
    id: 6
  },
  {
    query: "How become a bug?",
    id: 7
  },
  {
    query: "How can I do that?",
    id: 8
  },
  {
    query: "How can I do this?",
    id: 9
  },
  {
    query:  "How can I do what?",
    id: 10
  },
  {
    query:  "How can I do?",
    id: 11
  },
]

const getSearchResultRow = (query) => {
  const div = document.createElement('div');
  div.classList.add("search_suggestion_text");
  const img = document.createElement('img');
  const p = document.createElement('p')
  p.innerText =  query
  img.src = "/src/asssets/search.svg"
  div.appendChild(img)
  div.appendChild(p)
  return div
}
const showSearchSuggestion = () => {
  const searchSuggestion = document.getElementById('search-suggestions');
  const searchInput = document.getElementById('search-input');

  searchSuggestion.classList.remove("hide")
  searchSuggestion.classList.add("show");
  let searchSuggestions = baseSearchQueries;
  if(searchInput.value){
    searchSuggestions = baseSearchQueries.filter(query => query.query.toLowerCase().includes(searchInput.value.toLowerCase()))
  }
  searchSuggestions.forEach(query => {
    searchSuggestion.appendChild(getSearchResultRow(query.query))
  })
}

const hideSearchSuggestion = () => {
  const searchSuggestion = document.getElementById('search-suggestions')
  searchSuggestion.classList.add("hide")
  searchSuggestion.classList.remove("show")
}

const filterSearchQuery = (event) => {
  const value = event.target.value
  const searchSuggestion = document.getElementById('search-suggestions');
  searchSuggestion.innerHTML = ""
  let searchSuggestions = baseSearchQueries;
  if(value){
    searchSuggestions = baseSearchQueries.filter(query => query.query.toLowerCase().includes(value.toLowerCase()))
  }
  searchSuggestions.forEach(query => {
    searchSuggestion.appendChild(getSearchResultRow(query.query))
  })
}

(() => {
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('focus', showSearchSuggestion);
  searchInput.addEventListener('focusout', hideSearchSuggestion);
  searchInput.addEventListener('keydown', filterSearchQuery);
})()