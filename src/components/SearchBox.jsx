import React, { Component } from 'react';
import { ReactComponent as Discover } from "../img/SVG/ticket.svg";


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
						<Discover className="discoverbtn" onClick={this.props.handleTrending} />
						<button onClick={this.props.handleNowPlaying}>Now Playing</button>
						<button onClick={this.props.fetchTopRated}>Top Rated</button>
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