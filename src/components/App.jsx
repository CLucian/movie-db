// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieList from './MovieList';
// import Pagination from './Pagination';
import Pages from './Pages';



const API_KEY = `${process.env.REACT_APP_API}`;
const URL = "https://api.themoviedb.org/3/search/movie?api_key=";
const query = "&query=";

const defaultMovies = [];

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: true,
      movies: [],
      searchTerm: '',
      totalPages: null,
      totalResults: 0,
      pageNum: 1,
      currentPage: 1
    }

    this.debouncedSearch = debounce((term) => {
      if (!term) {
        console.log(term);
        return this.setState({ movies: []})
      }
      this.fetchMovies(term)
      console.log('NOW DO THE SEARCH!')
    }, 1000) 
  }


  fetchMovies = (search) => {
    fetch(URL + `${API_KEY}` + query + search + "&page=" + this.state.pageNum )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        this.setState({
          movies: json.results,
          totalPages: json.total_pages,
          currentPage: json.page
        })
      })
    .catch((err) => console.log('PARSING FAILURE', err));
  }

  updateSearchTerm = (e) => {
    this.setState({ 
      searchTerm: e.target.value,
      pageNum: 1
    }, () => {
      
      const term = this.state.searchTerm

      if (term.length > 2) { 
        this.debouncedSearch(term);
      } 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ pageNum: 1 });
    this.fetchMovies(this.state.searchTerm);
  }

  // handleChange = (e) => {
  //   this.setState({ searchTerm: e.target.value });
  // }

  nextPage = (pageNumber) => {
    if (this.state.movies && this.state.currentPage < this.state.totalPages) {
      console.log(this.state.pageNum)
      this.setState({ 
        pageNum: this.state.pageNum + 1
      }, () => this.fetchMovies(this.state.searchTerm))
    }
  }


  // Want to add functionality to make sure you can't go back past page 1 --> Use API JSON object???
  prevPage = (pageNumber) => {
    if (this.state.movies && this.state.currentPage > 1) {
      this.setState({
        pageNum: this.state.pageNum - 1
      }, () => this.fetchMovies(this.state.searchTerm))
    }
  }


  // Active search filter
  // filterSearch = (e) => {
  //   this.setState({ searchTerm: e.target.value }, () => { 
  //     this.fetchMovies(this.state.searchTerm);
  //   });
  // };

 


  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }

    // const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        <Nav />
        <SearchBox updateSearchTerm={this.updateSearchTerm} handleSubmit={this.handleSubmit} />
        <Pages nextPage={this.nextPage} prevPage={this.prevPage} />
        <MovieList movies={this.state.movies} />
        {/* { this.state.totalResults > 20 ? <Pagination nextPage={this.nextPage} currentPage={this.state.currentPage} /> : '' } */}
      </div>
    );
  }
}
export default App;



// API KEY  6b81323b3985de25250ad91d5c48d5b2

