import React from 'react';
import { ReactComponent as Search } from "../img/SVG/search.svg";
import { ReactComponent as Instagram } from "../img/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../img/SVG/twitter.svg";
import { ReactComponent as Github } from "../img/SVG/github.svg";
import { ReactComponent as Exit } from "../img/SVG/cross.svg";
import SimilarMovieList from './SimilarMovieList';
import StarRatings from './StarRatings';
import { spawn } from 'child_process';


const MovieInfo = (props) => {

	const { poster_path, backdrop_path, overview, vote_average, release_date, title, genres, homepage, production_companies, vote_count, imdb_id } = props.currentMovie

	console.log('ADSGFADFHGADFGAEFGASDFGFGFFGFGFGFGF', props.similarMovies)
	console.log('asdfiuahsdfoiahsdoifhaiosdhfiahdf', props.currentMovie)
	return (
		<div className="movieInfo-container">
			<div className="backdrop">
				{ poster_path != null && <img className="backdrop--movieBackground" src={`https://image.tmdb.org/t/p/original${backdrop_path}`} /> }
			</div>
			<div className="goback" onClick={props.closeMovieInfo}>
				<div className="exit">
					<Exit className="exit-svg" />
				</div>
			</div>
			<div className="row-info">
				<div className="containerInfo">
					<div className="containerInfo--picture">
						{poster_path == null ? <img className="movieInfo-image no-image" src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"}/> :
						<img className="movieInfo-image" src={`https://image.tmdb.org/t/p/w500${poster_path}`} /> }
					</div>
				
					<div className="movieInfo">
						<div className="container">
							<StarRatings rating={vote_average} votes={vote_count} />
							<h1 className="movieInfo-header">{title}</h1>
							<p className="infoTitle">Genres:</p>
							<p className="info">{ genres.map(genre => genre.name).join(', ') }</p>
							<p className="infoTitle">Overview:</p>
							{ overview === "" ? <p className="info">There is no info for this movie</p> : <p className="info">{overview}</p> }
							<p className="infoTitle">Vote Average</p>
							<p className="infoTitle">Release Date</p>
							<p className="info">{release_date.substring(5).split("-").concat(release_date.substring(0, 4)).join("/")}</p>
							<p className="infoTitle">Production Companies:</p><p className="info">{production_companies.map(company => company.name).join(', ')}</p>
							<div className="production-imgs-container">{production_companies.map(img => img.logo_path && <img className="production-imgs" src={`https://image.tmdb.org/t/p/w92${img.logo_path}`} />) }</div>
							<a href={`https://www.imdb.com/title/${imdb_id}/`}><p className="info anchor">Additional Information</p></a>
						</div>
					</div>
				</div>
				<SimilarMovieList similarMovies={props.similarMovies} setMovieInfo={props.setMovieInfo} setSimilarMovieInfo={props.setSimilarMovieInfo} />
			</div>
			{/* <SimilarMovieList similarMovies={props.similarMovies} setMovieInfo={props.setMovieInfo} setSimilarMovieInfo={props.setSimilarMovieInfo} /> */}
		</div>
	)
}

export default MovieInfo;