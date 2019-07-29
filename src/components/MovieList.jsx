import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
	return(
		<div className="movie-container">
			{props.movies
				.map((movie) =>
					<Movie
						key={movie.id}
						movie={movie}
						setMovieInfo={props.setMovieInfo}
					/>
			)}
		</div>
	)
}

export default MovieList;


