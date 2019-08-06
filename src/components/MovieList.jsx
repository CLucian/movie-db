import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {

	console.log('PROPS DOT MOVIES',props.movies)
	return(
		<div className="movie-container">
			{props.movies
				.map((movie) =>
					<Movie
						key={movie.id}
						movie={movie}
						setMovieInfo={props.setMovieInfo}
						setSimilarMovieInfo={props.setSimilarMovieInfo} 
					/>
			)}
		</div>
	)
}

export default MovieList;


