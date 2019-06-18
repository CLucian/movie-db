import React from 'react';

const Movie = (props) => {
	

	const popularity = () => {
		let pop = props.popIndex;
		console.log(pop)
		if (pop < 5) {
			return <h1>BELOW 5 POP</h1>
		} else {
			console.log(props.popIndex)
			return (
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
			)
		}
	}

	return(
		<div>
			<div>
					{popularity()}
			</div>
			<div className="card-content">
				<p><a href="#">View Details</a></p>
			</div>
		</div>
	)
}

export default Movie;


{/* {
					props.posterImage == null ? <img src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt="card" style={{ width: "25%", height: "360px" }} /> :
					<div>	
						<h1>{props.movieTitle}</h1> 
						<img src={`https://image.tmdb.org/t/p/w92${props.posterImage}`} alt="card"/>
					</div>
				} */}