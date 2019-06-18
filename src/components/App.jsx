// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

// component imports
import Backdrop from './Backdrop';
import MovieList from './MovieList';
import Pagination from './Pagination';
import Pages from './Pages';
import SearchBox from './SearchBox';

// url import
import { constructTrendingURL, constructSearchURL } from '../utils/url.js';



class App extends React.Component {
  constructor() {
    super()

    this.resultsType = ''

    this.state = {
      isLoaded: true,
      movies: [],
      searchTerm: '',
      totalPages: null,
      totalResults: 0,
      pageNum: 1,
      trendingPage: 1,
      pageLinkNum: 1,
      popIndex: 5
    }

    this.nextPage = this.changePage.bind(this, 1);
    this.prevPage = this.changePage.bind(this, -1);

  }

  



  ///////////////////////////////
  // API FETCHING
  ///////////////////////////////

  fetchMovies = (search) => {
    this.resultsType = 'search';

    const url = constructSearchURL(search, this.state.pageNum)
    fetch(url)
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

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value, pageNum: 1 });
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ pageNum: 1 }, () => {
      this.fetchMovies(this.state.searchTerm);
    });
    this.fetchMovies(this.state.searchTerm);
  }


  fetchTrending = () => {
    this.resultsType = 'trending';
    
    const url = constructTrendingURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({ 
          movies: data.results,
          totalPages: data.total_pages
         })
      })
  }

  handleTrending = () => {
    this.setState({ pageNum: 1 }, () => this.fetchTrending())
  }



 

  ///////////////////////////////
  // PAGE CHANGING
  ///////////////////////////////

  // dir = direction
  changePage = (dir) => {
    let pageNumber = this.state.pageNum;

    if (this.state.movies.length === 0) {
      return 
    } 
    console.log("PAGE NUMBER:", pageNumber)
    if (dir === 1){
      pageNumber += 1;
      
    console.log("PAGE NUMBER:", pageNumber)
    } else if (dir === -1 && pageNumber > 1) {
      pageNumber -= 1;
    }
    this.setState({
      pageNum: pageNumber
    }, () => {
      if (this.resultsType === 'trending') {
        this.fetchTrending()
      } else if (this.resultsType === 'search') {
        this.fetchMovies(this.state.searchTerm)
      }
    })
  }

  ///////////////////////////////
  // PAGINATION
  ///////////////////////////////

  pagination = (pageNumber) => {
    this.setState({
      pageNum: pageNumber
    }, () => {
      if (this.resultsType === 'trending') {
        this.fetchTrending()
      } else if (this.resultsType === 'search') {
        this.fetchMovies(this.state.searchTerm)
      }
    })
  }

  ///////////////////////////////
  // RENDER
  ///////////////////////////////

  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }

    // const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        {/* <Nav /> */}
        <SearchBox 
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleTrending={this.handleTrending}
          searchTerm={this.state.searchTerm}
        />

        {/* <Backdrop /> */}
        {/* {this.movies.backdrop_path} */}
        <Pages 
          nextPage={this.nextPage} 
          prevPage={this.prevPage} 
          pageNum={this.state.pageNum}
          totalPages={this.state.totalPages}
        />
        <MovieList movies={this.state.movies} />
        { this.state.totalPages > 1 ? <Pagination totalPages={this.state.totalPages} pagination={this.pagination} pageNum={this.state.pageNum} /> : '' }
      </div>
    );
  }
}
export default App;



// API KEY  6b81323b3985de25250ad91d5c48d5b2


// TO DO LIST
// 1. WHEN SWITCHING FROM DISCOVER PAGE 2 TO SUBMIT PAGE MAKE IT GO DEFAULT TO PAGE 1 INSTEAD OF PAGE 2
// 2. WHEN CLICKING SUBMIT FIRST TIME, GOES TO PAGE DISCOVER PAGE WAS ON LAST - WHEN CLICKIGN SUBMIT TWICE, RESETS BACK TO PAGE 1 FOR SPIDERMAN