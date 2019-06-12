// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

import Backdrop from './Backdrop';
import MovieList from './MovieList';
import Nav from './Nav';
import Pagination from './Pagination';
import Pages from './Pages';
import SearchBox from './SearchBox';



const API_KEY = `${process.env.REACT_APP_API}`;
const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const tURL = "https://api.themoviedb.org/3/trending/movie/week?api_key=";
const query = "&query=";

// const defaultMovies = [];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: true,
      movies: [],
      searchTerm: '',
      totalPages: null,
      totalResults: 0,
      currentPage: 1,
      pageNum: 1,
      pageLinkNum: 1,
      popIndex: 30
    }

    this.debouncedSearch = debounce((term) => {
      if (term === '') {
        return this.setState({ movies: []})
      }
      this.fetchMovies(term)
      console.log('NOW DO THE SEARCH!')
    }, 600) 

    this.nextPage = this.changePage.bind(this, 1);
    this.prevPage = this.changePage.bind(this, -1);

  }


  ///////////////////////////////
  // API FETCHING
  ///////////////////////////////

  fetchMovies = (search) => {
    fetch(URL + `${API_KEY}` + query + search + "&page=" + this.state.pageNum )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.results) {
          this.setState({
            movies: json.results,
            totalPages: json.total_pages
          })
        }
        else {
          this.setState({ movies: [] });
        }
      })
    .catch((err) => console.log('PARSING FAILURE', err));
  }

  ///////////////////////////////
  // POPULAR SEARCHES
  ///////////////////////////////

  handleSubmitTrending = (e) => {
    e.preventDefault();

    fetch(tURL + `${API_KEY}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ movies: data.results })
      })
  }

  trendingMovies = () => {
    this.fetchTrending(this.state.movies);
  }

  handleTrendingSubmit = (e) => {
    e.preventDefault();
    this.setState({ pageNum: 1 });
    this.fetchTrending(this.state.movies);
  }

  ///////////////////////////////
  // SEARCH
  ///////////////////////////////

  updateSearchTerm = (e) => {
    this.setState({ 
      searchTerm: e.target.value,
      pageNum: 1
    }, () => {
      
      const term = this.state.searchTerm

      if (term.length > 2) { 
        this.debouncedSearch(term);
      } else {
        this.debouncedSearch('');
      }
    });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ pageNum: 1 });
    this.fetchMovies(this.state.searchTerm);
  }

  ///////////////////////////////
  // PAGE CHANGING
  ///////////////////////////////

  changePage = (dir) => {
    let pageNumber = this.state.pageNum;

    if (this.state.movies.length === 0) {
      return 
    } 
    if (dir === 1 && pageNumber < this.state.totalPages){
      pageNumber += 1;
    } else if (dir === -1 && pageNumber > 1) {
      pageNumber -= 1;
    }
    this.setState({
      pageNum: pageNumber
    }, () => this.fetchMovies(this.state.searchTerm))
  }


  // nextPage = () => {
  //   if (this.state.movies && this.state.pageNum < this.state.totalPages) {
  //     this.setState({ 
  //       pageNum: this.state.pageNum + 1
  //     }, () => this.fetchMovies(this.state.searchTerm))
  //   }
  // }


  // prevPage = () => {
  //   if (this.state.movies && this.state.pageNum > 1) {
  //     this.setState({
  //       pageNum: this.state.pageNum - 1
  //     }, () => this.fetchMovies(this.state.searchTerm))
  //   }
  // }


  pageLink = (pageNumber) => {
    this.setState({
      pageNum: pageNumber
    }, () => this.fetchMovies(this.state.searchTerm))
  }

  // WE HAVE TO RESET THE STATE WHEN TYPING A NEW VALUE FROM THE PAGE LINK


  // pageLink = (pageNumber) => {
  //   fetch(URL + `${API_KEY}` + query + `${this.state.searchTerm}` + "&page=" + pageNumber)
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         movies: json.results,
  //         currentPage: pageNumber
  //       })
  //     })
  // }


  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }

    // const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        {/* <Nav /> */}
        <SearchBox updateSearchTerm={this.updateSearchTerm} handleSubmit={this.handleSubmit} handleSubmitTrending={this.handleSubmitTrending} />
        {/* <Backdrop /> */}
        {/* {this.movies.backdrop_path} */}
        <Pages nextPage={this.nextPage} prevPage={this.prevPage} />
        <MovieList movies={this.state.movies} />
        { this.state.totalPages > 1 ? <Pagination totalPages={this.state.totalPages} pageLink={this.pageLink} currentPage={this.state.currentPage} /> : '' }
      </div>
    );
  }
}
export default App;



// API KEY  6b81323b3985de25250ad91d5c48d5b2

