import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

	const movieData = [].concat(props.movies)
		.sort((a, b) => b.popularity - a.popularity)
		.map((movie, i) => 
			<div>
				<Movie key={i} popIndex={movie.popularity} movieTitle={movie.original_title} posterImage={movie.poster_path} backdropImage={movie.backdrop_path} />
			</div>
		)
	console.log(movieData)
	return(
		<div className="movie-container">
				{ movieData }
		</div>
	)
}

export default MovieList;

// props.movies.map((movie, i) => {
// 	return (
// 		<div className="container">
// 			<Movie key={i} popIndex={movie.popularity} movieTitle={movie.original_title} posterImage={movie.poster_path} backdropImage={movie.backdrop_path} />
// 		</div>
// 	)
// })