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
import DropDown from './DropDown';


// import { ReactComponent as Search } from "../img/SVG/search.svg";

class SearchBox extends Component {
	render() {
		return (
			<div className="container-searchbox">
				<div className="row">
					{/* <div className="fa fa-bars drop-down"></div> */}
					{/* <DropDown /> */}
					<div className="discover">
						{/* <Discover className="discoverbtn" onClick={this.props.handleTrending} /> */}
						<button className="btn-genre" onClick={this.props.handleNowPlaying}><img className="icon-picture" src={playing} alt="now playing" /><span>Now Playing</span></button>
						<button className="btn-genre" onClick={this.props.handleTopRated}><img className="icon-picture" src={stats} alt="top rated" /><span>Top Rated</span></button>
						<button className="btn-genre" onClick={this.props.handleAction}><img className="icon-picture" src={action} alt="action" /><span>Action</span></button>
						<button className="btn-genre" onClick={this.props.handleAdventure}><img className="icon-picture" src={adventure} alt="adventure" /><span>Adventure</span></button>
						<button className="btn-genre" onClick={this.props.handleComedy}><img className="icon-picture" src={comedy} alt="comedy" /><span>Comedy</span></button>
						<button className="btn-genre" onClick={this.props.handleCrime}><img className="icon-picture" src={crime} alt="crime" /><span>Crime</span></button>
						<button className="btn-genre" onClick={this.props.handleHorror}><img className="icon-picture" src={horror} alt="horror" /><span>Horror</span></button>
						<button className="btn-genre" onClick={this.props.handleRomance}><img className="icon-picture" src={romance} alt="romance" /><span>Romance</span></button>
						<button className="btn-genre" onClick={this.props.handleSciFi}><img className="icon-picture" src={sciFi} alt="sciFi" /><span>Sci-Fi</span></button>
						<button className="btn-genre" onClick={this.props.handleWar}><img className="icon-picture" src={war} alt="war" /><span>War</span></button>
					</div>
				</div>
				<div className="row row2">
					<form action="" onSubmit={this.props.handleSubmit} className="searchForm">
						<div className="input-field">
							<input className="__searchTerm" placeholder="Search Movie Title..." /*{`${props.searchTerm}`}*/ type="text" onChange={this.props.handleChange} />
						</div>
					</form>
				</div>		
			</div>
		)
	}
}


export default SearchBox;

