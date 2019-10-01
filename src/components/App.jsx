// import React, { Component } from 'react';
import React from 'react';          

// component imports
import DropDown from './DropDown';
import MovieList from './MovieList';
import Pagination from './Pagination';
import Pages from './Pages';
import SearchBox from './SearchBox';
import MovieInfo from './MovieInfo';
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



class App extends React.Component {
  constructor(props) {
    super(props)

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
    // Creates a new function by binding the context (this) and argument (genre/category/pageNum) to a function


    // PAGE NUMBER / DIRECTIONAL
    this.nextPage = this.changePage.bind(this, 1);
    this.prevPage = this.changePage.bind(this, -1);


    // GENRE
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
    this.setState({ pageNum: 1, searchTerm: '' }, () => this.fetchGenre(genre))
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
    this.setState({ pageNum: 1, searchTerm: '' }, () => this.fetchCategory(category))
  }


  ///////////////////////////////
  // API FETCHING
  ///////////////////////////////
  

  // Sets the searchTerm state to what is typed in the input value
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  // Calls fetchMovies when the search term is submitted
  handleSubmit = (e) => {
    e.preventDefault();
    // Page number set to 1 so if we switch from a previous page (ex: page 10) our page we view won't also be page 10 but page 1
    this.setState({ pageNum: 1 }, () => {
      // Calls fetchMovie API fetch for typed search term
      this.fetchMovies(this.state.searchTerm);
    });
  }


  // API fetch to TMDB, sets movie state and total pages to API results
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

        // Just in case an JSON does not provide a results field
        else {
          this.setState({ movies: [] });
        }
      })
      .catch((err) => console.log('PARSING FAILURE', err));
  }

  
  // Loads fetchNowPlaying movies when default page loads
  componentDidMount(){
    this.fetchNowPlaying();
  }


  ///////////////////////////////
  // PAGE CHANGING
  ///////////////////////////////

  // dir = direction
  

  changePage = (dir) => {
    let pageNumber = this.state.pageNum;

    // If no input --> return same page
    if (this.state.movies.length === 0) {
      return 
    } 
    // If moving forward on pages, increases the page number by 1
    if (dir === 1){
      pageNumber += 1;
    // If moving backwards on pages AND page number is already greater than 1, then decreases page number by 1
    } else if (dir === -1 && pageNumber > 1) {
      pageNumber -= 1;
    }
    // Afterwards updates state and runs the handleGenreOrCategory function
    this.setState({
      pageNum: pageNumber
    }, this.handleGenreOrCategory)
  }

  handleGenreOrCategory() {
    // Communicates with helper function isGenre (in helpers.js) to determine if this.resultsType includes a genre in the isGenre function and runs fetchGenre if so
    if (isGenre(this.resultsType)) {
      this.fetchGenre(this.resultsType)
    // Communicates with helper function isCategory (in helpers.js) to determine if this.resultsType includes a genre in the isCategory function and runs fetchCategory if so
    } else if (isCategory(this.resultsType)) {
      this.fetchCategory(this.resultsType)
    // If none of the functions above are satisfied, will fetchMovies with search resultsType (in case of error)
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
    this.fetchMovieId(id)
  }


  // fetches API from url in url file (constructMovieIdURL) which takes in the ID of a specific movie, then sets movie state to result of movie from API
  fetchMovieId = (id) => {
    const url = constructMovieIdURL(id)

    fetch(url)
      .then(res => res.json())
      .then(json => {
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



  ///////////////////////////////
  // RENDER
  ///////////////////////////////

  render() {
    if(!this.state.isLoaded) {
      return <div>LOADING...</div>
    }


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
            <DropDown
              handleNowPlaying={this.handleNowPlaying}
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
