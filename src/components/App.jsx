// import React, { Component } from 'react';
import React from 'react';          
import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieList from './MovieList';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoaded: true,
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1
    }
  }

   window.API_KEY = `${process.env.REACT_APP_API}`;


  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ 
          movies: [...res.results],
          totalResults: res.total_results  
        })
      })
      .catch((err) => console.log('parsing failed', err));
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })    
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        movies: [...res.results],
        currentPage: pageNumber
      })
    })
  }

  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }

    return (
      <div className="App">
        <Nav />
        <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}
export default App;



// API KEY  6b81323b3985de25250ad91d5c48d5b2

