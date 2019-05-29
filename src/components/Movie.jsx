import React from 'react';

const Movie = (props) => {
	return(
		<div>
			<div>
				{
					props.image == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card" style={{ width: "25%", height: "360px" }} /> :
						<img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt="card" style={{ width: "25%", height: "360px" }}/>
				}
			</div>
			<div className="card-content">
				<p><a href="#">View Details</a></p>
			</div>
		</div>
	)
}

export default Movie;