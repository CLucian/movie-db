import React, { Component } from 'react';
import { ReactComponent as Discover } from "../img/SVG/ticket.svg";
import { ReactComponent as Stats } from "../img/SVG/stats-dots.svg";
import comedy from '../img/SVG/comedy.png';
import action from '../img/SVG/Arnold.png';
import adventure from '../img/SVG/Sheen.png';
import crime from '../img/SVG/batman.png';
import horror from '../img/SVG/knife.png';
import playing from '../img/SVG/playing.png';
import romance from '../img/SVG/rose.png';
import sciFi from '../img/SVG/leo.png';
import stats from '../img/SVG/stats.png'
import war from '../img/SVG/war.png';


// import { ReactComponent as Search } from "../img/SVG/search.svg";

class SearchBox extends Component {
	render() {
		return (
			<div className="container-searchbox">
				<div className="row">
					<form action="" onSubmit={this.props.handleSubmit} className="searchForm">
						<div className="input-field">
							<input placeholder="Search Movie Title..." /*{`${props.searchTerm}`}*/ type="text" onChange={this.props.handleChange} className="__searchTerm" />
						</div>
						{/* <div className="submit">{
							props.searchTerm.length > 0 ? 
							<button className="search-button" onClick={props.handleSubmit}>
								<Search className="search-button__searchIcon" />
							</button>
							: null}
						</div> */}

					</form>
					<div className="discover">
						{/* <Discover className="discoverbtn" onClick={this.props.handleTrending} /> */}
						<button className="btn-genre" onClick={this.props.handleNowPlaying}><img className="icon-picture" src={playing} alt="now playing" />Now Playing</button>
						<button className="btn-genre" onClick={this.props.handleTopRated}><img className="icon-picture" src={stats} alt="top rated" />Top Rated</button>
						<button className="btn-genre" onClick={this.props.handleAction}><img className="icon-picture" src={action} alt="action" />Action</button>
						<button className="btn-genre" onClick={this.props.handleAdventure}><img className="icon-picture" src={adventure} alt="adventure" />Adventure</button>
						<button className="btn-genre" onClick={this.props.handleComedy}><img className="icon-picture" src={comedy} alt="comedy"/>Comedy</button>
						<button className="btn-genre" onClick={this.props.handleCrime}><img className="icon-picture" src={crime} alt="crime" />Crime</button>
						<button className="btn-genre" onClick={this.props.handleHorror}><img className="icon-picture" src={horror} alt="horror" />Horror</button>
						<button className="btn-genre" onClick={this.props.handleRomance}><img className="icon-picture" src={romance} alt="romance" />Romance</button>
						<button className="btn-genre" onClick={this.props.handleSciFi}><img className="icon-picture" src={sciFi} alt="sciFi" />Sci-Fi</button>
						<button className="btn-genre" onClick={this.props.handleWar}><img className="icon-picture" src={war} alt="war" />War</button>
						
						{/* <button className="discover__button" type="button" onClick={props.handleTrending}>Popular Movies</button> */}
					</div>
				</div>
			</div>
		)
	}
}


export default SearchBox;


{/* <svg class="icon icon-search"> */ }
{/* <use xlinkHref="img/SVG/search.svg#icon-search">
								</use>
							</svg> */}