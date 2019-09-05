// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

// component imports
import MovieList from './MovieList';
import Pagination from './Pagination';
import Pages from './Pages';
import SearchBox from './SearchBox';
import MovieInfo from './MovieInfo';
import StarRatings from './StarRatings';
// import Movie from './Movie';


// styles imports
import '../sass/main.scss';



// url import
import {
  getCategoryURL,
  constructSearchURL,
  constructGenreURL,
  constructMovieIdURL,
  constructSimilarMovieIdURL
} from '../utils/url'
 
import {
  isGenre,
  isCategory
} from '../utils/helpers'

// import { constructTrendingURL, constructSearchURL, constructNowPlayingURL, constructTopRatedURL, constructActionURL, constructAdventureURL,
//   constructComedyURL, constructCrimeURL, constructHorrorURL, constructRomanceURL, constructSciFiURL, constructWarURL
// } from '../utils/url.js';





class App extends React.Component {
  constructor() {
    super()

    this.resultsType = ''

    this.state = {
      isLoaded: true,
      movies: [],
      movie: null,
      searchTerm: '',
      totalPages: null,
      totalResults: 0,
      pageNum: 1,
      trendingPage: 1,
      pageLinkNum: 1,
      popIndex: 5,
      currentMovie: null,
      similarMovies: [],
      movieTrailer: []
    }

    // GENRE
    this.nextPage = this.changePage.bind(this, 1);
    this.prevPage = this.changePage.bind(this, -1);

    this.fetchAction = this.fetchGenre.bind(this, 'action')
    this.handleAction = this.handleGenre.bind(this, 'action')

    this.fetchAdventure = this.fetchGenre.bind(this, 'adventure')
    this.handleAdventure = this.handleGenre.bind(this, 'adventure')

    this.fetchComedy = this.fetchGenre.bind(this, 'comedy')
    this.handleComedy = this.handleGenre.bind(this, 'comedy')
    
    this.fetchCrime = this.fetchGenre.bind(this, 'crime')
    this.handleCrime = this.handleGenre.bind(this, 'crime')

    this.fetchRomance = this.fetchGenre.bind(this, 'romance')
    this.handleRomance = this.handleGenre.bind(this, 'romance')

    this.fetchHorror = this.fetchGenre.bind(this, 'horror')
    this.handleHorror = this.handleGenre.bind(this, 'horror')

    this.fetchSciFi = this.fetchGenre.bind(this, 'scifi')
    this.handleSciFi = this.handleGenre.bind(this, 'scifi')

    this.fetchWar = this.fetchGenre.bind(this, 'war')
    this.handleWar = this.handleGenre.bind(this, 'war')

    // CATEGORY
    this.fetchNowPlaying = this.fetchCategory.bind(this, 'nowPlaying')
    this.handleNowPlaying = this.handleCategory.bind(this, 'nowPlaying')

    this.fetchTopRated = this.fetchCategory.bind(this, 'topRated')
    this.handleTopRated = this.handleCategory.bind(this, 'topRated')

    this.fetchTrending = this.fetchCategory.bind(this, 'trending')
    this.handleTrending = this.handleCategory.bind(this, 'trending')


  }


  fetchGenre = (genre) => {
    this.resultsType = genre;

    const url = constructGenreURL(genre, this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleGenre = (genre) => {
    this.setState({ pageNum: 1 }, () => this.fetchGenre(genre))
  }

  fetchCategory = (category) => {
    this.resultsType = category;

    const url = getCategoryURL(category, this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleCategory = (category) => {
    this.setState({ pageNum: 1 }, () => this.fetchCategory(category))
  }



  ///////////////////////////////
  // API FETCHING
  ///////////////////////////////
  

  fetchMovies = (search) => {
    this.resultsType = search;

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
    this.setState({ searchTerm: e.target.value });
    // Took out pageNum: 1  in the state
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ pageNum: 1 }, () => {
      this.fetchMovies(this.state.searchTerm);
    });
  }


// This doesn't work properly
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('----THIS IS THE CURRENT SEARCH TERM-----:', this.state.searchTerm);
  //   console.log('----THIS IS THE CURRENT MOVIE DATA-----:', this.state.movies);
  //   if(this.state.searchTerm.length === 0) {
  //     this.setState({ movies: [], searchTerm: '', totalPages: null }, () => {
  //       this.fetchMovies(this.state.searchTerm);
  //     })
  //   } else {

  //   this.setState({ pageNum: 1 }, () => {
  //     this.fetchMovies(this.state.searchTerm);
  //   });
  //   }
  // }
  

  componentDidMount(){

    this.fetchNowPlaying();
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
    }, this.handleGenreOrCategory)
  }

