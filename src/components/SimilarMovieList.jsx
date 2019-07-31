import React from 'react';
import SimilarMovie from './SimilarMovie';

const SimilarMovieList = (props) => {
	return (
		<div className="movie-container">
			{props.similarMovies
				.map((movie) =>
					<SimilarMovie
						key={movie.id}
						movie={movie}
						setMovieInfo={props.setMovieInfo}
						setSimilarMovieInfo={props.setSimilarMovieInfo}
					/>
				)}
		</div>
	)
}

export default SimilarMovieList;


