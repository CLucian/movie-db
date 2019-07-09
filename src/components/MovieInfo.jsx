import React from 'react';
import { ReactComponent as Search } from "../img/SVG/search.svg";
import { ReactComponent as Instagram } from "../img/SVG/instagram.svg";
import { ReactComponent as Twitter } from "../img/SVG/twitter.svg";
import { ReactComponent as Github } from "../img/SVG/github.svg";

const MovieInfo = (props) => {
	return (
		<div className="movieInfo-container">
			<div className="backdrop">
				<img className="backdrop--movieBackground" src={`https://image.tmdb.org/t/p/original${props.currentMovie.backdrop_path}`} />
			</div>
			<div className="row go-back" onClick={props.closeMovieInfo}>
				<span className="goback">Go Back</span>
			</div>
			<div className="row-info">
				<div className="containerInfo">
					<div className="containerInfo--picture">
					{props.currentMovie.poster_path === null ? <img src={"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg"}/> :
						<img src={`https://image.tmdb.org/t/p/w342${props.currentMovie.poster_path}`} /> }
					</div>
				
					<div className="movieInfo">
						<div className="container">
							<h1>{props.currentMovie.title}</h1>
							<p className="infoTitle">Overview:</p>
							<p className="info">{props.currentMovie.overview}</p>
							<p className="infoTitle">Vote Average</p>
							<p className="info">{props.currentMovie.vote_average}/10</p>
							<p className="infoTitle">Release Date</p>
							<p className="info">{props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
						</div>
					</div>
				</div>
			<div className="developer">
				<p className="developer--text">Designed and Developed by Lucian Covic</p>
				<div className="developer--svgs">
					<a href="https://www.instagram.com/looseein_c/"><Instagram className="svg" /></a>
					<a href="https://www.twitter.com/"><Twitter className="svg" /></a>
					<a href="https://github.com/CLucian"><Github className="svg" /></a>
				</div>
			</div>
			</div>
		</div>
	)
}

export default MovieInfo;