  handleGenreOrCategory() {
    if (isGenre(this.resultsType)) {
      this.fetchGenre(this.resultsType)
    } else if (isCategory(this.resultsType)) {
      this.fetchCategory(this.resultsType)
    } else {
      this.fetchMovies(this.resultsType)
    }
  }


  ///////////////////////////////
  // PAGINATION
  ///////////////////////////////

  pagination = (pageNumber) => {
    this.setState({
      pageNum: pageNumber
    }, this.handleGenreOrCategory)
  }

  ///////////////////////////////
  // MOVIE OVERVIEW
  ///////////////////////////////x

  setMovieInfo = (id) => {
    // const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    // const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    // this.setState({ currentMovie: newCurrentMovie })
    this.fetchMovieId(id)
  }

  fetchMovieId = (id) => {
    const url = constructMovieIdURL(id)

    fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          movie: json
        })
      })
  }

  closeMovieInfo = () => {
    this.setState({ movie: null })
  }

  fetchSimilarMovieId = (id) => {
    const url = constructSimilarMovieIdURL(id);

    fetch(url)
    .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          similarMovies: json.results
        })
      })
  }

  setSimilarMovieInfo = (id) => {
    this.fetchSimilarMovieId(id)
  }
 
  // fetchMovieTrailer = (id) => {
  //   const url = 'https://api.themoviedb.org/3/movie/${id}/videos?api_key=6b81323b3985de25250ad91d5c48d5b2';


  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => {
  //       console.log(json)
  //       this.setState({
  //         movieTrailer: json.results
  //       })
  //     })
  // }

  // setMovieTrailer = (id) => {
  //   this.fetchMovieTrailer(id)
  // }




  ///////////////////////////////
  // RENDER
  ///////////////////////////////

  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }


    // const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className={`App ${this.state.movie && 'some-class'}`}>
        {/* example error handling */}
        {/* this.state.customError && <div>
            Error!
            <br/>
            {this.state.customError}
            <button onClick={() => this.setState({customError: null})}>Close</button>
        </div> */}

        {this.state.movie === null ? 
          <div>
            <SearchBox
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
              handleTrending={this.handleTrending}
              handleNowPlaying={this.handleNowPlaying}
              searchTerm={this.state.searchTerm}
              handleTopRated={this.handleTopRated}
              handleAction={this.handleAction}
              handleAdventure={this.handleAdventure}
              handleComedy={this.handleComedy}
              handleCrime={this.handleCrime}
              handleHorror={this.handleHorror}
              handleRomance={this.handleRomance}
              handleSciFi={this.handleSciFi}
              handleWar={this.handleWar}
            /> 
            <MovieList  movies={this.state.movies} setMovieInfo={this.setMovieInfo} similarMovies={this.state.similarMovies} setSimilarMovieInfo={this.setSimilarMovieInfo} />
          </div>
          :
          <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.movie} setMovieInfo={this.setMovieInfo} similarMovies={this.state.similarMovies} setSimilarMovieInfo={this.setSimilarMovieInfo} />
        }


        { this.state.totalPages > 1 && this.state.movie === null ? 
          <Pagination 
            movies={this.state.movies} 
            totalPages={this.state.totalPages} 
            pagination={this.pagination} 
            pageNum={this.state.pageNum} />
           : '' }
        { this.state.totalPages > 1 && this.state.movie === null ?
          <Pages
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            pageNum={this.state.pageNum}
            totalPages={this.state.totalPages}
            movies={this.state.movies}
          />
          : '' }
      </div>
    );
  }
}
export default App;



// API KEY  6b81323b3985de25250ad91d5c48d5b2


// TO DO LIST

// 1. add an active page underline when you are on the page + add unclickable active page
// 2. add a click to go to next page function.
// 3. If typed something nonsensical in search --> output "Sorry we couldn't find that page"
// 4. add a first and last page