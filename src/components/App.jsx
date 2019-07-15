// import React, { Component } from 'react';
import React from 'react';          
import { debounce } from 'lodash';

// component imports
import MovieList from './MovieList';
import Pagination from './Pagination';
import Pages from './Pages';
import SearchBox from './SearchBox';
import MovieInfo from './MovieInfo';
// import Movie from './Movie';


// styles imports
import '../sass/main.scss';

// url import
import { constructTrendingURL, constructSearchURL, constructNowPlayingURL, constructTopRatedURL, constructActionURL, constructAdventureURL,
  constructComedyURL, constructCrimeURL, constructHorrorURL, constructRomanceURL, constructSciFiURL, constructWarURL
} from '../utils/url.js';



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
      popIndex: 5,
      currentMovie: null
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
    this.setState({ searchTerm: e.target.value });
    // Took out pageNum: 1  in the state
  }

// This doesn't work properly
  handleSubmit = (e) => {
    e.preventDefault();
    console.log('----THIS IS THE CURRENT SEARCH TERM-----:', this.state.searchTerm);
    console.log('----THIS IS THE CURRENT MOVIE DATA-----:', this.state.movies);
    if(this.state.searchTerm.length === 0) {
      this.setState({ movies: [], searchTerm: '', totalPages: null }, () => {
        this.fetchMovies(this.state.searchTerm);
      })
    } else {

    this.setState({ pageNum: 1 }, () => {
      this.fetchMovies(this.state.searchTerm);
    });
    }
  }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   this.setState({ pageNum: 1 }, () => {
  //     this.fetchMovies(this.state.searchTerm);
  //   });
  // }
  


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

  
  fetchNowPlaying = () => {
    this.resultsType = 'nowPlaying';

    const url = constructNowPlayingURL(this.state.pageNum)

    fetch(url)
    .then(data => data.json())
    .then(data => {
      this.setState({
        movies: data.results,
        totalPages: data.total_pages
      })
    })
  }

  componentDidMount(){
    this.fetchNowPlaying();
  }


  handleNowPlaying = () => {
    this.setState({ pageNum: 1 }, () => this.fetchNowPlaying())
  }


  fetchTopRated = () => {
    this.resultsType = 'topRated';

    const url = constructTopRatedURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleTopRated = () => {
    this.setState({ pageNum: 1 }, () => this.fetchTopRated())
  }

  
  fetchAction = () => {
    this.resultsType = 'action';

    const url = constructActionURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleAction = () => {
    this.setState({ pageNum: 1 }, () => this.fetchAction())
  }

  fetchAdventure = () => {
    this.resultsType = 'adventure';

    const url = constructAdventureURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleAdventure = () => {
    this.setState({ pageNum: 1 }, () => this.fetchAdventure())
  }

  fetchComedy = () => {
    this.resultsType = 'comedy';

    const url = constructComedyURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }
  
  handleComedy = () => {
    this.setState({ pageNum: 1 }, () => this.fetchComedy())
  }


  fetchCrime = () => {
    this.resultsType = 'crime';

    const url = constructCrimeURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleCrime = () => {
    this.setState({ pageNum: 1 }, () => this.fetchCrime())
  }

  fetchHorror = () => {
    this.resultsType = 'horror';

    const url = constructHorrorURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleHorror = () => {
    this.setState({ pageNum: 1 }, () => this.fetchHorror())
  }
 
  fetchRomance = () => {
    this.resultsType = 'romance';

    const url = constructRomanceURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleRomance = () => {
    this.setState({ pageNum: 1 }, () => this.fetchRomance())
  }

  fetchSciFi = () => {
    this.resultsType = 'scifi';

    const url = constructSciFiURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleSciFi = () => {
    this.setState({ pageNum: 1 }, () => this.fetchSciFi())
  }

  fetchWar = () => {
    this.resultsType = 'war';

    const url = constructWarURL(this.state.pageNum)

    fetch(url)
      .then(data => data.json())
      .then(data => {
        this.setState({
          movies: data.results,
          totalPages: data.total_pages
        })
      })
  }

  handleWar = () => {
    this.setState({ pageNum: 1 }, () => this.fetchWar())
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
      } else if (this.resultsType === 'nowPlaying') {
        this.fetchNowPlaying()
      } else if (this.resultsType === 'topRated') {
        this.fetchTopRated()
      } else if (this.resultsType === 'action') {
        this.fetchAction()
      } else if (this.resultsType === 'adventure') {
        this.fetchAdventure()
      } else if (this.resultsType === 'comedy') {
        this.fetchComedy()
      } else if (this.resultsType === 'crime') {
        this.fetchCrime()
      } else if (this.resultsType === 'horror') {
        this.fetchHorror()
      } else if (this.resultsType === 'romance') {
        this.fetchRomance()
      } else if (this.resultsType === 'scifi') {
        this.fetchSciFi()
      } else if (this.resultsType === 'war') {
        this.fetchWar()
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
      } else if (this.resultsType === 'nowPlaying') {
        this.fetchNowPlaying()
      } else if (this.resultsType === 'topRated') {
        this.fetchTopRated()
      } else if (this.resultsType === 'action') {
        this.fetchAction()
      } else if (this.resultsType === 'adventure') {
        this.fetchAdventure()
      } else if (this.resultsType === 'comedy') {
        this.fetchComedy()
      } else if (this.resultsType === 'crime') {
        this.fetchCrime()
      } else if (this.resultsType === 'horror') {
        this.fetchHorror()
      } else if (this.resultsType === 'romance') {
        this.fetchRomance() 
      } else if (this.resultsType === 'scifi') {
        this.fetchSciFi()
      } else if (this.resultsType === 'war') {
        this.fetchWar()
      }
    })
  }

  ///////////////////////////////
  // MOVIE OVERVIEW
  ///////////////////////////////

  movieInfo = (id) => {
    const filteredMovie = this.state.movies.filter(movie => movie.id === id)
    const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null

    this.setState({ currentMovie: newCurrentMovie })

  }

  closeMovieInfo = () => {
    this.setState({ currentMovie: null })
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
        {this.state.currentMovie === null ? 
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
          <MovieList movies={this.state.movies} movieInfo={this.movieInfo} />
        </div> : <MovieInfo closeMovieInfo={this.closeMovieInfo} currentMovie={this.state.currentMovie} /> }


        { this.state.totalPages > 1 && this.state.currentMovie === null ? 
          <Pagination 
            movies={this.state.movies} 
            totalPages={this.state.totalPages} 
            pagination={this.pagination} 
            pageNum={this.state.pageNum} />
           : '' }

        { this.state.totalPages > 1 && this.state.currentMovie === null ?
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