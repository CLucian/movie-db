import React from 'react';
import { ReactComponent as Search } from "../img/SVG/search.svg";
import { ReactComponent as Instagram } from "../img/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../img/SVG/twitter.svg";
import { ReactComponent as Github } from "../img/SVG/github.svg";
import { ReactComponent as Exit } from "../img/SVG/cross.svg";
import SimilarMovieList from './SimilarMovieList';


const MovieInfo = (props) => {

	const { poster_path, backdrop_path, overview, vote_average, release_date, title } = props.currentMovie

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
						<img className="movieInfo-image" src={`https://image.tmdb.org/t/p/w342${poster_path}`} /> }
					</div>
				
					<div className="movieInfo">
						<div className="container">
							<h1 className="movieInfo-header">{title}</h1>
							<p className="infoTitle">Overview:</p>
							{ overview === "" ? <p className="info">There is no info for this movie</p> : <p className="info">{overview}</p> }
							<p className="infoTitle">Vote Average</p>
							{vote_average > 0 && <p className="info">{vote_average} / 10</p>}
							<p className="infoTitle">Release Date</p>
							<p className="info">{release_date.substring(5).split("-").concat(release_date.substring(0, 4)).join("/")}</p>
						</div>
					</div>
				</div>
			{/* <div className="developer">
				<p className="developer--text">Designed and Developed by Lucian Covic</p>
				<div className="developer--svgs">
					<a href="https://www.instagram.com/looseein_c/"><Instagram className="svg" /></a>
					<a href="https://www.twitter.com/"><Twitter className="svg" /></a>
					<a href="https://github.com/CLucian"><Github className="svg" /></a>
				</div>
			</div> */}
			</div>
			<div className="similarMovies">
				<SimilarMovieList similarMovies={props.similarMovies} setMovieInfo={props.setMovieInfo} setSimilarMovieInfo={props.setSimilarMovieInfo} />
			</div>
		</div>
	)
}

export default MovieInfo;