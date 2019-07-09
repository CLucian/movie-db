import React from 'react';


const Movie = (props) => {
	
	let pop = props.popIndex;
	let popularity;
	// console.log(pop)
	if (pop < 0.0001) {
		popularity = null;
	} else {

		popularity = 
			<div>

				{
					props.posterImage == null ? 
	
						<div>
							<img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} className="movie-thumbnail" alt="card" style={{ width: "185px", height: "278px" }} />
							<h1 className="movieHeader">{props.movieTitle}</h1>
						</div> 

						:
						<div onClick={() => props.movieInfo(props.movieId)}>
							<img src={`https://image.tmdb.org/t/p/w185${props.posterImage}`} className="movie-thumbnail" alt="card" />
							<h1 className="movieHeader">{props.movieTitle}</h1>
						</div>
				}

			</div>
	}

	return(
			<div className="movie-card">
					{popularity}
			</div>
	)
}

export default Movie;

// movie searches come out based off popularity

