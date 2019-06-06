import React from 'react';

const Movie = (props) => {
	return(
		<div>
			<div>
				<h1>{props.movieTitle}</h1>
				{
					props.posterImage == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card" style={{ width: "25%", height: "360px" }} /> :
						<img src={`https://image.tmdb.org/t/p/w92${props.posterImage}`} alt="card"/>
				}

				
			</div>
			<div>
				{
					<img src={`https://image.tmdb.org/t/p/w300${props.backdropImage}`} alt="cardbackdrop" />
				}
			</div>

			<div className="card-content">
				<p><a href="#">View Details</a></p>
			</div>
		</div>
	)
}

export default Movie;