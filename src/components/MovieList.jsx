import React from 'react';
import Movie from './Movie';

const MovieList = (props) => {
	return(
		<div className="container">
				{
					props.movies.map((movie, i) => {
						return (
							<div className="container">
								<div className="__row">
									<Movie key={i} popIndex={movie.popularity} movieTitle={movie.original_title} posterImage={movie.poster_path} backdropImage={movie.backdrop_path} />
								</div>
							</div>
						)
					})
				}
		</div>
	)
}

export default MovieList;