import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
	
	return(
		<div className="movie-container">
		
			{
				props.movies.length === 0 ?
				<h1 className="no-movie-text">Oops! We couldn't find that movie.</h1> :
					props.movies
						.map((movie) =>
							<Movie
								key={movie.id}
								movie={movie}
								setMovieInfo={props.setMovieInfo}
								setSimilarMovieInfo={props.setSimilarMovieInfo} 
							/>
					)
			}
			

		</div>
	)
}

export default MovieList;


