import React from 'react';
import SimilarMovie from './SimilarMovie';

const SimilarMovieList = (props) => {
	
	return (
		<div className="similarMovies-banner">
			{props.similarMovies.length < 1 ? <h1 className="similarMovies-header">Sorry, we can't find any similar movies :'(</h1> : <h1 className="similarMovies-header">Some other movies you might enjoy ... </h1> }
			<div className="similar-movie-container ">
				{props.similarMovies
					.slice(0, 5)
					.map((movie) =>
						<SimilarMovie
							key={movie.id}
							movie={movie}
							setMovieInfo={props.setMovieInfo}
							setSimilarMovieInfo={props.setSimilarMovieInfo}
						/>
					)}
			</div>
		</div>
	)
}

export default SimilarMovieList;


