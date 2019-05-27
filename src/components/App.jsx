import React, { Component } from 'react';
import Nav from './Nav';
import SearchBox from './SearchBox';
import MovieList from './MovieList';


class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: true,
      movies: [],
      searchTerm: ''
    }
  }


  handleSubmit = (e) => {
    const API_KEY = `${process.env.REACT_APP_API}`;
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({ movies: [...res.results] })
      })
      .catch((err) => console.log('parsing failed', err));
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })    
  }

  render() {
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

