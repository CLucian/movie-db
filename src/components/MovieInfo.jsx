import React from 'react';

const MovieInfo = (props) => {
	return (
		<div className="container">
			<div className="row" onClick={props.closeMovieInfo} style={{ cursor: "pointer", paddingTop: 50}}>
				<span style={{marginLeft: 10}}>Go Back</span>
			</div>
			<div className="row">
				<div>
				{props.currentMovie.poster_path === null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"} style={{ width: "100%", height: 360 }}/> :
					<img src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`} style={{ width: "100%", height: 360 }} /> }
				</div>
			
				<div className="container-12">
					<div className="container">
						<p>{props.currentMovie.title}</p>
						<p>{props.currentMovie.release_date}</p>
						<p>{props.currentMovie.overview}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MovieInfo;