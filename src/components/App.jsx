// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

import Backdrop from './Backdrop';
import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieList from './MovieList';
import Pagination from './Pagination';
import Pages from './Pages';



const API_KEY = `${process.env.REACT_APP_API}`;
const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
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
      pageLinkNum: 1
    }

    this.debouncedSearch = debounce((term) => {
      if (term === '') {
        return this.setState({ movies: []})
      }
      this.fetchMovies(term)
      console.log('NOW DO THE SEARCH!')
    }, 600) 
  }


  ///////////////////////////////
  // API FETCHING
  ///////////////////////////////

  fetchMovies = (search) => {
    fetch(URL + `${API_KEY}` + query + search + "&page=" + this.state.currentPage )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        if (json.results) {
          this.setState({
            movies: json.results,
            totalPages: json.total_pages,
            currentPage: json.page
          })
        }
        else {
          this.setState({ movies: [] });
        }
      })
    .catch((err) => console.log('PARSING FAILURE', err));
  }

  ///////////////////////////////
  // SEARCH
  ///////////////////////////////

  updateSearchTerm = (e) => {
    this.setState({ 
      searchTerm: e.target.value
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
    this.setState({ currentPage: 1 });
    this.fetchMovies(this.state.searchTerm);
  }

  ///////////////////////////////
  // PAGE CHANGING
  ///////////////////////////////

  nextPage = (pageNumber) => {
    if (this.state.movies && this.state.currentPage < this.state.totalPages) {
      this.setState({ 
        currentPage: this.state.currentPage + 1
      }, () => this.fetchMovies(this.state.searchTerm))
    }
  }


  prevPage = (pageNumber) => {
    if (this.state.movies && this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      }, () => this.fetchMovies(this.state.searchTerm))
    }
  }


  pageLink = (pageNumber) => {
    this.setState({
      currentPage: pageNumber
    }, () => this.fetchMovies(this.state.searchTerm))
  }

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
        <Nav />
        <SearchBox updateSearchTerm={this.updateSearchTerm} handleSubmit={this.handleSubmit} />
        <Backdrop />
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

