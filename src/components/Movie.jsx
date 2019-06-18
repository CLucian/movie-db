import React from 'react';

const Movie = (props) => {
	
	let pop = props.popIndex;
	let popularity;
	// console.log(pop)
	if (pop < 8) {
		popularity = null;
	} else {

		popularity = 
			<div>

				{
					props.posterImage == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card" style={{ width: "25%", height: "360px" }} /> :
						<div>
							<h1>{props.movieTitle}</h1>
							<img src={`https://image.tmdb.org/t/p/w92${props.posterImage}`} alt="card" />
						</div>
				}

				{
					props.backdropImage == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card" style={{ width: "50%", height: "360px" }} /> :
						<div>
							<img src={`https://image.tmdb.org/t/p/w300${props.backdropImage}`} alt="cardbackdrop" />
						</div>
				}

			</div>
	}

	return(
			<div>
					{popularity}
			</div>
	)
}

export default Movie;

// movie searches come out based off popularity

