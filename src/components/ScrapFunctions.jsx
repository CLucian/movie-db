///////////////////////////////
// SEARCH
///////////////////////////////

updateSearchTerm = (e) => {
  this.setState(
    {
      searchTerm: e.target.value,
      pageNum: 1,
    },
    () => {
      const term = this.state.searchTerm;

      if (term.length > 2) {
        this.debouncedSearch(term);
      } else {
        this.debouncedSearch("");
      }
    }
  );
};

this.debouncedSearch = debounce((term) => {
  if (term === "") {
    return this.setState({ movies: [] });
  }
  this.fetchMovies(term);
}, 600);

fetchMovies = (search) => {
  this.resultsType = "search";

  const url = constructSearchURL(search, this.state.pageNum);
  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      if (json.results) {
        this.setState({
          movies: json.results,
          searchTerm: search.target.value,
          totalPages: json.total_pages,
        });
      } else {
        this.setState({ movies: [] });
      }
    })
    .catch((err) => console.log("PARSING FAILURE", err));
};

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({
    searchTerm: e.target.value,
    pageNum: 1,
  });
  this.fetchMovies(this.state.searchTerm);
};

// handleSubmit = (search) => {
//   search.preventDefault();

//   const url = constructSearchURL(search, this.state.pageNum)

//   fetch(url)
//     .then(data => data.json())
//     .then(data => {
//       console.log(data);
//       this.setState({
//         movies: data.results,
//         totalPage: data.total_pages
//       })
//     })
// }

// handleChange = (e) => {

//   this.setState({
//     searchTerm: e.target.value
//   });
// }
